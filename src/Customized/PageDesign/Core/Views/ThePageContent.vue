<template>
  <v-container fluid justify="center" class="pt-0 mt-0">
    <slot>
      <v-row style="height: 100%;">
        <v-col class="layout-place-holder">
          {{$t('design.page-content')}}
        </v-col>
      </v-row>
    </slot>
  </v-container>
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
  .layout-place-holder{
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
