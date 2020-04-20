<template>
  <VularPage :title="$t('drawer.medias')" titleIcon="mdi-image-auto-adjust" :persistent="true">
    <v-card flat  
      :color="$store.state.vularApp.content.card.color" 
      :style="$store.state.vularApp.content.card.style"
    >
      <VularMediaWidget :inMediasPage="true"></VularMediaWidget>
    </v-card>
  </VularPage>
</template>

<script>
  //import VularBackgrounInput from "./VularBackgrounInput"

  export default {
    name: 'vular-medias-page',
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