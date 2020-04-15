<template>
    <v-container fluid
      :style="{ 
        width:'calc(100% - ' + ($vuetify.application.left + $vuetify.application.right) + 'px)' ,
        top:$vuetify.application.top + 'px',
        background: $store.state.vularApp.content.color,
      }"
      style="position: fixed; right:0; z-index: 1; "
      v-scroll="onScroll"
      class="py-0"
    >
      <div
        :color="$store.state.vularApp.content.color"
        :style="{
          'padding-top': breadCrumbsPadding*1.2 + 'px',
          'padding-bottom': breadCrumbsPadding*0.8 + 'px',
        }"
        class="d-flex flex-row align-center"
      >
        <h2
          :style="{'font-size': titleFontSize + 'px'}"
        >询盘列表</h2>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <div>
          <span>共360条</span>
        </div>
        <v-spacer></v-spacer>
        <div>
          <v-btn class="mr-5" fab elevation="0" :color="$store.state.vularApp.content.card.color"
            :small="baseHeight >= smallLimit"
            :x-small="baseHeight < smallLimit"
          >
            <v-icon color="#8296f8">mdi-import</v-icon>
          </v-btn>

          <v-btn class="mr-5" fab elevation="0" :color="$store.state.vularApp.content.card.color"
            :small="baseHeight >= smallLimit"
            :x-small="baseHeight < smallLimit"
          >
            <v-icon color="#8296f8">mdi-export-variant</v-icon>
          </v-btn>
          <v-btn class="mr-5" fab elevation="0" :color="$store.state.vularApp.content.card.color"
            :small="baseHeight >= smallLimit"
            :x-small="baseHeight < smallLimit"
          >
            <v-icon color="#8296f8">mdi-cloud-print-outline</v-icon>
          </v-btn>
        </div>
        <v-btn rounded color="primary" dark style="padding:0 28px;" 
          :small="baseHeight < smallLimit"
        >
          <v-icon left>mdi-plus</v-icon> 新建
        </v-btn>
        
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
        class="py-0" 
        v-if = "$slots['list-title']"
      >
        <v-col cols="12" justify="center" 
          style="display: flex; align-items: center; "
          class="py-0"
        >
          <div style="width:100%; height: 40px; border-bottom:rgba(0,0,0,0.05) solid 1px; display: flex; align-items: center;" class="px-6">
            
            <slot name="list-title"></slot>
            
          </div>
        </v-col>
      </v-row>
    </v-container>

</template>

<script>
  export default {
    name: 'vular-list-page-header',
    props: {
      title: "untitled",
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

      breadCrumbsPadding(){
        return 10 + this.heightPercent * 20
      },

      tableHeaderHeight(){
        return 50 + this.heightPercent * 40
      },


      titleFontSize(){
        return 16 + (this.heightPercent * 12);
      }
    },

    methods: {
      onScroll(e){
        this.topOffset = parseInt(window.pageYOffset || document.documentElement.offsetTop || 0)
        this.isStick = this.baseHeight < this.smallLimit
        this.$emit('stick', this.isStick)
        console.log(this.topOffset)
      }
    },
  }
</script>

<style>
  .select-button{
    max-width: 300px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .select-button .v-icon{
    margin-right: 15px !important;
  }
</style>