<template>
  <v-navigation-drawer permanent class="modules-drawer">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          模块
        </v-list-item-title>
      </v-list-item-content>
      <v-btn
        dark
        x-small
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

</template>

<script>
  export default {
    name: "modules",
    components: {
    },
    props: {
    },

    data: () => ({
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

<style>
  .modules-drawer-list{
    flex: 1;
    overflow-y: auto; 
    overflow-x:hidden;
    margin-right: 2px;
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
