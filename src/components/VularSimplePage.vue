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
          v-if="backAction"
          @click="onBack"
        >
          <v-icon dark>mdi-arrow-left</v-icon>
        </v-btn>
        {{title}}
      </h1>
      <v-row>
        <v-col md="7">
          <v-card class="mt-5"
            flat
            :color="$store.state.vularApp.content.card.color" 
            :style="$store.state.vularApp.content.card.style"
          >
            <v-card-text class="pa-5">
              <h3>新用户注册</h3> 
              <p class="my-3">2020-05-7 12:30</p>
              <p >5月6日下午，阅文集团CEO程武、总裁侯晓楠、总编辑杨晨等新管理团队与多位作家参加了首场作家恳谈会，向外界再度进行了解释。<br/>阅文表示，争议合同早在2019年便已经制定，新团队不可能在接手的第二天就做出任何动作。</p>
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
  export default {
    name: "vular-simple-page",
    components: {
    },
    props: {
      vularId: {default: ''},
      title: {default:''},
      backAction:{defalut:null},
      operateButtons:{defalut:()=>{return[]}},
      loadAction:{defalut:null},
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
        if(this.backAction){
          $bus.$emit('VularAction', this.backAction)
        }
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

