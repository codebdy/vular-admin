<template>
    <v-container fluid
      :style="{ 
        width:'calc(100% - ' + ($vuetify.application.left + $vuetify.application.right) + 'px)' ,
        top:$vuetify.application.top + 'px',
        'box-shadow': isStick ? '2px 2px 5px rgba(0,0,0,0.1)' :'',
      }"
      v-scroll="onScroll"
      class="py-0 header-container"
      
    >
      <div style="position: absolute;top:0;left: 0; width: 100%;height: 100%;"
        :style="{ 
          background: $store.state.vularApp.content.color,
          opacity : 1 - heightPercent,
        }"
      >
      </div>
      <div
        v-if="large"
        :color="$store.state.vularApp.content.color"
        :style="{
          height: (heightPercent*30 + 30) + 'px'
        }"
        class="d-flex flex-row align-center"
      >
        <v-btn text rounded :dark="dark" class="ml-n4">文章列表</v-btn>
        <v-icon :dark="dark">mdi-chevron-right</v-icon>
        <v-chip rounded :dark="dark" color="transparent">{{title}}</v-chip>
      </div>
      <div
        class="d-flex flex-row align-center"
        :style="{
          height: (heightPercent*30 + 70) + 'px'
        }"
      >
      <template
        v-if="!large && !this.$vuetify.breakpoint.xs"
      >
        <v-btn text rounded  class="ml-n4"
        >文章列表</v-btn>
        <v-icon>mdi-chevron-right</v-icon>
        <v-chip rounded color="transparent"
        >{{title}}</v-chip>
        <v-icon class="mr-4"
        >mdi-chevron-right</v-icon>
        
      </template>
        <v-text-field
          :dark="dark"
          value="我是一阵风"
          :style="{'font-size': titleFontSize + 'px'}"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn outlined fab 
          :dark="dark" 
          :small = "large"
          :x-small ="!large">
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
        <v-btn outlined rounded 
          :dark="dark" 
          :large="large" 
          class="ml-6">
          取消
        </v-btn>

        <v-btn rounded 
          class="ml-6"
          :large="large"
          color="primary" 
          :style="{background: $store.state.vularApp.content.card.color}"
        >
          保存
        </v-btn>
      </div>
    </v-container>
</template>

<script>
import VularPageHeader from "./VularPageHeader"

  export default {
    name: "vular-edit-page-header",
    extends:VularPageHeader,
    data: () => ({
    }),
    
    computed:{
      baseHeight(){
        let height = this.maxBaxeHeight - this.topOffset/2.5
        height = height < this.minBaxeHeight ? this.minBaxeHeight : height

        return height
      },
      large(){
        return this.heightPercent >= 0.1
      },

      dark(){
        return this.heightPercent >= 0.5
      }
    },

    methods: {
    }
  }
</script>

<style>
  .header-container{
   z-index: 1;
  }
</style>
