<template>
    <v-dialog v-model="dialog" scrollable :max-width="width">
      <template v-slot:activator="{ on }">
        <div class="ma-2" v-on="on">
          <v-icon>{{icon}}</v-icon>
          <v-btn text color="primary">{{title}}</v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title>{{title}}</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="max-height: calc(100vh -300px)">
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
        <v-card-actions class="pa-5 media-alt-dialog-actions">
          <v-spacer></v-spacer>
          <v-btn color="primary" class="mr-5" text rounded @click="dialog = false">{{$t('media.cancel')}}</v-btn>
          <v-btn color="primary" class="mr-5" rounded @click="onConfirm">{{$t('media.confirm')}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
  import { ValidationObserver } from 'vee-validate'
  import { ValidationProvider } from 'vee-validate'

  export default {
    name: "vular-has-one-dialog",
    components: {
      ValidationObserver,
      ValidationProvider
    },
    props: {
      title:{default: '1 to 1 Dialog'},
      width:{default: "600px"},
      icon:{default : ''},
      defaultModel:{default:()=>{ return{} }},
      layout:{default:()=>{ return[] }},
    },

    data: () => ({
      dialog:false,
      model:{},
    }),

    methods: {
      onConfirm(){
        this.$refs.observer.validate()
        return
        //this.dialog = false
      }
    },

    mounted(){
      this.model = Object.assign({}, this.defaultModel)
    },
  }
</script>
