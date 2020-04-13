<template>
  <v-app id="admin-app" :style="{'font-family': vularApp.fontFamily}">
    <v-navigation-drawer
      v-model="vularApp.drawer.model"
      :clipped="vularApp.drawer.clipped"
      :floating="vularApp.drawer.floating"
      :mini-variant="vularApp.drawer.mini"
      :mini-variant-width = "vularApp.drawer.miniVariantWidth"
      :permanent="vularApp.drawer.type === 'permanent'"
      :temporary="vularApp.drawer.type === 'temporary'"
      app
      overflow
      :mini-variant.sync="vularApp.drawer.mini"
      :dark="vularApp.drawer.dark"
      :light="vularApp.drawer.light"
      :expand-on-hover = "vularApp.drawer.expandOnHover"
      :color="vularApp.drawer.color"
      :src="vularApp.drawer.src"
    >
      <VularAppDrawer v-model="vularApp.drawer"
        :logo = "vularApp.logo"
      ></VularAppDrawer>


    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="vularApp.drawer.clipped"
      :color="vularApp.appbar.color"
      :dark = "vularApp.appbar.dark"
      :light = "vularApp.appbar.light"
      :src = "vularApp.appbar.src"
      :flat = "vularApp.appbar.flat"
      app
      :style="vularApp.appbar.style"
    >
      <v-app-bar-nav-icon
        v-if="vularApp.drawer.type !== 'permanent'"
        @click.stop="vularApp.drawer.model = !vularApp.drawer.model"
      />
      <img v-if="vularApp.appbar.showLogo" :src="vularApp.logo.src" style="height:36px;" :alt="vularApp.logo.alt" />
      <v-toolbar-title v-if="vularApp.appbar.showLogo" class="ml-0 pl-3">
        <span class="hidden-sm-and-down">{{vularApp.logo.title}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon medium>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon class="fa-2x">fab fa-github</v-icon>
      </v-btn>
      <VularNotifications></VularNotifications>
      <VularAppbarProfile></VularAppbarProfile>
    </v-app-bar>

    <v-content 
      :style="{
        background: vularApp.content.color + ' url(' + vularApp.content.src +')',
        'font-family': vularApp.content.fontFamily
      }"
    >
      <v-container fluid>
        <h1><v-icon>mdi-compare</v-icon> 主题设置</h1>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <ThemeSettings v-model="vularApp"></ThemeSettings>
          </v-col>
        </v-row>
        </v-container>
     </v-content>

    <v-footer
      :inset="vularApp.footer.inset"
      :dark = "vularApp.footer.dark"
      :light = "vularApp.footer.light"
      :color = "vularApp.footer.color"
      :src = "vularApp.footer.src"
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
  import ThemeSettings from "./pages/ThemeSettings"
  export default {
    components: {
      VularAppDrawer,
      VularAppbarProfile,
      VularNotifications,
      ThemeSettings,
    },
    data: () => ({
      vularApp:{
        fontFamily:"Microsoft YaHei",
        logo: {
          src: "images/logo.png",
          title:"Vular",
          alt: "An amazing framework",
        },
        drawer: {
          showLogo: true,
          color: "#1b1b28",
          src:"",
          dark:true,
          light:false,
          model: null,
          type: 'default (no property)',
          clipped: false,
          floating: false,
          mini: false,
          miniVariantWidth: 70,
          expandOnHover:false,
          logo:{
            color: "#1a1a27",
            dark: false,
            flat: true,
            src:"",
            style:"border-bottom:#0e0e18 solid 1px;"
          },
          fontSize: "0.825rem",
        },
        appbar:{
          showLogo: false,
          dark: false,
          light: false,
          color: "#f4f5fa",
          src: "",
          flat:true,
          style:"border-bottom:#dbdfef solid 1px;"
        },
        footer: {
          inset: true,
          color:"",
          dark:false,
          light:false,
          src:"",
        },
        content:{
          fontFamily:"",
          color: "#ecebf2",
          src: "",
          flat: true,
          cardColor:"#f4f5fa",
        },
      },
    }),
  }
</script>