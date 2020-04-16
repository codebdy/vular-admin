<template>
  <VularPage title="询盘列表" v-model="header">
    <template slot="breadcrumbs-area">
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
            :x-small="header.isStick"
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

    <template slot="list-actions">
      <VularListActions 
        :schema="listSchema"
        :isStick = "header.isStick"
        v-model="rows"
        @selectAll = "onSelectAll" 
      ></VularListActions>
    </template>

    <template slot="list-title">
      <VularListTitle :schema="listSchema"></VularListTitle>
    </template>      

    <template>
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
              :schema="listSchema" 
              v-model="rows"
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
    </template>    
  </VularPage>

</template>

<script>
  //import VularBackgrounInput from "./VularBackgrounInput"

  export default {
    name: 'vular-list-page',
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
        selectedRows: [],
        listSchema:{
          canSelect:true,
          canBatchDelete: true,
          batchActions:[
            {
              icon: 'mdi-arrow-collapse-down',
              label: '下载',
              shortcut: true,
              action:'action_id1',
            },
            {
              icon: 'mdi-email-send-outline',
              label: '分配',
              shortcut: true,
              action:'action_id2',
            },
            {
              icon: 'mdi-sale',
              label: '促销',
              shortcut: false,
              action:'action_id3',
            },
            {
              icon: 'mdi-content-copy',
              label: '克隆',
              shortcut: false,
              action:'action_id4',
            },
          ],
          rowActions:[
            {
              icon: 'mdi-eye-outline',
              label: '隐藏',
              shortcut: true,
              action:'action_id1',
            },
            {
              icon: 'mdi-pencil',
              label: '编辑',
              shortcut: false,
              action:'action_id2',
            },
            {
              icon: 'mdi-content-copy',
              label: '克隆',
              shortcut: false,
              action:'action_id3',
            },
            {
              icon: 'mdi-trash-can',
              label: '删除',
              shortcut: false,
              action:'action_id4',
            },
          ],
          filters:[
            {
              label:'分类',
              shortcut: true,
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
              shortcut: true,
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
            },
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
            company : 'Vular soft',
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
      onSelectAll(selected){
        this.rows.forEach(row=>{
          this.$set(row, 'selected', selected)
        })
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

  .theme--light.v-pagination .v-pagination__item, .theme--light.v-pagination .v-pagination__navigation{
    background: transparent;
  }  
</style>