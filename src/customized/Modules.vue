<template>
  <div class="mt-1">
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            所有模块
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
        items: [
          { title: '仪表盘', icon: 'mdi-view-dashboard' },
          { title: '系统设置', icon: 'mdi-image' },
          { title: '用户管理', icon: 'mdi-help-box' },
        ],
        right: null,
    }),

    methods: {
    }
  }
</script>
