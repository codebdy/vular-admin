<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
  >
    <VularPageHeader @stick="onStick" :title="title" @headerHeight="onHeaderHeight">
      <slot name="breadcrumbs-area"></slot>
      <template slot='list-head'>
        <slot name="list-actions" ></slot>
      </template>
      <template slot='list-title'>
        <slot name="list-title"></slot>
      </template>
    </VularPageHeader>
    <v-container fluid class="pt-0"
      :style="{'margin-top': (inputValue.height + 0) + 'px'}"
    >
      <slot></slot>
    </v-container>
  </v-content>

</template>

<script>
  //import VularBackgrounInput from "./VularBackgrounInput"

  export default {
    name: 'vular-page',
    components: {
    },
    props: {
      title : { default: 'untitled'},
      value : { default: ()=>{return {}}}
    },
    data () {
      return {
      }
    },

    computed:{
      inputValue: {
        get:function() {
          return this.value;
        },
        set:function(val) {
          this.$emit('input', val);
        },
      },
    },

    methods: {
      onStick(isStick){
        this.inputValue.isStick = isStick
      },

      onHeaderHeight(height){
        this.inputValue.height = height
      },
    },

  }
</script>

<style>
  .top-small-button{
    opacity: 0.7;
  }

  .new-button{
    padding:0 28px !import;
  }

  .theme--light.v-pagination .v-pagination__item, .theme--light.v-pagination .v-pagination__navigation{
    background: transparent;
  }  
</style>