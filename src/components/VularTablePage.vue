<template>
  <VularPage :title="title" :titleIcon="titleIcon" v-model="page">
  </VularPage>
</template>

<script>
  export default {
    name: "vular-table-page",
    components: {
    },
    props: {
      titleIcon: {default:''},
      title: {default:''},
    },

    data: () => ({
      page:{
        header:{
          isStick: false,
          listHeaderHeight: '',
          heightPercent: 1,
        },
      },
    }),

    methods: {
    }
  }
</script>
