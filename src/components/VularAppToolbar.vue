<template>
  <v-app-bar
    class="elevation-1"
    flat
    app
    dark
    v-bind="$props" 
    >
    <v-app-bar-nav-icon
    />
    <img src="images/logo.png" :height="36" alt="Vular Amazing Framework" />
    <v-toolbar-title class="ml-0 pl-3">
      <span class="hidden-sm-and-down">Vular</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>

      <v-menu offset-y origin="center center" class="elelvation-1" :nudge-bottom="14" transition="scale-transition">
        <v-btn icon slot="activator">
          <v-badge color="red" overlap>
            <span slot="badge">3</span>
            <v-icon medium>notifications</v-icon>
          </v-badge>
        </v-btn>
        <notification-list></notification-list>
      </v-menu>
      <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon large v-on="on">
            <v-avatar size="30px">
              <img src="images/100.jpg" alt="Water Li" />
            </v-avatar>
          </v-btn>
        </template>
        <v-list class="pa-0">
          <v-list-tile
            v-for="(item, index) in items"
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            @click="item.click"
            ripple="ripple"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            :key="index"
          >
            <v-list-tile-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>


  </v-app-bar>
</template>

<script>
export default {
  name: 'vular-app-toolbar',
  props: {
    bottom: false,
    clippedLeft: true,
    color:'',
  },
  data () {
    return {
      items: [
        {
          icon: "account_circle",
          href: "#",
          title: 'toobar.profile',
          click: this.handleProfile
        },
        {
          icon: "settings",
          href: "#",
          title: 'toobar.settings',
          click: this.handleSetting
        },
        {
          icon: "fullscreen_exit",
          href: "#",
          title: 'toobar.logout',
          click: this.handleLogut
        }
      ]
    }
  },


  methods: {
  },
}
</script>

<style>
</style>