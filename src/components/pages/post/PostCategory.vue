<template>
  <VularPage :title="'文章分类'" :titleIcon="'mdi-select-group'" v-model="page">
      <v-row
        justify="start">
        <v-col cols="6">
          <v-card :flat="$store.state.vularApp.content.flat" :color="$store.state.vularApp.content.card.color" :style="$store.state.vularApp.content.card.style">
              <v-card-title>
                <span class="title font-weight-light">分类编辑</span>
                <v-spacer></v-spacer>
                <v-btn color="primary" dark rounded>
                  {{$t("base.save")}}
                </v-btn>             
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <VularTreeEditor></VularTreeEditor>
              </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </VularPage>
</template>

<script>
  export default {
    name: 'post-category',
    components: {
    },
    props: {
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