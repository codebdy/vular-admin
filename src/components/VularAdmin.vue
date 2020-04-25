<template>
  <v-app id="admin-app" :style="{'font-family': $store.state.vularApp.fontFamily}"
    v-scroll="onScroll"
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
      <v-btn icon>
        <v-icon medium>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon href="https://github.com/vularsoft/vular-admin" target="_blank">
        <v-icon medium>mdi-github</v-icon>
      </v-btn>
      <VularNotifications></VularNotifications>
      <VularAppbarProfile></VularAppbarProfile>
      <template v-if="!hideToolbar" v-slot:extension>
        <v-tabs align-with-title v-model="currenPage">
          <v-tab 
            v-for="page in pages"
            :key="page.pageUrl"
          >
            <v-badge
              color="pink"
              dot
              v-if="page.isChanged"
            >
              {{page.props.title}}
            </v-badge>
            <template v-else>
              {{page.props.title}}
            </template>
            <v-btn icon x-small class="ml-2">
              <v-icon small >mdi-close</v-icon> 
            </v-btn>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <VularNode :schema = "activePage"></VularNode>
   
    <VularAppFab></VularAppFab>
    <v-footer
      :inset="$store.state.vularApp.footer.inset"
      :dark = "$store.state.vularApp.footer.dark"
      :light = "$store.state.vularApp.footer.light"
      :color = "$store.state.vularApp.footer.color"
      :src = "$store.state.vularApp.footer.src"
      app
    >
    <v-dialog v-model="debug" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn x-small fab dark falt absolute bottom left color="grey" class="mb-4 ml-n4" v-on="on">
          <v-icon>mdi-android-debug-bridge</v-icon>
        </v-btn>
      </template>
      <v-card dark>
        <v-toolbar dark>
          <v-btn icon dark @click="debug = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="mr-4">{{$t('debug.debug')}}</v-toolbar-title>
          <v-divider inset vertical>
            
          </v-divider>
          <v-subheader><v-icon color="primary">mdi-android-debug-bridge</v-icon> {{$t('debug.slogan')}}</v-subheader>
          <v-spacer></v-spacer>
          <v-btn text href="https://github.com/vularsoft/vular-admin/issues" target="_blank">
            <v-icon medium class="mr-1">mdi-github</v-icon>
            {{$t('debug.report-bug')}}
          </v-btn>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>调试界面</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import VularAppDrawer from "./drawer/VularAppDrawer.vue"
  import VularAppbarProfile from "./VularAppbarProfile"
  import VularNotifications from "./VularNotifications"
  import VularAppFab from "./VularAppFab"
  export default {
    components: {
      VularAppDrawer,
      VularAppbarProfile,
      VularNotifications,
      VularAppFab
    },
    data: () => ({
      debug: false,
      hideToolbar:true,
      currenPage:0,
      pages:[
        {
          name:"dashboard",
          props:{
            title:"仪表盘",
          }
        },
      ],
    }),

    computed:{
      activePage(){
        return this.pages[this.currenPage]
      }
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
      onVularAction(action){
        if(action.name === 'openPage'){
          $axios.get('/api/view/' + action.viewSlug)
          .then((res)=>{
            this.pages.push(res.data)
            this.currenPage = this.pages.length - 1
          })
        }

        if(action.name === "doAction"){
          $axios.get('/api/action/' + action.actionSlug)
          .then((res)=>{
            $bus.$emit('dispatchModel', action.blongsTo, res.data)
          })
        }
      },

      onScroll(e){
        //if (typeof window === "undefined") return

        //const top = window.pageYOffset || document.documentElement.offsetTop || 0
        //this.hideToolbar = top > 100
      }
    },
  }
</script>