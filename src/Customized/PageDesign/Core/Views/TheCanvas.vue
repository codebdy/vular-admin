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

<style>
  .canvas-element{
    flex: 1; 
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-flow: column;
  }

  .element-outline{
    outline: #5d78ff dashed 1px;
  }
</style>
