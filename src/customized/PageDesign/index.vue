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

        <v-list-group
          prepend-icon="mdi-format-list-checks"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>列表页</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>表头</v-list-item-title>
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
              <v-list-item-title>布局</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>表头</v-list-item-title>
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
              <v-list-item-title>表单</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>表头</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon small>mdi-arrow-all</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>
    </div>
    <div class="canvars">
      <div style="height: 1000px;">dd</div>
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
  export default {
    name: "page-design",
    components: {
    },
    props: {
    },

    data: () => ({
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

  .canvars{
    flex: 1; overflow-y: auto;
  }

  .right-drawer{
    border-left:solid rgba(0,0,0, 0.1) 1px; width:260px; flex-grow: 0;
  }

</style>
