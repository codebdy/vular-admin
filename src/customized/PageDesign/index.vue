<template>
  <div class="design-page">
    <div class="left-drawer">
      <div class="drawer-title">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              页面组件
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
          v-for="(item,index) in items"
          :key="index"
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
    <div class="canvars">
      <div style="height: 1000px;">dd</div>
    </div>
    <div class="right-drawer"></div>
  </div>
</template>

<script>
  export default {
    name: "page-design",
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
        { title: '表格列', icon: 'mdi-view-column' },
        { title: '表格列', icon: 'mdi-view-column' },
        { title: '表格列', icon: 'mdi-view-column' },
        { title: '表格列', icon: 'mdi-view-column' },
        { title: '表格列', icon: 'mdi-view-column' },
        { title: '表格列', icon: 'mdi-view-column' },
        { title: '表格列', icon: 'mdi-view-column' },
        { title: '表格列', icon: 'mdi-view-column' },
        { title: '表格列', icon: 'mdi-view-column' },
        { title: '表格列', icon: 'mdi-view-column' },
        { title: '行操作区', icon: 'mdi-playlist-edit' },
      ],
    }),

    methods: {
    }
  }
</script>

<style scoped>
  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar{
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

  .canvars{
    flex: 1; overflow-y: auto;
  }

  .right-drawer{
    border-left:solid rgba(0,0,0, 0.1) 1px; width:260px; flex-grow: 0;
  }

</style>
