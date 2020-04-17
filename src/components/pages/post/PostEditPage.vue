<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
  >
    <VularEditPageHeader @stick="onStick" :title="'文章编辑'">
    </VularEditPageHeader>
    <div style="position: relative; flex: 1; border:solid 1px;">
      <div style="position:absolute; background:url(/images/a1.jpg); top:-10%; left:-10%;width: 120%;height: 500px; background-repeat: no-repeat; background-size: 100% " class="header-image"
      >
        <div 
          style="width: 100%;height: 100%; opacity: 0.7; background-image: linear-gradient(257deg,#b6aaae,#79abb5 71%,#b9b1aa)"
          >
        </div>
      </div>
      <v-container fluid style="height: 1000px; position: relative; margin-top:300px;background: #FFF">
      </v-container>
    </div>
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