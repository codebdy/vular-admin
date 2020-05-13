<template>
  <div style="flex: 1">
    <v-navigation-drawer 
      class="modules-drawer" app clipped
      v-model="$store.state.customizedApp.modulesDrawer"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            模块
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

      <v-divider></v-divider>

      <v-list
        dense
        nav
        class="modules-drawer-list"
        :style="{
          height:'calc(100vh - ' + ($vuetify.application.top + 50) + 'px)'
        }"
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
           <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>      
    </v-navigation-drawer>
    <v-container fluid style="padding-bottom: 100px;">
      <h2>编辑模块</h2>
      <VularFormCard title="基础信息">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              name="name"
              label="ID标识"
              outlined
              value="1"
              disabled
              dense
            ></v-text-field>
            <v-text-field
              name="name"
              label="名称"
              outlined
              dense
              value="文章管理"
            ></v-text-field>
            <v-select
              name="name"
              label="入口页面"
              outlined
              dense
              item-text="title"
              :items="desserts"
            ></v-select>
          </v-col>
        </v-row>
      </VularFormCard>
      <VularFormCard title="页面">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">标题</th>
                <th class="text-left">图标</th>
                <th class="text-left">模板</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td><v-icon v-text="item.icon"></v-icon></td>
                <td>{{ item.template }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </VularFormCard>
    </v-container>
    <div class="bottom-nav" 
      :style="{
        left:($vuetify.application.left + $vuetify.application.right) + 'px', 
        width:'calc(100vw - '+ ($vuetify.application.left + $vuetify.application.right) + 'px)',
        background:$store.state.vularApp.content.card.color,
      }"
    >
      <v-spacer></v-spacer>
      <v-btn x-large color="primary" dark width="200">
        <b>保存</b>
      </v-btn>
    </div>

  </div>

</template>

<script>
  export default {
    name: "modules",
    components: {
    },
    props: {
    },

    data: () => ({
        desserts: [
          {
            id:"1",
            title: '文章列表',
            icon:'mdi-view-list',
            template:'vular-list-page',
          },
          {
            id:"2",
            title: '文章编辑',
            icon:'mdi-image',
            template:'vular-edit-page',
          },
        ],
        items: [
          { title: '仪表盘', icon: 'mdi-view-dashboard' },
          { title: '系统设置', icon: 'mdi-image' },
          { title: '文章管理', icon: 'mdi-image' },
          { title: '文章分类', icon: 'mdi-image' },
          { title: '王章属性', icon: 'mdi-image' },
          { title: '商品管理', icon: 'mdi-image' },
          { title: '商品分类', icon: 'mdi-image' },
          { title: '商品分类1', icon: 'mdi-image' },
          { title: '商品分类3', icon: 'mdi-image' },
          { title: '商品分类4', icon: 'mdi-image' },
          { title: '商品分类5', icon: 'mdi-image' },
          { title: '商品属性', icon: 'mdi-image' },
          { title: '用户管理', icon: 'mdi-help-box' },
          { title: '角色管理', icon: 'mdi-help-box' },
        ],
        right: null,
    }),

    methods: {
    }
  }
</script>

<style scoped>
  .bottom-nav{
    position: fixed;
    bottom: 0;
    border-top:rgba(0,0,0, 0.1) solid 1px; 
    box-shadow: 0px 0px 5px rgba(0,0,0,0.05);
    display: flex;
    flex-flow: row;
    padding:10px 30px;
    padding-left:0; 
  }

  .modules-drawer-list{
    flex: 1;
    overflow-y: auto; 
    overflow-x:hidden;
  }

  .modules-drawer ::-webkit-scrollbar {
    width: 0.2rem;
    height: 0.2rem;
  }
  .modules-drawer ::-webkit-scrollbar-track {
    border-radius: 0;
  }
  .modules-drawer ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background: rgba(0,0,0, 0.2);
    transition: all .2s;
  }

  .modules-drawer ::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0, 0.4);
  }

  .theme--dark .modules-drawer ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background: rgba(255,255,255, 0.2);
    transition: all .2s;
  }
  .theme--dark .modules-drawer ::-webkit-scrollbar-thumb:hover {
    background: rgba(255,255,255, 0.4);
  }
  .light.modules-drawer ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background: rgba(0,0,0, 0.2);
    transition: all .2s;
  }

  .light.modules-drawer ::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0, 0.4);
  }

  .modules-drawer ::-webkit-scrollbar-corner{
    background: transparent;
  }

  .modules-drawer{
    width: 100%;height: 100%;display: flex;flex-flow: column;
  }

  .modules-drawer .v-list-item__title{
    font-size: 0.825rem;
  }

  .modules-drawer .v-subheader{
    font-size: 0.825rem;
  }
  
</style>
