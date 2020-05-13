<template>
  <div style="flex: 1">
    <v-navigation-drawer 
      class="modules-drawer" app clipped
      v-model="$store.state.customizedApp.modulesDrawer"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{$t('custumized.modules')}}
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

    <VularBottomActionEditPage title="编辑模块">
      <VularFormCard title="基础信息">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              name="name"
              label="名称"
              outlined
              dense
              value="文章管理"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              name="name"
              label="ID标识"
              outlined
              value="1"
              disabled
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </VularFormCard>
      <VularFormCard title="页面">
        <v-data-table
          hide-default-footer
          disable-sort
          :headers = "headers"
          :items="desserts"
        >
          <template v-slot:item.icon="{ item }">
            <v-icon v-text="item.icon"></v-icon>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn icon small>
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon small>
              <v-icon small>mdi-pencil-ruler</v-icon>
            </v-btn>
            <v-btn icon small>
              <v-icon small>mdi-trash-can-outline</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            icon
            color="primary">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </VularFormCard>
      
    </VularBottomActionEditPage>

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
        headers: [
          {
            text:'#',
            value:'id',
            sortable: false,
            width:'100px',
          },
          {
            text: '标题',
            value: 'title',
          },
          {
            text: '图标',
            value: 'icon',
          },
          {
            text: '模板',
            value: 'template',
          },
          {
            value: 'actions',
            width:'150px',
          },
        ],
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
    }),

    methods: {
    }
  }
</script>

<style scoped>
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
