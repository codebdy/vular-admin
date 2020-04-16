<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
  >
  <VularPageHeader @stick="onStick" :title="'询盘列表'" @headerHeight="onHeaderHeight">
    <v-divider
      class="mx-4"
      inset
      vertical
    ></v-divider>
    <div>
      <span>共360条</span>
    </div>
    <v-spacer></v-spacer>
    <v-btn rounded color="primary new-button" dark 
      :small="header.isStick"
    >
      <v-icon left>mdi-plus</v-icon> 新建
    </v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn class="ml-2" fab elevation="0" :color="$store.state.vularApp.content.card.color"
          :small="!header.isStick"
          :x-small="true"
          v-on="on"
       >
          <v-icon color="primary" class="top-small-button">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
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


    <template slot='list-head'>
      <VularListHead 
        :schema="listSchema"
        :isStick = "header.isStick" 
      ></VularListHead>
    </template>
    <template slot='list-title'>
      <VularListTitle :schema="listSchema"></VularListTitle>
    </template>
  </VularPageHeader>
  <v-container fluid :style="{'margin-top': (header.height + 0) + 'px'}" class="pt-0">
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
          <VularListBody :schema="listSchema" v-model="rows"></VularListBody>
          <v-pagination
            :length="4"
            circle
            color="success"
          ></v-pagination>

        </v-card>
      </v-col>
    </v-row>
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
    },
    data () {
      return {
        header:{
          isStick: false,
          height: 100,
        },
        listSchema:{
          canSelect:true,
          obviousFilters:[
            {
              label:'分类',
              rules:{
                'cat1' : 'Category1',
                'cat2' : 'Category2',
                'cat3' : 'Category3',
                'cat4' : 'Category4',
                'cat5' : 'Category5',
                'cat6' : 'Category6',
              },
              blankLabel:"全部分类",
              blankValue:"",
              model:"",
            },
            {
              label:'属性',
              rules:{
                'attr1' : 'Attribute1',
                'attr2' : 'Attribute2',
                'attr3' : 'Attribute3',
                'attr4' : 'Attribute4',
                'attr5' : 'Attribute5',
                'attr6' : 'Attribute6',
              },
              blankLabel:"全部属性",
              blankValue:"",
              model:"",
            }
          ],
          popFilters:[
            {
              label:'销量',
              rules:{
                'sales1' : '最好',
                'sales2' : '最差',
                'sales3' : '一般',
              },
              blankLabel:"全部",
              blankValue:"",
              model:"",
            },
            {
              label:'状态',
              rules:{
                'ststus1' : '正在编辑',
                'ststus2' : '已经发布',
                'ststus3' : '未发布',
                'ststus4' : '被拒绝',
              },
              blankLabel:"全部",
              blankValue:"",
              model:"",
            }
          ],
          columns:[
            {
              field:'name',
              title: '姓名',
              width:'',
              flex: '1' ,
              //props:[],
            },
            {
              field:'email',
              title: '邮箱',
              width:'',
              flex: '1' ,
              //props:[],
            },
            {
              field:'company',
              title: '公司',
              width:'',
              flex: '1' ,
              //props:[],
            },
          ],
          actionsColumn:{
            width:'150px',
          },
        },
        rows:[
          {
            id:"1",
            name : 'Martin Li', 
            email : 'Li@vular.cn', 
            company : 'Vular soft'
          },
          {
            id:"2",
            name : 'Margin Wang', 
            email : 'Li@tianbupa.com', 
            company : '小火星'
          },
          {
            id:"3",
            name : 'Padding 赵', 
            email : 'Li@dibupa.com', 
            company : '大太阳'
          },
          {
            id:"4",
            name : 'Padding 赵', 
            email : 'Li@dibupa.com', 
            company : '大太阳'
          },
          {
            id:"5",
            name : 'Padding 赵', 
            email : 'Li@dibupa.com', 
            company : '大太阳'
          },
          {
            id:"6",
            name : 'Padding 赵', 
            email : 'Li@dibupa.com', 
            company : '大太阳'
          },
          {
            id:"7",
            name : 'Padding 赵', 
            email : 'Li@dibupa.com', 
            company : '大太阳'
          },
        ]
        
      }
    },
    computed:{
    },

    methods: {
      onStick(isStick){
        this.header.isStick = isStick
      },

      onHeaderHeight(height){
        this.header.height = height
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
</style>