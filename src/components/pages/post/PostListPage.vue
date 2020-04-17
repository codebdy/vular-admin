<template>
  <VularListPage 
    :schema = "schema"
    title = "文章列表"
    v-model = "rows"
    editPath = "post-edit"
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
              width:'80px',
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
              field:'author',
              title: '作者',
              width:'',
              flex: '2' ,
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
            avatar : {
              name:"v-avatar",
              props:{
                size: '60',
              },
              children:[
                {
                  name:"img",
                  attrs:{
                    src:"/images/a1.jpg",
                    alt:"",
                  },
                },
              ],
            },
            title : 'Vular是迄今为止最棒的应用框架', 
            author : '无敌坤',
            date : '2020-5-4 18:22', 
            status : {
              name: "v-chip",
              props:{
                small:true,
                color:"primary"
              },
              text: "编辑中",
            },
          },
          {
            avatar : {
              name:"v-avatar",
              props:{
                size: '60',
              },
              children:[
                {
                  name:"img",
                  attrs:{
                    src:"/images/a2.jpg",
                    alt:"",
                  },
                },
              ],
            },
            title : '如果有一天，世界上最后一只熊消失，那么人们会想念他们吗？', 
            author : '小熊熊',
            date : '2020-5-4 18:22', 
            status : {
              name: "v-chip",
              props:{
                small:true,
                color:"red",
                dark:true,
              },
              text: "待审核",
            },
          },
          {
            id:"3",
            avatar : {
              name:"v-avatar",
              props:{
                size: '60',
              },
              children:[
                {
                  name:"img",
                  attrs:{
                    src:"/images/a3.jpg",
                    alt:"",
                  },
                },
              ],
            },
            title : '疫情过后，一切依旧笑春风', 
            author : '孙悟空',
            date : '2020-5-4 18:22', 
            status : {
              name: "v-chip",
              props:{
                small:true,
              },
              text: "已发布",
            },
          },
          {
            id:"4",
            avatar : {
              name:"v-avatar",
              props:{
                size: '60',
              },
              children:[
                {
                  name:"img",
                  attrs:{
                    src:"/images/a4.jpg",
                    alt:"",
                  },
                },
              ],
            },
            title : '随随便便吹过一阵风', 
            author : '孙悟空',
            date : '2020-5-4 18:22', 
            status : {
              name: "v-chip",
              props:{
                small:true,
              },
              text: "已发布",
            },
          },
          {
            id:"5",
            avatar : {
              name:"v-avatar",
              props:{
                size: '60',
              },
              children:[
                {
                  name:"img",
                  attrs:{
                    src:"/images/a5.jpg",
                    alt:"",
                  },
                },
              ],
            },
            title : '随随便便吹过一阵风', 
            author : '孙悟空',
            date : '2020-5-4 18:22', 
            status : {
              name: "v-chip",
              props:{
                small:true,
              },
              text: "已发布",
            },
          },
          {
            id:"6",
            avatar : {
              name:"v-avatar",
              props:{
                size: '60',
              },
              children:[
                {
                  name:"img",
                  attrs:{
                    src:"/images/a6.jpg",
                    alt:"",
                  },
                },
              ],
            },
            title : '随随便便吹过一阵风', 
            author : '孙悟空',
            date : '2020-5-4 18:22', 
            status : {
              name: "v-chip",
              props:{
                small:true,
              },
              text: "已发布",
            },
          },
          {
            id:"7",
            avatar : {
              name:"v-avatar",
              props:{
                size: '60',
              },
              children:[
                {
                  name:"img",
                  attrs:{
                    src:"/images/a1.jpg",
                    alt:"",
                  },
                },
              ],
            },
            title : '随随便便吹过一阵风', 
            author : '孙悟空',
            date : '2020-5-4 18:22', 
            status : {
              name: "v-chip",
              props:{
                small:true,
              },
              text: "已发布",
            },
          },
          {
            id:"8",
            avatar : {
              name:"v-avatar",
              props:{
                size: '60',
              },
              children:[
                {
                  name:"img",
                  attrs:{
                    src:"/images/a2.jpg",
                    alt:"",
                  },
                },
              ],
            },
            title : '随随便便吹过一阵风', 
            author : '孙悟空',
            date : '2020-5-4 18:22', 
            status : {
              name: "v-chip",
              props:{
                small:true,
              },
              text: "已发布",
            },
          },
          {
            id:"9",
            avatar : {
              name:"v-avatar",
              props:{
                size: '60',
              },
              children:[
                {
                  name:"img",
                  attrs:{
                    src:"/images/a4.jpg",
                    alt:"",
                  },
                },
              ],
            },
            title : '随随便便吹过一阵风', 
            author : '孙悟空',
            date : '2020-5-4 18:22', 
            status : {
              name: "v-chip",
              props:{
                small:true,
              },
              text: "已发布",
            },
          },
          {
            id:"10",
            avatar : {
              name:"v-avatar",
              props:{
                size: '60',
              },
              children:[
                {
                  name:"img",
                  attrs:{
                    src:"/images/a5.jpg",
                    alt:"",
                  },
                },
              ],
            },
            title : '随随便便吹过一阵风', 
            author : '孙悟空',
            date : '2020-5-4 18:22', 
            status : {
              name: "v-chip",
              props:{
                small:true,
              },
              text: "已发布",
            },
          },
          {
            id:"11",
            avatar : {
              name:"v-avatar",
              props:{
                size: '60',
              },
              children:[
                {
                  name:"img",
                  attrs:{
                    src:"/images/a6.jpg",
                    alt:"",
                  },
                },
              ],
            },
            title : '随随便便吹过一阵风', 
            author : '孙悟空',
            date : '2020-5-4 18:22', 
            status : {
              name: "v-chip",
              props:{
                small:true,
              },
              text: "已发布",
            },
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