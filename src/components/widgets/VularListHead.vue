<template>
  <div class="d-flex flex-row align-center flex-1">
    <v-checkbox
      v-model="selectAll"
      label="全选"
      class ="mt-5"
    ></v-checkbox>
    <v-spacer></v-spacer>
    <div 
      :style="{width: searchboxWidth + 'px'}"
      class="list-search-box"
    >
      <v-text-field
        hide-details
        prepend-inner-icon="mdi-magnify"
        style="padding-top:0px;"
        class="mt-n1"
        @focus="searchBoxFocused = true"
        @blur = "searchBoxFocused = false"
      ></v-text-field>
    </div>
    <div v-if="!collopsed">
      分类:
      <v-btn
        color="rgba(0,0,0, 0.3)"
        class="ml-2 mr-10"
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
        class="ml-2 select-button"
        outlined
        rounded
        :small="isStick"
      >
        日期
        <v-icon right dark>mdi-chevron-down</v-icon>
      </v-btn>
    </div>
    <v-btn class="ml-2" outlined fab elevation="0" color="primary"
        :small="!isStick"
        :x-small="true"
        v-if="collopsed"
     >
        <v-icon color="primary" class="top-small-button">mdi-dots-horizontal</v-icon>
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
        searchBoxFocused: false,
      }
    },

    computed:{
      collopsed(){
        return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
      },

      searchboxWidth(){
        let width = 120
        if(this.searchBoxFocused){
          width = this.$vuetify.breakpoint.xs ? 150 : 200
        }
        return width
      }
    },

    methods: {
    },
  }
</script>

<style>
  .select-button{
    max-width: 200px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .list-search-box{
    margin-right: 50px; transition:all 0.3s;
  }
</style>