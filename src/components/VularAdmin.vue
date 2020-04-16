<template>
  <v-app id="admin-app" :style="{'font-family': $store.state.vularApp.fontFamily}">
    <v-navigation-drawer
      v-model="$store.state.vularApp.drawer.model"
      :clipped="$store.state.vularApp.drawer.clipped"
      :floating="$store.state.vularApp.drawer.floating"
      :mini-variant="$store.state.vularApp.drawer.mini"
      :mini-variant-width = "$store.state.vularApp.drawer.miniVariantWidth"
      :permanent="$store.state.vularApp.drawer.type === 'permanent'"
      :temporary="$store.state.vularApp.drawer.type === 'temporary'"
      app
      overflow
      :mini-variant.sync="$store.state.vularApp.drawer.mini"
      :dark="$store.state.vularApp.drawer.dark"
      :light="$store.state.vularApp.drawer.light"
      :expand-on-hover = "$store.state.vularApp.drawer.expandOnHover"
      :color="$store.state.vularApp.drawer.color"
      :src="$store.state.vularApp.drawer.src"
    >
      <VularAppDrawer v-model="$store.state.vularApp.drawer"
        :logo = "$store.state.vularApp.logo"
      ></VularAppDrawer>


    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$store.state.vularApp.drawer.clipped"
      :color="$store.state.vularApp.appbar.color"
      :dark = "$store.state.vularApp.appbar.dark"
      :light = "$store.state.vularApp.appbar.light"
      :src = "$store.state.vularApp.appbar.src"
      :flat = "$store.state.vularApp.appbar.flat"
      app
      :shrink-on-scroll="$store.state.vularApp.appbar.shrinkOnScroll"
      :style="$store.state.vularApp.appbar.style"
    >
      <v-app-bar-nav-icon
        v-if="$store.state.vularApp.drawer.type !== 'permanent'"
        @click.stop="$store.state.vularApp.drawer.model = !$store.state.vularApp.drawer.model"
      />
      <img v-if="$store.state.vularApp.appbar.logoImage" :src="$store.state.vularApp.logo.src" style="height:36px;" :alt="$store.state.vularApp.logo.alt" />
      <v-toolbar-title v-if="$store.state.vularApp.appbar.logoText" class="ml-0 pl-3">
        <span class="hidden-sm-and-down">{{$store.state.vularApp.logo.title}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon medium>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon href="https://github.com/vularsoft/vular-admin" target="_blank">
        <v-icon medium>mdi-github</v-icon>
      </v-btn>
      <VularNotifications></VularNotifications>
      <VularAppbarProfile></VularAppbarProfile>
    </v-app-bar>

    <router-view/>
    <VularAppFab></VularAppFab>
    <v-footer
      :inset="$store.state.vularApp.footer.inset"
      :dark = "$store.state.vularApp.footer.dark"
      :light = "$store.state.vularApp.footer.light"
      :color = "$store.state.vularApp.footer.color"
      :src = "$store.state.vularApp.footer.src"
      app
    >
      <v-btn x-small fab dark falt absolute bottom left color="red" class="mb-4 ml-n4">
        <v-icon>mdi-bug</v-icon>
      </v-btn>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import VularAppDrawer from "./drawer/VularAppDrawer.vue"
  import VularAppbarProfile from "./VularAppbarProfile"
  import VularNotifications from "./VularNotifications"
  import VularAppFab from "./VularAppFab"
  export default {
    components: {
      VularAppDrawer,
      VularAppbarProfile,
      VularNotifications,
      VularAppFab
    },
    data: () => ({
    }),

    created(){
      console.log(this.$vuetify)
    },
  }
</script>