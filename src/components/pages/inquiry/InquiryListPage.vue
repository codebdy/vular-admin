<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
  >
      <v-toolbar 
        flat
        :color="'transparent'"
        fixed
        dense
        top
        class="mt-6"
      >
        <h2>询盘</h2>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <span>共360条</span>
        <v-spacer></v-spacer>
        
        <v-btn class="mr-5" fab flat x-small elevation="0" :color="$store.state.vularApp.content.card.color">
          <v-icon color="#8296f8">mdi-import</v-icon>
        </v-btn>

        <v-btn class="mr-5" fab flat x-small elevation="0" :color="$store.state.vularApp.content.card.color">
          <v-icon color="#8296f8">mdi-export-variant</v-icon>
        </v-btn>
        <v-btn class="mr-5" fab flat x-small elevation="0" :color="$store.state.vularApp.content.card.color">
          <v-icon color="#8296f8">mdi-cloud-print-outline</v-icon>
        </v-btn>
        <v-btn rounded color="primary" dark style="padding:0 28px;" >
          <v-icon left>mdi-plus</v-icon> 新建
        </v-btn>
        
      </v-toolbar>
    <v-container fluid>
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