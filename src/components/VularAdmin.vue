<template>
  <v-app id="admin-app">
    <v-navigation-drawer
      v-model="drawer.model"
      :clipped="drawer.clipped"
      :floating="drawer.floating"
      :mini-variant="drawer.mini"
      :mini-variant-width = "drawer.miniVariantWidth"
      :permanent="drawer.type === 'permanent'"
      :temporary="drawer.type === 'temporary'"
      app
      overflow
      :mini-variant.sync="drawer.mini"
      :dark="drawer.dark"
      :light="drawer.light"
    >
      <VularAppDrawer v-model="drawer"
      ></VularAppDrawer>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="drawer.clipped"
      app
    >
      <v-app-bar-nav-icon
        v-if="drawer.type !== 'permanent'"
        @click.stop="drawer.model = !drawer.model"
      />
      <img v-if="appbar.showLogo" src="images/logo.png" :height="36" alt="Vular Amazing Framework" />
      <v-toolbar-title v-if="appbar.showLogo" class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Vular</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="10">
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <span>主题</span>
                    <v-switch
                      v-model="$vuetify.theme.dark"
                      primary
                      label="Dark"
                    />
                    <span>工具栏</span>
                    <v-switch
                      v-model="appbar.showLogo"
                      primary
                      label="显示LOGO"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <span>导航菜单</span>
                    <v-switch
                      v-model="drawer.dark"
                      primary
                      label="Dark"
                    />
                    <v-switch
                      v-model="drawer.light"
                      primary
                      label="Light"
                    />
                    <v-select
                      :items="drawers"
                      filled
                      label="类型"
                      v-model="drawer.type"
                    ></v-select>

                    <v-switch
                      v-model="drawer.showLogo"
                      label="显示LOGO"
                      primary
                    />
                    <v-switch
                      v-model="drawer.clipped"
                      label="Clipped"
                      primary
                    />
                    <v-switch
                      v-model="drawer.floating"
                      label="Floating"
                      primary
                    />
                    <v-switch
                      v-model="drawer.mini"
                      label="Mini"
                      primary
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <span>Footer</span>
                    <v-switch
                      v-model="footer.inset"
                      label="Inset"
                      primary
                    />
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn text>Cancel</v-btn>
                <v-btn
                  text
                  color="primary"
                >Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer
      :inset="footer.inset"
      app
    >
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import VularAppDrawer from "./VularAppDrawer.vue"
  export default {
    components: {
      VularAppDrawer
    },
    data: () => ({
      fontFamily:"",
      logo: {
        src: "images/logo.png",
        title:"Vular",
        alt: "An amazing framework",
      },
      drawer: {
        showLogo: true,
        color: "#1b1b28",
        logoColor: "#1a1a27",
        textColor:"",
        activeTextColor:"",
        subheaderColor:"",
        fontSize:"0.825rem",
        dark:false,
        light:false,
        logoDark:true,
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
        miniVariantWidth: 70,
      },
      appbar:{
        showLogo:false,
        dark:true,
      },
      footer: {
        inset: false,
      },
      drawers: [
        {
          'value':'default (no property)',
          'text':'Default (no property)'
        }, 
        {
          'value':'permanent',
          'text':'Permanent'
        }, 
        {
          'value':'temporary',
          'text':'Temporary'
        }, 
      ],
    }),
  }
</script>