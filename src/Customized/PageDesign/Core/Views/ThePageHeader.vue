<template>
  <div 
    class="header-element"
  >
    <slot>
      <div class="place-holder">{{$t('design.page-header')}}</div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: "the-page-header",
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
  .header-element .place-holder{
    padding:10px;
  }
</style>
