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

        <VularAppbarAccount :user="{
            avatar:'/images/100.jpg',
          }"
        />

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab :to="{name:'customized-modules-index'}">模块</v-tab>
            <v-tab :to="{name:'customized-menus'}">菜单</v-tab>
            <v-tab :to="{name:'customized-themes'}">主题</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-content>
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

    methods: {
    }
  }
</script>
