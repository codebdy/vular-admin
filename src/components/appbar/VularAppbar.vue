<template>
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
      <v-skeleton-loader
        type="chip"
        v-if="loading" 
      >
      </v-skeleton-loader>
      <VularNode
        v-else
        v-for="(schema, index) in tools" 
        :schema = "schema"
        :key = "index"
      >
      </VularNode>          
      <!--v-btn icon href="https://github.com/vularsoft/vular-admin" target="_blank">
        <v-icon medium>mdi-github</v-icon>
      </v-btn>
      <VularNotifications></VularNotifications>
      <VularAppbarAccount></VularAppbarAccount-->
    </v-app-bar>
</template>

<script>
  export default {
    name: "vular-appbar",
    components: {
    },
    props: {
    },

    data: () => ({
      tools:[],
      loading:false,
    }),

    mounted(){
      this.init()
    },

    methods: {
      init(){
        this.loading = true
        let api = '/api/appbar'
        $axios.get(api)
        .then((res)=>{
          this.tools = res.data
          this.loading = false
        })
        .catch((error)=>{
          this.$store.commit('error', {
            error:error,
            action:api
          })
          this.loading = false
        })
      }
    }
  }
</script>
