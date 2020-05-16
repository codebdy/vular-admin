<template>
  <div style="flex: 1">
    <v-navigation-drawer 
      class="modules-drawer" app right clipped
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
          color="primary"
          v-for="aModule in modules"
          :key="aModule.id"
          :to = "{
            name:'customized-module', 
            params:{
              moduleId:aModule.id,
            }
          }"
        >
           <v-list-item-content>
            <v-list-item-title>{{ aModule.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>      
    </v-navigation-drawer>

    <router-view/>
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
        modules: [
          { title: '仪表盘', id: '1' },
          { title: '系统设置', id: '2' },
          { title: '文章管理', id: '3' },
          { title: '文章分类', id: '4' },
          { title: '王章属性', id: '5' },
          { title: '商品管理', id: '6' },
          { title: '商品分类', id: '7' },
          { title: '商品分类1', id: '8' },
          { title: '商品分类3', id: '9' },
          { title: '商品分类4', id: '10' },
          { title: '商品分类5', id: '11' },
          { title: '商品属性', id: '12' },
          { title: '用户管理', id: '13' },
          { title: '角色管理', id: '14' },
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
    display: none;
  }

  .modules-drawer:hover ::-webkit-scrollbar{
    display: block;
    width: 0.4rem;
    height: 0.4rem;
  }
  .modules-drawer ::-webkit-scrollbar-track {
    border-radius: 0;
  }
  .modules-drawer ::-webkit-scrollbar-thumb {
    border-radius: 0.2rem;
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
