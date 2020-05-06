<template>
  <div>
    <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition" v-model="poped">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-badge color="red" overlap v-if="badge">
            <span slot="badge">{{badge}}</span>
            <v-icon medium>mdi-bell-outline</v-icon>
          </v-badge>
          <v-icon v-else medium>mdi-bell-outline</v-icon>
        </v-btn>
      </template>
      <v-card class="elevation-0">
        <v-toolbar dense flat color="transparent">
          <v-toolbar-title><h4>{{$t("notification.list")}}</h4></v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text class="pa-0">
          <v-skeleton-loader
            type="list-item-avatar-two-line, list-item-avatar-two-line, list-item-avatar-two-line, list-item-avatar-two-line"
            style="width: 300px;"
            v-if="loading" 
          >
          </v-skeleton-loader>
          <v-list v-else two-line subheader class="pa-0">
            <template v-for="(item, index) in items">
              <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
              <v-divider v-else-if="item.divider" :key="index"></v-divider>
              <v-list-item v-else :key="item.title" link
                @click="onClick(item)"
              >
                <v-list-item-avatar>
                  <v-icon v-if="item.unread">mdi-email-outline</v-icon>
                  <v-icon v-else>mdi-email-open-outline</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title :class="{'font-weight-bold' : item.unread}"  v-text="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-text="item.timeLabel"></v-list-item-subtitle>
                </v-list-item-content>
               </v-list-item>
            </template>
          </v-list>
          <v-divider></v-divider>
          <v-btn block tile class="ma-0">{{$t("notification.all")}}</v-btn>
          <v-divider></v-divider>
        </v-card-text>
      </v-card>
    </v-menu>
    <ViewDialog 
      v-model = "dialog" 
      :notification = "viewItem"
      :viewAction = "viewAction"
      :vularId = "vularId + '-view-dialog'"></ViewDialog>
  </div>
</template>

<script>
  import ViewDialog from "./ViewDialog"
  export default {
    name: 'vular-notifications',
    components: {
      ViewDialog,
    },
    props:{
      globalField: {default : "notifications"},
      queryAction: {default : null},
      viewAction: {default : null},
      vularId: {default: ''},
    },
    data () {
      return {
        loading:false,
        poped:false,
        items: [],
        dialog:false,
        viewItem:null,
      }
    },

    computed:{
      badge(){
        let globalField = this.globalField
        return globalField ? this.$store.state.globals[globalField] : ''
      }
    },

    created(){
      $bus.$on('dispatchModel', this.onDispatchModel)
      $bus.$on('ActionError', this.onActionError)
    },

    destroyed() {
      $bus.$off('dispatchModel', this.onDispatchModel)
      $bus.$off('ActionError', this.onActionError)
    },

    methods: {
      onDispatchModel(vularId, model){
        if(vularId == this.vularId){
          this.items = model
          this.loading = false
        }
      },

      onActionError(vularId, error){
        if(vularId == this.vularId){
          this.loading = false
        }
      },

      onClick(item){
        this.viewItem = item
        this.dialog = true
      },
    },
    watch:{
      "poped": {
        handler(val){
          if(this.queryAction && val){
            this.loading = true
            $bus.$emit('VularAction', this.queryAction, this.vularId ,val)
          }
        },
        deep: true,        
      },

      dialog(val){
        if(val){

        }
      },
    } 
  }
</script>

<style>
</style>