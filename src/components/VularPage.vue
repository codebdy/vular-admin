<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
  >
    <VularPageHeader 
      :title="title"
      :titleIcon = "titleIcon" 
      @stick="onStick" 
      @heightPercent="onHeightPercent"
      v-model="inputValue.header"
    >
      <template slot="breadcrumbs-area">
        <slot name="breadcrumbs-area"></slot>
      </template>
      <slot name="header-extension"></slot>
    </VularPageHeader>
    <v-container fluid class="pt-0"
      :style="{'margin-top': (inputValue.header.breadcrumbHeight + inputValue.header.listHeaderHeight + 0) + 'px'}"
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
      title : { default: ''},
      titleIcon:{ default: ''},
      value : { default: ()=>{
        return {
          header:{
            isStick: false,
            breadcrumbHeight: 90,
            listHeaderHeight: 0,
            heightPercent: 1,
          },
        }}
      },
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
        this.inputValue.header.isStick = isStick
      },

      onHeightPercent(percent){
       this.inputValue.header.heightPercent = percent
      }
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