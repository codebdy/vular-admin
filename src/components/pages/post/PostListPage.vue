<template>
  <VularListPage 
    :schema = "schema"
    title = "文章列表"
    v-model = "rows"
  ></VularListPage>
</template>

<script>
  //import VularBackgrounInput from "./VularBackgrounInput"

  export default {
    name: 'post-list-page',
    components: {
    },
    props: {
    },
    data () {
      return {
        schema:{
          canSelect:true,
          canBatchDelete: true,
          transshapeBreakPoint: 'xs',
          transshape: false,
          batchActions:[
            {
              icon: 'mdi-arrow-collapse-down',
              title: '下载',
              shortcut: true,
              action:'action_id1',
            },
            {
              icon: 'mdi-publish',
              title: '发布',
              shortcut: true,
              action:'action_id2',
            },
            {
              icon: 'mdi-shield-check-outline',
              title: '审核',
              shortcut: false,
              action:'action_id3',
            },
            {
              icon: 'mdi-content-copy',
              title: '克隆',
              shortcut: false,
              action:'action_id4',
            },
          ],
          rowActions:[
            {
              icon: 'mdi-pencil',
              title: '编辑',
              shortcut: true,
              action:'action_id2',
            },
            {
              icon: 'mdi-eye-outline',
              title: '隐藏',
              shortcut: false,
              action:'action_id1',
            },
            {
              icon: 'mdi-content-copy',
              title: '克隆',
              shortcut: false,
              action:'action_id3',
            },
            {
              icon: 'mdi-trash-can',
              title: '删除',
              shortcut: false,
              action:'action_id4',
            },
          ],
          filters:[
            {
              title:'分类',
              shortcut: true,
              rules:{
                'cat1' : 'Category1',
                'cat2' : 'Category2',
                'cat3' : 'Category3',
                'cat4' : 'Category4',
                'cat5' : 'Category5',
                'cat6' : 'Category6',
              },
              blankTitle:"全部分类",
              blankValue:"",
              model:"",
            },
            {
              title:'属性',
              shortcut: true,
              rules:{
                'attr1' : 'Attribute1',
                'attr2' : 'Attribute2',
                'attr3' : 'Attribute3',
                'attr4' : 'Attribute4',
                'attr5' : 'Attribute5',
                'attr6' : 'Attribute6',
              },
              blankTitle:"全部属性",
              blankValue:"",
              model:"",
            },
            {
              title:'阅读量',
              rules:{
                'sales1' : '最好',
                'sales2' : '最差',
                'sales3' : '一般',
              },
              blankTitle:"全部",
              blankValue:"",
              model:"",
            },
            {
              title:'状态',
              rules:{
                'ststus1' : '正在编辑',
                'ststus2' : '已经发布',
                'ststus3' : '未发布',
                'ststus4' : '被拒绝',
              },
              blankTitle:"全部",
              blankValue:"",
              model:"",
            }
          ],
          columns:[
            {
              field:'avatar',
              title: '',
              width:'',
              flex: '1' ,
              //props:[],
            },
            {
              field:'title',
              title: '标题',
              width:'',
              flex: '4' ,
              //props:[],
            },
            {
              field:'date',
              title: '更新时间',
              width:'',
              flex: '2' ,
              //props:[],
            },
            {
              field:'status',
              title: '状态',
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
            title : '随随便便吹过一阵风', 
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
          {
            id:"8",
            name : 'Padding 赵', 
            email : 'Li@dibupa.com', 
            company : '大太阳'
          },
          {
            id:"9",
            name : 'Padding 赵', 
            email : 'Li@dibupa.com', 
            company : '大太阳'
          },
          {
            id:"10",
            name : 'Padding 赵', 
            email : 'Li@dibupa.com', 
            company : '大太阳'
          },
          {
            id:"11",
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
    },

  }
</script>

<style>
</style>