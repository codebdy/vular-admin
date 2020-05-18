<template>
  <div class="design-page">
    <div class="left-drawer">
      <div class="drawer-title">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{$t('design.toolbox')}}
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
            @mousedown="onToolboxItemDragstart(item)"
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
      <div flat dense absolute class="canvas-toolbar">
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
        <v-btn-toggle
          dense
          group
          v-model="withHeader"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon 
                :value="true"
                v-on="on"
              ><v-icon>mdi-page-layout-header</v-icon></v-btn>
            </template>
            <span>{{$t('design.page-header')}}</span>
          </v-tooltip>
        </v-btn-toggle>
        <v-btn-toggle
          dense
          group
          v-model="withFooter"
        >
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon 
            :value="true"
            v-on="on"
            ><v-icon>mdi-page-layout-footer</v-icon></v-btn>
          </template>
          <span>{{$t('design.page-footer')}}</span>
        </v-tooltip>
        </v-btn-toggle>
          <v-btn icon tile><v-icon>mdi-eye-outline</v-icon></v-btn>
          <v-btn icon tile><v-icon>mdi-undo</v-icon></v-btn>
          <v-btn icon tile><v-icon>mdi-redo</v-icon></v-btn>
          <v-btn icon tile><v-icon>mdi-delete-outline</v-icon></v-btn>
      </div>
      <div  
        :style="{
          background: $store.state.vularApp.content.color,
          'font-family': $store.state.vularApp.content.fontFamily
        }"
        class="canvas-element">
        <ElementView
          v-if="withHeader"
          key="header"
          v-model="header"
        />
        <div style="padding:0 0px; display: flex; flex-flow: row; flex:1;">
          <ElementView
            key="page-content"
            v-model="pageContent"
          />
        </div>
        <ElementView
          v-if="withFooter"
          key="footer"
          v-model="footer"
        />
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
    <TheToolbox/>
    <TheLabel/>
    <TheCursor/>
    <TheMouseFollower/>
  </div>
</template>

<script>
  import Canvas from "./Core/Elements/Canvas.js"
  import TheCursor from "./Core/Views/TheCursor.vue"
  import TheToolbox from "./Core/Views/TheToolbox.vue"
  import TheLabel from "./Core/Views/TheLabel.vue"
  import TheMouseFollower from "./Core/Views/TheMouseFollower.vue"
  import ElementView from "./Core/Views/ElementView"
  import ElementPageLayout from "./Core/Elements/ElementPageLayout"
  import ElementRow from "./Core/Elements/ElementRow"
  import ElementColumn from "./Core/Elements/ElementColumn"
  import ElementPageContent from "./Core/Elements/ElementPageContent"

  export default {
    name: "page-design",
    components: {
      ElementView,
      TheCursor,
      TheMouseFollower,
      TheToolbox,
      TheLabel
    },
    props: {
    },
    data: function () {
      return {
        withHeader:true,
        withFooter:false,
        toolboxGroups:[
          {
            title: this.$t('design.grid'),
            icon:"mdi-view-dashboard-outline",
            items:[
            {
                title:this.$t('design.row'),
                node: new ElementRow(),
              },
              {
                title:this.$t('design.column'),
                node:new ElementColumn(),
              },
            ],
          }
        ],
        canvas: new Canvas,
        header: new ElementPageLayout('VularPageHeader', this.$t('design.page-header'), 'ThePageHeader'),
        footer: new ElementPageLayout('VularPageFooter', this.$t('design.page-footer'), 'ThePageFooter'),
        pageContent: new ElementPageContent(),
        pageType:'',
      }
    },
   
    
    mounted() {
      document.addEventListener('mouseup', this.onMouseUp)
      document.addEventListener('mousemove', this.onMouseMove)
    },
    destroyed() {
      document.removeEventListener('mouseup', this.onMouseUp)
      document.removeEventListener('mousemove', this.onMouseMove)
    },


    methods: {
      onToolboxItemDragstart(item){
        //console.log(item)
        this.$store.commit('dragElement', item.node.clone())
      },

      onMouseUp(){
        this.$store.commit('endDragElement')
      },

      onMouseMove(){
        let draggedElement = this.$store.state.customizedApp.draggedElement

        if(draggedElement){
          window.$bus.$emit('followMouse', event)
        }

      },

      //onToolboxItemDragend(){
      //  window.$bus.$emit('hideCursor')
      //},
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
  .canvas-toolbar{
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

  .right-drawer{
    border-left:solid rgba(0,0,0, 0.1) 1px; width:260px; flex-grow: 0;
  }
</style>

<style>
  .canvas-element{
    flex: 1; 
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-flow: column;
    padding:1px;
  }

  .element-outline{
    outline: #5d78ff dashed 1px;
  }

  .layout-place-holder{
    padding:10px;
    display: flex;
    justify-content: center;
    color:lightgrey;
    font-size: 20px;
    pointer-events: none;
    user-select: none;
  }

</style>
