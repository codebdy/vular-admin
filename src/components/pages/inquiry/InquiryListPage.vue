<template>
  <VularPage></VularPage>
</template>

<script>
  //import VularBackgrounInput from "./VularBackgrounInput"

  export default {
    name: 'inquiry-list-page',
    components: {
    },
    props: {
    },
    data () {
      return {
        isStick: false,
        listSchema:{
          canSelect:true,
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
              flex: '2' ,
              //props:[],
            },
            {
              field:'company',
              title: '公司',
              width:'',
              flex: '3' ,
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
        this.isStick = isStick
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
</style>