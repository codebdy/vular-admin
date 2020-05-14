<template>
  <v-app>
      <v-app-bar
        app
        color="#1B1B28"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        clipped-left
        clipped-right
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(27,27,40,.7)"
          ></v-img>
        </template>

        <v-btn icon
          :to="'/admin/dashboard'"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-toolbar-title>Vular定制</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon href="https://github.com/vularsoft/vular-admin">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <VularAppbarAccount :user="{
            avatar:'/images/100.jpg',
          }"
        />

        <template v-slot:extension>
          <v-app-bar-nav-icon
            v-if="!$store.state.customizedApp.modulesDrawer"
            @click="showDrawer"
          />

          <v-tabs align-with-title>
            <v-tab :to="{name:'customized-modules'}">模块</v-tab>
            <v-tab :to="{name:'customized-menus'}">菜单</v-tab>
            <v-tab :to="{name:'customized-themes'}">主题</v-tab>
            <v-tab :to="{name:'customized-themes'}">模板</v-tab>
            <v-tab :to="{name:'customized-settings'}">设置</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-content 
        :style="{
          background: $store.state.vularApp.content.color,
          'font-family': $store.state.vularApp.content.fontFamily
        }"
      >
        <router-view/>
      </v-content>
  </v-app>
</template>

<script>
  export default {
    name: "vular-customized",
    components: {
    },
    props: {
    },

    data: () => ({
    }),
    created(){
      console.log(this.$vuetify)
    },

    methods: {
      showDrawer(){
        this.$store.commit('showCustuomizedModulesDrawer')
      }
    }
  }
</script>
