<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
  >
    <v-container class="mt-5">
      <h1 class="page-title">
        <v-btn class="mr-5" fab dark color="primary"
          width="46" height="46"
          @click="onBack"
        >
          <v-icon dark>mdi-arrow-left</v-icon>
        </v-btn>
        {{title}}
      </h1>
      <v-row>
        <v-col 
          :cols="cols" 
          :sm="sm"
          :md="md"
          :lg="lg"
          :xl="xl"
        >
          <v-card class="mt-5"
            flat
            :color="$store.state.vularApp.content.card.color" 
            :style="$store.state.vularApp.content.card.style"
          >
            <v-card-text class="pa-5">
              <ValidationObserver ref="observer" v-slot="{ validate, reset }">
                <v-form>
                  <VularNode
                    v-for="(schema, index) in layout" 
                    :schema = "schema"
                    :key = "index" 
                    v-model="model">
                  </VularNode>          
                </v-form>
              </ValidationObserver>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="pa-5">
              <v-spacer></v-spacer>

              <v-btn
                v-for="(btn, index) in operateButtons"
                :key="index"
                v-bind="btn.props"
                @click="onAction(btn.action)" 
              >{{btn.text}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  import { ValidationObserver} from 'vee-validate'
  export default {
    name: "vular-simple-page",
    components: {
      ValidationObserver
    },
    props: {
      vularId: {default: ''},
      title: {default:''},
      operateButtons:{default:()=>{return[]}},
      loadAction:{default:null},
      layout:{default:()=>{return[]}},
      cols:{default:undefined},
      sm:{default:undefined},
      md:{default:undefined},
      lg:{default:undefined},
      xl:{default:undefined},
    },

    data: () => ({
      model:{},
    }),

    created(){
      $bus.$on('dispatchModel', this.onDispatchModel)
      $bus.$on('ActionError', this.onActionError)
      $bus.$on('reload', this.onReload)
    },

    mounted() {
      if(this.loadAction){
        this.load()
      }
    },

    destroyed() {
      $bus.$off('dispatchModel', this.onDispatchModel)
      $bus.$off('ActionError', this.onActionError)
      $bus.$off('reload', this.onReload)
    },

    methods: {
      onBack(){
        this.$router.go(-1)
      },

      onAction(action){
          $bus.$emit('VularAction', action, this.vularId)
      },

      load(){
        let data = this.$route.params.data
        this.model = 'loading'
        $bus.$emit('VularAction', this.loadAction, this.vularId, data)
      },

      onReload(vularId){
        if(vularId == this.vularId){
          this.load()
        }
      },

      onDispatchModel(vularId, model){
        if(vularId == this.vularId){
          this.model = model
        }
      },

      onActionError(vularId, error){
        if(vularId == this.vularId){
          this.model = {}
        }
      },

    }
  }
</script>

