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
    <div>
      <v-btn class="mr-5" fab elevation="0" :color="$store.state.vularApp.content.card.color"
        :small="isStick"
        :x-small="isStick"
      >
        <v-icon color="#8296f8">mdi-import</v-icon>
      </v-btn>

      <v-btn class="mr-5" fab elevation="0" :color="$store.state.vularApp.content.card.color"
        :small="isStick"
        :x-small="isStick"
      >
        <v-icon color="#8296f8">mdi-export-variant</v-icon>
      </v-btn>
      <v-btn class="mr-5" fab elevation="0" :color="$store.state.vularApp.content.card.color"
        :small="isStick"
        :x-small="isStick"
      >
        <v-icon color="#8296f8">mdi-cloud-print-outline</v-icon>
      </v-btn>
    </div>
    <v-btn rounded color="primary" dark style="padding:0 28px;" 
      :small="isStick"
    >
      <v-icon left>mdi-plus</v-icon> 新建
    </v-btn>

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
  <v-container fluid style="margin-top: 190px; ">
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <v-card flat style="height:1000px; border:#000 solid 1px;"  :color="$store.state.vularApp.content.card.color" :style="$store.state.vularApp.content.card.style"
          class="px-6"
        >
          12<br>
          3<br>
          4<br>
          5<br>
          6<br>
          7<br>
          8<br>
          9<br>
          10<br>
          11<br>
          12<br>
          13<br>
          14<br>
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
            name : 'Martin Li', 
            email : 'Li@vular.cn', 
            company : 'Vular soft'
          },
          {
            name : 'Margin Wang', 
            email : 'Li@tianbupa.com', 
            company : '小火星'
          },
          {
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
</style>