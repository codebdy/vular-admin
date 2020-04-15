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
          'padding-top': breadCrumbsHeight/4 + 'px',
          'padding-bottom': breadCrumbsHeight/4 + 'px',
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
            <v-checkbox
              v-model="selectAll"
              label="全选"
              class ="mt-5"
            ></v-checkbox>
            <v-spacer></v-spacer>
            <div style="margin-right: 50px; transition:all 0.3s;" 
              :style="{width: searboxWidth + 'px'}"
            >
              <v-text-field
                hide-details
                prepend-inner-icon="mdi-magnify"
                style="padding-top:0px;"
                @focus="searboxWidth = 220"
                @blur = "searboxWidth = 120"
              ></v-text-field>
            </div>
            
            分类:
            <v-btn
              color="rgba(0,0,0, 0.3)"
              class="ml-2 mr-8"
              outlined
              rounded
              :small="baseHeight < smallLimit"
            >
              未知
              <v-icon right dark>mdi-chevron-down</v-icon>
            </v-btn>
            过滤器:
            <v-btn
              color="#8296f8"
              class="ml-2"
              outlined
              rounded
              :small="baseHeight < smallLimit"
            >
              日期
              <v-icon right dark>mdi-chevron-down</v-icon>
            </v-btn>

          </div>
        </v-col>
      </v-row>
      <v-row
        align="center"
        class="pa-0" 
      >
        <v-col cols="12" justify="center" 
          style="display: flex; align-items: center; "
          class="py-0  px-6"
        >
          <div style="width:100%; height: 40px; border-bottom:rgba(0,0,0,0.05) solid 1px; display: flex; align-items: center;">
            Table title
            
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
        selectAll: false,
        searboxWidth:120,
      }
    },

    computed:{
      baseHeight(){
        let height = 200 - this.topOffset/2
        height = height < 140 ? 140 : height

        return height
      },

      breadCrumbsHeight(){
        let height = parseInt(this.baseHeight/2 - 10)
        return height 
      },

      tableHeaderHeight(){
        let height = 90 - this.topOffset/2
        height = height < 60 ? 60 : height

        return height
      },


      titleFontSize(){
        let fontSize = 28 - parseInt(this.topOffset/20);
        fontSize = fontSize < 18 ? 18 : fontSize
        return fontSize
      }
    },

    methods: {
      onScroll(e){
        this.topOffset = parseInt(window.pageYOffset || document.documentElement.offsetTop || 0)
        console.log(this.topOffset)
      }
    },
  }
</script>

<style>
</style>