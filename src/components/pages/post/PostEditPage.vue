<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
  >
    <VularPageHeader @stick="onStick" :title="'文章编辑'">
    </VularPageHeader>
    <v-container fluid>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'post-edit-page',
    components: {
    },
    props: {
    },
    data () {
      return {
        isStick:false,
      }
    },
    computed:{
    },

    methods: {
      onStick(isStick){
        this.isStick = isStick
      }
    },
  }
</script>

<style>
</style>