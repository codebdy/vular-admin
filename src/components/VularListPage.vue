<template>
  <VularPage :title="title" :titleIcon="titleIcon" v-model="page">
    <template slot="breadcrumbs-area">
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <div>
        <span>共{{inputValue.length}}条</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn rounded color="primary new-button" dark 
        :small="page.header.isStick"
        :to="editPath"
      >
        <v-icon left>mdi-plus</v-icon> 新建
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn class="ml-2" fab elevation="0" :color="$store.state.vularApp.content.card.color"
            :small="!page.header.isStick"
            :x-small="page.header.isStick"
            v-on="on"
         >
            <v-icon color="primary" class="top-small-button">mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>
        <v-list class="px-2" :color="$store.state.vularApp.content.card.color">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="primary">mdi-cloud-print-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>打印</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="primary">mdi-file-export-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>导出</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>

    <template slot="header-extension">
      <VularListHead
        :schema="schema"
        :isStick = "page.header.isStick"
        :heightPercent = "page.header.heightPercent"
        v-model="inputValue"
        @selectAll = "onSelectAll" 
        @listHeaderHeight = "onListHeaderHeight"
      ></VularListHead>
    </template>

    <v-row
      align="center"
      justify="center"
      class="pt-0 mt-0"
    >
      <v-col cols="12" class="pt-0 mt-0">
        <v-card flat  
          style="padding-top:10px;"  
          :color="$store.state.vularApp.content.card.color" 
          :style="$store.state.vularApp.content.card.style"
        >
          <VularListBody 
            :schema="schema" 
            v-model="inputValue"
          ></VularListBody>
          <v-card-actions justify="start">
            <v-pagination
              :length="15"
              :total-visible="7"
              circle
              color="success"
            ></v-pagination>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </VularPage>

</template>

<script>
  //import VularBackgrounInput from "./VularBackgrounInput"

  export default {
    name: 'vular-list-page',
    components: {
    },
    props: {
      schema: { default: ()=>{return {}}},
      value: {default: ()=>{return []}},
      titleIcon: {default:''},
      title: {default:''},
      editPath:{default: ''},
    },
    data () {
      return {
        page:{
          header:{
            isStick: false,
            listHeaderHeight: '',
            heightPercent: 1,
          },
        },
        selectedRows: [],
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
    mounted () {
      if(!this.schema.transshapeBreakPoint){
        this.schema.transshapeBreakPoint = 'xs'
      }

      if(this.schema.transshapeBreakPoint == 'xs'){
        this.checkXs()
      }
      if(this.schema.transshapeBreakPoint == 'sm'){
        this.checkSm()
      }
      if(this.schema.transshapeBreakPoint == 'md'){
        this.checkMd()
      }
      if(this.schema.transshapeBreakPoint == 'lg'){
        this.checkLg()
      }
    },

    methods: {
      onSelectAll(selected){
        this.inputValue.forEach(row=>{
          this.$set(row, 'selected', selected)
        })
      },

      onListHeaderHeight(height){
        this.page.header.listHeaderHeight = height
      },

      checkXs(){
        if(this.$vuetify.breakpoint.xs){
          if(this.schema.transshapeBreakPoint === 'xs'){
            this.schema.transshape = true
          }
          else{
            this.schema.transshape = false
          }
        }
      },

      checkSm(){
        if(this.$vuetify.breakpoint.sm){
          if(this.schema.transshapeBreakPoint === 'sm'
            ||this.schema.transshapeBreakPoint === 'md'
            ||this.schema.transshapeBreakPoint === 'lg'){
            this.schema.transshape = true
          }
          else{
            this.schema.transshape = false
          }
        }
      },

      checkMd(){
        if(this.$vuetify.breakpoint.md){
          if(this.schema.transshapeBreakPoint === 'md'
            ||this.schema.transshapeBreakPoint === 'lg'){
            this.schema.transshape = true
          }
          else{
            this.schema.transshape = false
          }
        }
      },

      checkLg(){
        if(this.$vuetify.breakpoint.lg){
          if(this.schema.transshapeBreakPoint === 'lg'){
            this.schema.transshape = true
          }
          else{
            this.schema.transshape = false
          }
        }
      },
    },

    watch:{
      "$vuetify.breakpoint.xs": function(val){
        this.checkXs()
      },
      "$vuetify.breakpoint.sm":function(val){
        this.checkSm()
      },
      "$vuetify.breakpoint.md":function (val){
        this.checkMd()
      },
      "$vuetify.breakpoint.lg":function (val){
        this.checkLg()
      },

      "$vuetify.breakpoint.lg":function (val){
        if(val){
          this.schema.transshape = false
        }
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