<template>
  <v-container fluid>
    <h1><v-icon>mdi-speedometer</v-icon> 仪表盘</h1>
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <v-card :flat="$store.state.vularApp.content.flat" :color="$store.state.vularApp.content.cardColor">
              <v-card-text>
              </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
  //import VularBackgrounInput from "./VularBackgrounInput"
  //import VularColorInput from "./VularColorInput"
  export default {
    name: 'dashboard',
    components: {
      //VularBackgrounInput,
      //VularColorInput,
    },
    props: {
    },
    data () {
      return {
        drawers: [
          {
            'value':'default (no property)',
            'text':'Default (no property)'
          }, 
          {
            'value':'permanent',
            'text':'Permanent'
          }, 
          {
            'value':'temporary',
            'text':'Temporary'
          }, 
        ],
      }
    },
    computed:{
    },


    methods: {
    },
  }
</script>

<style>
</style>