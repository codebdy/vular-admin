<template>
  <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-badge color="red" overlap>
          <span slot="badge">3</span>
          <v-icon medium>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-card class="elevation-0">
      <v-toolbar dense flat color="transparent">
        <v-toolbar-title><h4>消息列表</h4></v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text class="pa-0">
        <v-list two-line subheader class="pa-0">
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :key="index"></v-divider>
            <v-list-item v-else :key="item.title">
              <v-list-item-avatar :color="item.color">
                <v-icon dark>{{ item.icon }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title :class="{'font-weight-bold' : index===0}"  v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle v-text="item.timeLabel"></v-list-item-subtitle>
              </v-list-item-content>
             </v-list-item>
          </template>
        </v-list>
        <v-divider></v-divider>
        <v-btn block tile class="ma-0">All</v-btn>
        <v-divider></v-divider>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'vular-notifications',
  data () {
    return {
      items: [
        {
          title: "New user registered",
          color: "light-green",
          icon: "account_circle",
          timeLabel: "Just now"
        },
        { divider: true, inset: true },
        {
          title: "New order received",
          color: "light-blue",
          icon: "shopping_cart",
          timeLabel: "2 min ago"
        },
        { divider: true, inset: true },
        {
          title: "New payment made",
          color: "cyan",
          icon: "payment",
          timeLabel: "24 min ago"
        },
        { divider: true, inset: true },
        {
          title: "New message from Michael",
          color: "red",
          icon: "email",
          timeLabel: "1 hour ago"
        }
      ]
      ,      
    }
  },


  methods: {
  },
}
</script>

<style>
</style>