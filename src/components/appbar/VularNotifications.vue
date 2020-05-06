<template>
  <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-badge color="red" overlap v-if="badge">
          <span slot="badge">{{badge}}</span>
          <v-icon medium>mdi-bell-outline</v-icon>
        </v-badge>
        <v-icon v-else medium>mdi-bell-outline</v-icon>
      </v-btn>
    </template>
    <v-card class="elevation-0">
      <v-toolbar dense flat color="transparent">
        <v-toolbar-title><h4>{{$t("notification.list")}}</h4></v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text class="pa-0">
        <v-list two-line subheader class="pa-0">
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :key="index"></v-divider>
            <v-list-item v-else :key="item.title" link>
              <v-list-item-avatar>
                <v-icon v-if="item.unread">mdi-email-outline</v-icon>
                <v-icon v-else>mdi-email-open-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title :class="{'font-weight-bold' : item.unread}"  v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle v-text="item.timeLabel"></v-list-item-subtitle>
              </v-list-item-content>
             </v-list-item>
          </template>
        </v-list>
        <v-divider></v-divider>
        <v-btn block tile class="ma-0">{{$t("notification.all")}}</v-btn>
        <v-divider></v-divider>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'vular-notifications',
  props:{
    globalField: {default : "notifications"},
  },
  data () {
    return {
      items: [
        {
          title: "New user registered",
          timeLabel: "Just now",
          unread:true,
        },
        { divider: true, inset: true },
        {
          title: "New order received",
          timeLabel: "2分钟前"
        },
        { divider: true, inset: true },
        {
          title: "New payment made",
          timeLabel: "24分钟前"
        },
        { divider: true, inset: true },
        {
          title: "New message from Michael",
          timeLabel: "1小时前"
        }
      ]
      ,      
    }
  },

  computed:{
    badge(){
      let globalField = this.globalField
      return globalField ? this.$store.state.globals[globalField] : ''
    }
  },


  methods: {
  },
}
</script>

<style>
</style>