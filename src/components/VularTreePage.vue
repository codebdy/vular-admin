<template>
  <VularPage :title="title" :titleIcon="titleIcon" v-model="page">
      <v-row
        justify="start">
        <v-col md="6">
          <v-card :flat="$store.state.vularApp.content.flat" :color="$store.state.vularApp.content.card.color" :style="$store.state.vularApp.content.card.style">
              <v-card-text>
                <VularTreeEditor></VularTreeEditor>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="pa-2">
                <v-spacer></v-spacer>
                <v-btn color="primary" dark rounded>
                  {{$t("base.save")}}
                </v-btn>             
              </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  </VularPage>
</template>

<script>
  export default {
    name: 'vular-tree-page',
    components: {
    },
    props: {
      title: {default:''},
      titleIcon: {default:''},
    },
    data () {
      return {
        page:{
          header:{
            isStick: false,
            listHeaderHeight: '',
            heightPercent: 1,
          },
        },
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