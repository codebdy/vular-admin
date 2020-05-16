<template>
  <div class="design-page">
    <div class="left-drawer">
      <div class="drawer-title">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              工具箱
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider></v-divider>

      <v-list
        dense
        nav
        class="drawer-body"
      >
        <v-list-group
          v-for="itemGroup in toolboxGroups"
          :key="itemGroup.title" 
          :prepend-icon="itemGroup.icon" 
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{itemGroup.title}}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="item in itemGroup.items"
            :key="item.title"
            class="toolbox-item"
          >
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon small>mdi-arrow-all</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-group
          prepend-icon="mdi-view-dashboard-outline"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>栅格</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>行</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon small>mdi-arrow-all</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>列</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon small>mdi-arrow-all</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-group
          prepend-icon="mdi-form-select"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>组件</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>表单卡片</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon small>mdi-arrow-all</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>输入框</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon small>mdi-arrow-all</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>文本框</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon small>mdi-arrow-all</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-group
          prepend-icon="mdi-toy-brick-outline"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>自定义组件</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>社交优化对话框</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon small>mdi-arrow-all</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>SEO对话框</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon small>mdi-arrow-all</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>
      <v-divider></v-divider>
      <div class="drawer-title">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              页面部件
            </v-list-item-title>
          </v-list-item-content>
          <v-btn
            dark
            small
            absolute
            bottom
            right
            fab
            color="primary"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-list-item>
      </div>

      <v-divider></v-divider>

      <v-list
        dense
        nav
        class="drawer-body"
      >
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>主页面</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>社交优化对话框</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </div>
    <div class="center-area">
      <div flat dense absolute class="canvars-toolbar">
        <div style="width: 150px; padding-left:6px;">
          <v-select
            :items="['列表页','表单页','列表对话框','表单对话框']"
            :label="!pageType ? '页面类型' : ''"
            v-model="pageType"
          ></v-select>
        </div>
        <v-btn icon v-if="pageType"><v-icon>mdi-file-cog-outline</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-btn icon><v-icon>mdi-layers-outline</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-eye-outline</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-undo</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-redo</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-delete-outline</v-icon></v-btn>
      </div>
      <div class="canvars"
        :style="{
          background: $store.state.vularApp.content.color,
          'font-family': $store.state.vularApp.content.fontFamily
        }"
      >

        <div
          style="padding: 20px; outline: #5d78ff dashed 1px;"
        >
          
        </div>
        <div
          style="padding: 20px; outline: #5d78ff dashed 1px; min-height: 400px;"
        >
          
        </div>
        <div
          style="padding: 20px; outline: #5d78ff dashed 1px;"
        >
          
        </div>


      </div>
    </div>
    <div class="right-drawer">
      <div class="drawer-title">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              属性
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider></v-divider>
      
    </div>
  </div>
</template>

<script>
  import Canvas from "./Core/Elements/Canvas.js"

  export default {
    name: "page-design",
    components: {
    },
    props: {
    },

    data: () => ({
      toolboxGroups:[
        {
          title:'页面布局',
          icon:"mdi-page-layout-header-footer",
          items:[
          {
              title:"固定页眉",
              node:'',
            },
            {
              title:"固定页脚",
              node:'',
            },
            {
              title:"页面内容",
              node:'',
            },
          ],
        }
      ],
      canvas: new Canvas,
      pageType:'',
    }),

    methods: {
    }
  }
</script>

<style scoped>
  ::-webkit-scrollbar{
    display: block;
    width: 0.4rem;
    height: 0.4rem;
  }

  .left-drawer ::-webkit-scrollbar {
    display: none;
  }

  .left-drawer:hover ::-webkit-scrollbar{
    display: block;
    width: 0.4rem;
    height: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 0.2rem;
    background: rgba(0,0,0, 0.2);
    transition: all .2s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0, 0.4);
  }

  .design-page{
    display: flex;
    flex-flow: row;
    flex: 1;
  }

  .left-drawer{
    width: 238px;
    border-right:solid rgba(0,0,0, 0.1) 1px;
    display: flex;
    flex-flow: column;
  }

  .drawer-title{
    flex-grow: 0;
    height: 50px;
  }

  .drawer-body{
    flex:1;
    overflow-y: auto;
    height: 0;
  }

  .toolbox-item{
    user-select: none; 
    -moz-user-select: none; 
    -webkit-user-select: none;
    cursor:move;
  }

  .toolbox-item:hover{
    background: rgba(0,0,0, 0.05); 

  }

  .center-area{
    flex: 1; 
    display: flex;
    flex-flow: column;
    position: relative;
  }
  .canvars-toolbar{
    height:51px;
    width: 100%;
    left:0;
    top:0;
    border-bottom:solid rgba(0,0,0, 0.1) 1px; 
    display: flex;
    flex-flow: row;
    align-items: center;
    padding: 0 4px;
  }
  .canvars{
    flex: 1; 
    overflow-y: auto;
    padding: 10px;
    position: relative;
  }

  .right-drawer{
    border-left:solid rgba(0,0,0, 0.1) 1px; width:260px; flex-grow: 0;
  }

</style>
