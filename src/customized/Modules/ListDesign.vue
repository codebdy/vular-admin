<template>
  <div class="design-page">
    <div class="left-drawer"
      :style="{background:$store.state.vularApp.content.card.color}"
    >
      <div class="drawer-title">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              页面模块
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
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
  export default {
    name: "list-design",
    components: {
    },
    props: {
    },

    data: () => ({
      items: [
        { title: '导航标题区', icon: 'mdi-subtitles-outline' },
        { title: '列表过滤区', icon: 'mdi-filter-outline' },
        { title: '批量操作区', icon: 'mdi-table-edit' },
        { title: '表格列', icon: 'mdi-view-column' },
        { title: '行操作区', icon: 'mdi-playlist-edit' },
      ],
    }),

    methods: {
    }
  }
</script>

<style scoped>
  .design-page{
    display: flex;
    flex-flow: row;
    flex: 1;
  }

  .left-drawer{
    width: 200px;
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
</style>
