<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
  >
  <VularListPageHeader @stick="onStick" :title="'询盘列表'">
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
      :small="isStick"
    >
      <v-icon left>mdi-plus</v-icon> 新建
    </v-btn>
    <div>
      <v-btn class="ml-2" fab elevation="0" :color="$store.state.vularApp.content.card.color"
        :small="!isStick"
        :x-small="true"
      >
        <v-icon color="primary" class="top-small-button">mdi-dots-vertical</v-icon>
      </v-btn>
    </div>

    <template slot='list-head'>
      <VularListHead 
        :schema="listSchema"
        :isStick = "isStick" 
      ></VularListHead>
    </template>
    <template slot='list-title'>
      <VularListTitle :schema="listSchema"></VularListTitle>
    </template>
  </VularListPageHeader>
  <v-container fluid style="margin-top: 205px;">
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12">
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