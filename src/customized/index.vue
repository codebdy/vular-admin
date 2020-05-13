<template>
  <v-app>
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-btn icon
          :to="'/admin/dashboard'"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-toolbar-title>Vular定制</v-toolbar-title>

        <v-spacer></v-spacer>

        <VularAppbarAccount />

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>模块</v-tab>
            <v-tab>菜单</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-3"
        max-height="600"
      >
        <v-container style="height: 1000px;"></v-container>
      </v-sheet>
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
