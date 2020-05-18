<template>
  <div 
    class="footer-element"
  >
    <slot>
      <div class="layout-place-holder">{{$t('design.page-footer')}}</div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: "the-page-footer",
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


</style>
