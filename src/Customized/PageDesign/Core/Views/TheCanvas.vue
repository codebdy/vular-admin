<template>
  <div 
    :style="{
      background: $store.state.vularApp.content.color,
      'font-family': $store.state.vularApp.content.fontFamily
    }"
    class="canvas-element"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "the-canvas",
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

<style scoped>
  .canvas-element{
    padding: 10px;
    padding: 20px; outline: #5d78ff dashed 1px;
    flex: 1; 
    overflow-y: auto;
    padding: 10px;
    position: relative;
    display: flex;
    flex-flow: column;
  }
</style>
