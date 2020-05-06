<template>
    <v-dialog v-model="inputValue" scrollable max-width="500px">
      <v-card>
        <v-skeleton-loader
            type="article"
            v-if="loading" 
          >
        </v-skeleton-loader>
        <v-card-text v-else-if="item" style="max-height: calc(100vh - 300px);" class="pa-5">
          <h3>{{item.title}}</h3>
          <pre class="mt-5"><p>{{item.content}}</p></pre>
          <p class="mt-5">{{item.created_at}}</p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            dark
            rounded
            class="mr-5"
            @click="inputValue = false"
          >
            {{$t('base.close')}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>    
  </v-fab-transition>
</template>

<script>
  export default {
    components: {
    },
    props: {
      value:{default: false},
      notification:{default: null},
      viewAction:{default: null},
      vularId: {default: 'view-notification-dialog'},
    },
    data: () => ({
      loading:false,
      item:null,
    }),

    computed:{
      inputValue: {
        get:function() {
          return this.value;
        },
        set:function(val) {
          this.$emit('input', val);
        },
      },
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
          this.item = model
          this.loading = false
        }
      },

      onActionError(vularId, error){
        if(vularId == this.vularId){
         this.loading = false
        }
      },
    },

    watch:{
      inputValue(val){
        if(this.viewAction && val){
          this.loading = true
          $bus.$emit('VularAction', this.viewAction, this.vularId, this.notification)
        }
      } 
    }    
  }
</script>
