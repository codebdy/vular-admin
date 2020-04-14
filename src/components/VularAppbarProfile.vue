<template>
  <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" class="mr-3">
        <v-avatar size="30px">
          <img src="/images/100.jpg" alt="Water Li" />
        </v-avatar>
      </v-btn>
    </template>
    <v-list>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'vular-appbar-profile',
  data () {
    return {
      item: 1,
      items: [
        { text: '个人信息', icon: 'mdi-account' },
        { text: '修改密码', icon: 'mdi-lock-open-outline' },
        { text: '退出', icon: 'mdi-logout' },
      ],      
    }
  },


  methods: {
  },
}
</script>

<style>
</style>