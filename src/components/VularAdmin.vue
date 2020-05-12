<template>
  <v-app v-if="!$store.state.loggedIn"
    :style="{'font-family': $store.state.vularApp.fontFamily}"
  >
    <VularLogin 
      v-if="!$store.state.loggedIn"
    ></VularLogin>
  </v-app>
  <v-app id="admin-app" 
    :style="{'font-family': $store.state.vularApp.fontFamily}"
    v-else
  >
    <v-navigation-drawer
      v-model="$store.state.vularApp.drawer.model"
      :clipped="$store.state.vularApp.drawer.clipped"
      :floating="$store.state.vularApp.drawer.floating"
      :mini-variant="$store.state.vularApp.drawer.mini"
      :mini-variant-width = "$store.state.vularApp.drawer.miniVariantWidth"
      :permanent="$store.state.vularApp.drawer.type === 'permanent'"
      :temporary="$store.state.vularApp.drawer.type === 'temporary'"
      app
      overflow
      :mini-variant.sync="$store.state.vularApp.drawer.mini"
      :dark="$store.state.vularApp.drawer.dark"
      :light="$store.state.vularApp.drawer.light"
      :expand-on-hover = "$store.state.vularApp.drawer.expandOnHover"
      :color="$store.state.vularApp.drawer.color"
      :src="$store.state.vularApp.drawer.src"
    >
      <VularAppDrawer v-model="$store.state.vularApp.drawer"
        :logo = "$store.state.vularApp.logo"
      ></VularAppDrawer>
    </v-navigation-drawer>

    <VularAppbar></VularAppbar>

    <router-view/>
    <ErrorDialog></ErrorDialog>
    <v-snackbar
      v-model="successSnackbar"
      color="success"
      top
      :timeout="3000"
    >
      {{successMessage ? successMessage : $t('base.operateSuccess')}}
      <v-btn
        text
        @click="successSnackbar = false"
      >
        {{$t("base.close")}}
      </v-btn>
    </v-snackbar>

    <AppFab></AppFab>
    <v-footer
      :inset="$store.state.vularApp.footer.inset"
      :dark = "$store.state.vularApp.footer.dark"
      :light = "$store.state.vularApp.footer.light"
      :color = "$store.state.vularApp.footer.color"
      :src = "$store.state.vularApp.footer.src"
      app
    >
      <DebugDialog></DebugDialog>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import VularAppDrawer from "./drawer/VularAppDrawer.vue"
  import VularAppbar from "./VularAppbar.vue"
  import AppFab from "./tools/AppFab"
  import DebugDialog from "./tools/DebugDialog.vue"
  import ErrorDialog from "./tools/ErrorDialog.vue"

  export default {
    components: {
      VularAppDrawer,
      VularAppbar,
      DebugDialog,
      ErrorDialog,
      AppFab
    },
    data: () => ({
      page:{
        name:"dashboard",
        props:{
          title:"仪表盘",
        }
      },
      successSnackbar:false,
      successMessage:'',
    }),

    computed:{
      //activePage(){
      //  return this.pages[this.currenPage]
      //}
    },

    created(){
      console.log(this.$vuetify)

      $bus.$on('VularAction', this.onVularAction)
    },

    mounted() {
    },

    destroyed() {
      $bus.$off('VularAction', this.onVularAction)
    },

    methods: {
      onVularAction(action, vularId, data){
        let self = this
        if(action.name === 'openPage'){
          this.$router.push(action.to).catch(err => {err})
        }

        if(action.name === 'doAction'){
          $axios.post(action.api, {params: action.params, data : data})
          .then((res)=>{
            this.$store.commit("globals", res.data.globals)
            $bus.$emit('dispatchModel', vularId, res.data.pageData)
            if(action.successAction){
              $bus.$emit('VularAction', action.successAction, vularId)
            }
            if(action.tipSuccess){
              this.successMessage = action.successMessage
              this.successSnackbar = true
            }
          })
          .catch((error)=>{
            $bus.$emit('ActionError', vularId, error)
            this.$store.commit('error', {
              error:error,
              action:action,
              data:data
            })
          })
        }

      },
    },
  }
</script>

<style>
  .page-title{
    font-weight: 400;
  }

</style>