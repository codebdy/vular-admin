<template>
    <v-container fluid
      :style="{ 
        width:'calc(100% - ' + ($vuetify.application.left + $vuetify.application.right) + 'px)' ,
        top:$vuetify.application.top + 'px',
        background: $store.state.vularApp.content.color,
        'box-shadow': isStick ? '2px 2px 5px rgba(0,0,0,0.1)' :'',
      }"
      style="position: fixed; right:0; z-index: 1; "
      v-scroll="onScroll"
      class="py-0"
    >
      <div
        :color="$store.state.vularApp.content.color"
        :style="{
          height: breadCrumbsHeight + 'px'
        }"
        class="d-flex flex-row align-center"
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

        <slot>
        </slot>
      </div>
      <v-row
        v-if = "$slots['list-head']"
      >
        <v-col cols="12" class="py-0">
          <div  
            :style="{
              background: $store.state.vularApp.content.card.color,
              height:tableHeaderHeight + 'px',
            }" 
            class="d-flex flex-row align-center px-6"
            style = "box-shadow: 2px 2px 5px rgba(0,0,0,0.05);"
          >
            <slot name="list-head"></slot>
          </div>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
        class="py-0" 
        v-if = "$slots['list-title']"
        :style= "{height : tableTitleHeight + 'px'}"
      >
        <v-col cols="12" justify="center" 
          class="py-0 list-title-col"
        >
          <div class="list-title-wrap px-6">
            
            <slot name="list-title"></slot>
            
          </div>
        </v-col>
      </v-row>
    </v-container>

</template>

<script>
  export default {
    name: 'vular-page-header',
    props: {
      title: {default: "untitled"},
      titleIcon: {default: ""},
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
      baseHeight(){
        let height = this.maxBaxeHeight - this.topOffset/2
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

      tableHeaderHeight(){
        return 50 + this.heightPercent * 40
      },

      tableTitleHeight(){
        return 40 
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
      let height = 90

      if(this.$slots['list-head']){
        height = height + 90
      }
      if(this.$slots['list-title']){
        height = height + 40
      }
      this.$emit('headerHeight', height)
    },

    methods: {
      onScroll(e){
        this.topOffset = parseInt(window.pageYOffset || document.documentElement.offsetTop || 0)
        this.isStick = this.baseHeight < this.smallLimit
        this.$emit('stick', this.isStick)
      }
    },
  }
</script>

<style>
  .list-title-col{
    display: flex; align-items: center;
  }
  .list-title-wrap{
    width:100%; height: 40px; border-bottom:rgba(0,0,0,0.05) solid 1px; display: flex; align-items: center;
  }
  .page-title{
    font-weight: 500;
  }
</style>