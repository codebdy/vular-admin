<template>
  <v-row 
    align="center" justify="center" class="pt-0 mt-0"
    no-gutters
  >
    <slot>
      <div class="layout-place-holder">{{$t('design.page-content')}}</div>
    </slot>
  </v-row>
</template>

<script>
  export default {
    name: "the-page-content",
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
