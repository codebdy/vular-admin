<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
  >
    <div 
      :style="{ 
        background: $store.state.vularApp.content.color,
        width:'calc(100% - ' + $vuetify.application.left + 'px)' 
      }"
    style="position: fixed; right:0;top:40px; z-index: 1; height: 130px; padding-top:16px;"
    >
      <v-toolbar 
        flat
        :color="$store.state.vularApp.content.color"
        top
        class="mt-8"
        
      >
        <h2>询盘</h2>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <span>共360条</span>
        <v-spacer></v-spacer>
        
        <v-btn class="mr-5" fab small elevation="0" :color="$store.state.vularApp.content.card.color">
          <v-icon color="#8296f8">mdi-import</v-icon>
        </v-btn>

        <v-btn class="mr-5" fab small elevation="0" :color="$store.state.vularApp.content.card.color">
          <v-icon color="#8296f8">mdi-export-variant</v-icon>
        </v-btn>
        <v-btn class="mr-5" fab small elevation="0" :color="$store.state.vularApp.content.card.color">
          <v-icon color="#8296f8">mdi-cloud-print-outline</v-icon>
        </v-btn>
        <v-btn rounded color="primary" large dark style="padding:0 28px;" >
          <v-icon left>mdi-plus</v-icon> 新建
        </v-btn>
        
      </v-toolbar>
    </div>
    <v-container fluid style="margin-top: 80px;">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12">
          <v-card flat style="height:1000px;"  :color="$store.state.vularApp.content.card.color" :style="$store.state.vularApp.content.card.style"></v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>

</template>

<script>
  //import VularBackgrounInput from "./VularBackgrounInput"

  export default {
    name: 'inquiry-list-page',
    components: {
    },
    props: {
    },
    data () {
      return {
      }
    },

    methods: {
    },

  }
</script>

<style>
</style>