<template>
  <VularPage :title="title" :titleIcon="titleIcon" v-model="page">
    <template slot="breadcrumbs-area">
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <div>
        <span>{{$t('list.list-counts').replace('{0}', model.rows.length)}}</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn rounded color="primary" dark
        v-if="addNewAction" 
        :small="page.header.isStick"
        @click="onAddNew"
      >
        <v-icon left>mdi-plus</v-icon> {{$t('list.add-new')}}
      </v-btn>
      <!--v-menu offset-y>
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
      </v-menu-->
    </template>

    <template slot="header-extension">
      <VularListHead
        :batchActions="batchActions"
        :filters = "filters"
        :columns = "columns"
        :canSelect = "canSelect"
        :isStick = "page.header.isStick"
        :heightPercent = "page.header.heightPercent"
        :transshape = "transshape"
        v-model="model.rows"
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
            :columns="columns"
            :rowActionsv = "rowActions" 
            :canSelect = "canSelect"
            :transshape = "transshape"
            :actionsColumn = "actionsColumn"
            v-model="model.rows"
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
      defaultModel:{default : ()=>{return {} }},
      queryAction :{ default:null },
      batchActions: { default: ()=>{return []} },
      filters : { default:()=>{return []} },
      columns : { default:()=>{return []} },
      rowActions : { defalut:()=>{return []} },
      canSelect: {default: true},
      actionsColumn: {
        default : ()=>{
          return {
            width:'150px',
          }
        }
      },
      value: {default: ()=>{return []}},
      titleIcon: {default:''},
      title: {default:''},
      editPath:{default: ''},
      transshapeBreakPoint:{defalut: 'sm'},
      addNewAction:{default:null},
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
        transshape:false,
        model:{
          formModel:{},
          rows:[],
        },
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
      this.model.formModel = Object.assign({}, this.defaultModel)
      this.checkTransshape()
      if(this.queryAction){
        $bus.$emit("VularAction", this.queryAction, this.model.formModel)
      }

      $bus.$on('dispatchModel', this.onDispatchModel)
    },

    destroyed() {
      $bus.$off('dispatchModel', this.onDispatchModel)
    },

    methods: {
      onAddNew(){
        $bus.$emit('VularAction', this.addNewAction)
      },
      onDispatchModel(vularId, model){
        if(vularId == this.vularId){
          this.model = model
        }
      },
      onSelectAll(selected){
        this.model.rows.forEach(row=>{
          this.$set(row, 'selected', selected)
        })
      },

      onListHeaderHeight(height){
        this.page.header.listHeaderHeight = height
      },

      checkXs(){
        if(this.$vuetify.breakpoint.xs){
          if(this.transshapeBreakPoint === 'xs'){
            this.transshape = true
          }
          else{
            this.transshape = false
          }
        }
      },

      checkTransshape(){
        if(this.transshapeBreakPoint == 'xs'){
          this.checkXs()
        }
        if(this.transshapeBreakPoint == 'sm'){
          this.checkSm()
        }
        if(this.transshapeBreakPoint == 'md'){
          this.checkMd()
        }
        if(this.transshapeBreakPoint == 'lg'){
          this.checkLg()
        }
      },

      checkSm(){
        if(this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs){
          this.transshape = true
        }
        else{
          this.transshape = false
        }
      },

      checkMd(){
        if(this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs){
          this.transshape = true
        }
        else{
          this.transshape = false
        }
      },

      checkLg(){
        if(this.$vuetify.breakpoint.lg ||this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs){
          this.transshape = true
        }
        else{
          this.transshape = false
        }
      },
    },

    watch:{
      "$vuetify.breakpoint.xs": function(val){
        this.checkTransshape()
      },
      "$vuetify.breakpoint.sm":function(val){
        this.checkTransshape()
      },
      "$vuetify.breakpoint.md":function (val){
        this.checkTransshape()
      },
      "$vuetify.breakpoint.lg":function (val){
        this.checkTransshape()
      },

      "$vuetify.breakpoint.xl":function (val){
        if(val){
          this.transshape = false
        }
      }
    },

  }
</script>

<style>
  .top-small-button{
    opacity: 0.7;
  }

  .theme--light.v-pagination .v-pagination__item, .theme--light.v-pagination .v-pagination__navigation{
    background: transparent;
  }  
</style>