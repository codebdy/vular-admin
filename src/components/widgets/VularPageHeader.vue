<template>
    <v-container fluid
      :style="{ 
        width:'calc(100% - ' + ($vuetify.application.left + $vuetify.application.right) + 'px)' ,
        top:$vuetify.application.top + 'px',
        background: $store.state.vularApp.content.color,
        'box-shadow': isStick ? '2px 2px 5px rgba(0,0,0,0.1)' :'',
      }"

      v-scroll="onScroll"
      class="py-0 header-container"
    >
      <div
        :color="$store.state.vularApp.content.color"
        :style="{
          height: breadCrumbsHeight + 'px'
        }"
        class="d-flex flex-row align-center"
        style="transition: height 0.3s"
      >
        <h1 class="page-title"
          :style="{'font-size': titleFontSize + 'px'}"
        >
          <v-icon
            :large="!isStick"
            v-if="titleIcon"
          >{{titleIcon}}</v-icon>
          {{title}}
        </h1>

        <slot name="breadcrumbs-area">
        </slot>
      </div>
      <slot></slot>
    </v-container>

</template>

<script>
  export default {
    name: 'vular-page-header',
    props: {
      title: {default: "untitled"},
      titleIcon: {default: ""},
      value : { default: ()=>{
        return {
          header:{}
        }
      }},
      persistent: {default: false},
    },

    data () {
      return {
        topOffset: 0,
        smallLimit: 180,
        maxBaxeHeight: 200,
        minBaxeHeight: 140,
        isStick: false,
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
      baseHeight(){
        let height = this.maxBaxeHeight - this.topOffset/1.5
        height = height < this.minBaxeHeight ? this.minBaxeHeight : height

        return height
      },

      //高度变化百分比0~100%
      heightPercent(){
        return (this.baseHeight - this.minBaxeHeight)/(this.maxBaxeHeight - this.minBaxeHeight)
      },

      breadCrumbsHeight(){
        return 50 + this.heightPercent * 40
      },

      titleFontSize(){
        let scale = 12
        if(this.$vuetify.breakpoint.xs){
          scale = 3
        }
        if(this.$vuetify.breakpoint.sm){
          scale = 6
        }
        if(this.$vuetify.breakpoint.md){
          scale = 8
        }
        return 16 + (this.heightPercent * scale);
      }
    },
    mounted () {
      this.inputValue.header.breadcrumbHeight = 90
      //let height = 90

      //if(this.$slots['list-head']){
      //  height = height + 90
      //}
      //if(this.$slots['list-title'] && !this.$vuetify.breakpoint.xs){
      //  height = height + 40
      //}
      //this.$emit('headerHeight', height)
    },

    methods: {
      onScroll(e){
        if(this.persistent){
          return
        }
        this.topOffset = parseInt(window.pageYOffset || document.documentElement.offsetTop || 0)
        this.isStick = this.baseHeight < this.smallLimit
        this.inputValue.header.isStick = this.isStick
        this.inputValue.header.heightPercent = this.heightPercent
      }
    },
  }
</script>

<style>
  .page-title{
    font-weight: 500;
  }

  .header-container{
    position: fixed; right:0; z-index: 1;
  }
</style>