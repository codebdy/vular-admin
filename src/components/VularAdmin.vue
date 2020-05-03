<template>
  <v-app id="admin-app" :style="{'font-family': $store.state.vularApp.fontFamily}"
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

    <v-app-bar
      :clipped-left="$store.state.vularApp.drawer.clipped"
      :color="$store.state.vularApp.appbar.color"
      :dark = "$store.state.vularApp.appbar.dark"
      :light = "$store.state.vularApp.appbar.light"
      :src = "$store.state.vularApp.appbar.src"
      :flat = "$store.state.vularApp.appbar.flat"
      app
      :shrink-on-scroll="$store.state.vularApp.appbar.shrinkOnScroll"
      :style="$store.state.vularApp.appbar.style"
    >
      <v-app-bar-nav-icon
        v-if="$store.state.vularApp.drawer.type !== 'permanent'"
        @click.stop="$store.state.vularApp.drawer.model = !$store.state.vularApp.drawer.model"
      />
      <img v-if="$store.state.vularApp.appbar.logoImage" :src="$store.state.vularApp.logo.src" style="height:36px;" :alt="$store.state.vularApp.logo.alt" />
      <v-toolbar-title v-if="$store.state.vularApp.appbar.logoText" class="ml-0 pl-3">
        <span class="hidden-sm-and-down">{{$store.state.vularApp.logo.title}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon href="https://github.com/vularsoft/vular-admin" target="_blank">
        <v-icon medium>mdi-github</v-icon>
      </v-btn>
      <VularNotifications></VularNotifications>
      <VularAppbarProfile></VularAppbarProfile>
    </v-app-bar>
    <v-content v-if="loading">
      <v-container>
        <v-skeleton-loader
          type="table-heading, list-item-two-line, image, table-tfoot" 
        >
        </v-skeleton-loader>
        <!--v-skeleton-loader
          type="table-heading, table-thead, table-tbody, table-tfoot"
        >
        </v-skeleton-loader-->
      </v-container>
    </v-content>
    <VularNode v-else :schema = "page" v-model="page.defaultModel"></VularNode>
    <ErrorDialog></ErrorDialog>
    <VularAppFab></VularAppFab>
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
  import VularAppbarProfile from "./VularAppbarProfile"
  import VularNotifications from "./VularNotifications"
  import VularAppFab from "./VularAppFab"
  import DebugDialog from "./tools/DebugDialog.vue"
  import ErrorDialog from "./tools/ErrorDialog.vue"

  export default {
    components: {
      VularAppDrawer,
      VularAppbarProfile,
      VularNotifications,
      DebugDialog,
      ErrorDialog,
      VularAppFab
    },
    data: () => ({
      page:{
        name:"dashboard",
        props:{
          title:"仪表盘",
        }
      },

      loading:false,
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
      onVularAction(action, data){
        let self = this
        if(action.name === 'openPage'){
          this.loading = true
          //this.$set(this, 'page', null)
          $axios.post(action.api, action.view)
          .then((res)=>{
              this.$set(this, 'page', res.data)
              this.loading = false
          })
          .catch((error)=>{
            this.loading = false
            console.log(error);
            this.$store.commit('error', {
              error:error,
              action:action,
              data:data
            })
          });
        }

        if(action.name === "doAction"){
          $axios.post(action.api, {params: action.params, data : data})
          .then((res)=>{
            $bus.$emit('dispatchModel', action.blongsTo, res.data)
            if(action.successAction){
              $bus.$emit('VularAction', action.successAction)
            }
          })
        }
      },
    },
  }
</script>