<template>
  <div class="header-title-area"
    :style="{height: height + 'px'}"
  >
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: "vualr-page-header-title",
    components: {},
    props: {
        heightPercent: {
          default: 1
        }
    },

    data: () => ({}),
    computed:{
      height(){
        return 50 + this.heightPercent * 40
      },
    },

    methods: {}
  }
</script>
<style scoped>
  .header-title-area {
    flex: 1;
    display: flex;
    flex-flow: row;
    align-items: center;
  }
</style>