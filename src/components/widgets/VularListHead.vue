<template>
  <div class="d-flex flex-row align-center" style="flex: 1;">
    <v-checkbox
      v-model="selectAll"
      label="全选"
      class ="mt-5"
    ></v-checkbox>
    <v-spacer></v-spacer>
    <div style="margin-right: 50px; transition:all 0.3s;" 
      :style="{width: searchboxWidth + 'px'}"
    >
      <v-text-field
        hide-details
        prepend-inner-icon="mdi-magnify"
        style="padding-top:0px;"
        @focus="searchboxWidth = 220"
        @blur = "searchboxWidth = 120"
      ></v-text-field>
    </div>
    
    分类:
    <v-btn
      color="rgba(0,0,0, 0.3)"
      class="ml-4 mr-10"
      outlined
      rounded
      :small="isStick"
    >
      未知
      <v-icon right dark>mdi-chevron-down</v-icon>
    </v-btn>
    过滤器:
    <v-btn
      color="primary"
      class="ml-4 select-button"
      outlined
      rounded
      :small="isStick"
      style="max-width: 100px;"
    >
      日期日期分类测试...
      <v-icon right dark>mdi-chevron-down</v-icon>
    </v-btn>
  </div>

</template>

<script>
  export default {
    name: 'vular-list-head',
    props: {
      schema: {default : ()=>{return {}}},
      isStick: {default : false}
    },

    data () {
      return {
        selectAll: false,
        searchboxWidth: 120,
      }
    },

    computed:{
    },

    methods: {
    },
  }
</script>

<style>
</style>