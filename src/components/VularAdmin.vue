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
      :expand-on-hover = "drawer.expandOnHover"
      :color="drawer.color"
      :src="drawer.src"
    >
      <VularAppDrawer v-model="drawer"
      ></VularAppDrawer>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="drawer.clipped"
      :color="appbar.color"
      :dark = "appbar.dark"
      :light = "appbar.light"
      :src = "appbar.src"
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

    <v-content style="background: red url('images/450.jpg');">
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="10">
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col>
                    ddd
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="pt-2">
                  <v-col
                    cols="12"
                    md="4"
                    class="px-12"
                  >
                    <b>主题</b>
                    <v-switch
                      v-model="$vuetify.theme.dark"
                      primary
                      label="Dark"
                    />
                    <v-text-field label="全局字体" 
                      v-model="fontFamily">
                    </v-text-field>
                    <b>Light主题配色</b>
                    <v-row>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.light.primary" 
                          label = "Primary"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.light.secondary" 
                          label = "Secondary"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.light.accent" 
                          label = "Accent"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                      <VularColorInput 
                        v-model="$vuetify.theme.themes.light.error" 
                        label = "Error"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                      <VularColorInput 
                        v-model="$vuetify.theme.themes.light.info" 
                        label = "Info"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                      <VularColorInput 
                        v-model="$vuetify.theme.themes.light.success" 
                        label = "Success"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                      <VularColorInput 
                        v-model="$vuetify.theme.themes.light.warning" 
                        label = "Warning"></VularColorInput>
                      </v-col>
                    </v-row>

                    <b>Dark主题配色</b>
                    <v-row>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.dark.primary" 
                          label = "Primary"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.dark.secondary" 
                          label = "Secondary"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.dark.accent" 
                          label = "Accent"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.dark.error" 
                          label = "Error"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.dark.info" 
                          label = "Info"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.dark.success" 
                          label = "Success"></VularColorInput>
                      </v-col>
                      <v-col cols="12" md="6">
                        <VularColorInput 
                          v-model="$vuetify.theme.themes.dark.warning" 
                          label = "Warning"></VularColorInput>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                    class="px-12"
                  >
                    <b>导航菜单</b>
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
                    <v-text-field label="字体" 
                      v-model="drawer.fontFamily">
                    </v-text-field>
                    <VularBackgrounInput v-model="drawer"></VularBackgrounInput>                    
                    <v-select
                      :items="drawers"
                      filled
                      label="类型"
                      v-model="drawer.type"
                    ></v-select>

                    <v-switch
                      v-model="drawer.clipped"
                      label="Clipped"
                      primary
                    />
                    <v-switch
                      v-model="drawer.floating"
                      label="浮动"
                      primary
                    />
                    <v-switch
                      v-model="drawer.mini"
                      label="迷你"
                      primary
                    />
                    <v-switch
                      v-model="drawer.expandOnHover"
                      label="悬停展开"
                      primary
                    />
                    <v-switch
                      v-model="drawer.showLogo"
                      label="显示LOGO"
                      primary
                    />
                    <span v-if="drawer.showLogo">导航Logo</span>
                    <v-switch
                      v-if="drawer.showLogo"
                      v-model="drawer.logo.dark"
                      primary
                      label="Dark"
                    />
                    <v-switch
                      v-if="drawer.showLogo"
                      v-model="drawer.logo.light"
                      primary
                      label="Light"
                    />
                    <VularBackgrounInput
                     v-if="drawer.showLogo"
                     v-model="drawer.logo"></VularBackgrounInput>                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                    class="px-12"
                  >
                    <b>工具栏</b>
                    <v-text-field label="字体" 
                      v-model="appbar.fontFamily">
                    </v-text-field>
                    <v-switch
                      v-model="appbar.showLogo"
                      primary
                      label="显示LOGO"
                    />
                    <v-switch
                      v-model="appbar.dark"
                      primary
                      label="Dark"
                    />
                    <v-switch
                      v-model="appbar.light"
                      primary
                      label="Light"
                    />
                    <VularBackgrounInput v-model="appbar"></VularBackgrounInput>
                    <b>页脚</b>
                    <v-switch
                      v-model="footer.inset"
                      label="Inset"
                      primary
                    />
                    <v-text-field label="字体" 
                      v-model="footer.fontFamily">
                    </v-text-field>

                    <b>内容区</b>
                  </v-col>
                </v-row>
              </v-card-text>
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
  import VularBackgrounInput from "./VularBackgrounInput"
  import VularColorInput from "./VularColorInput"
  export default {
    components: {
      VularAppDrawer,
      VularBackgrounInput,
      VularColorInput
    },
    data: () => ({
      fontFamily:"",
      logo: {
        src: "images/logo.png",
        title:"Vular",
        alt: "An amazing framework",
      },
      drawer: {
        fontFamily:"",
        showLogo: true,
        color: "#1b1b28",
        src:"",
        textColor:"",
        activeTextColor:"",
        subheaderColor:"",
        fontSize:"0.825rem",
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
          src:"",
        },
      },
      appbar:{
        fontFamily:"",
        showLogo: false,
        dark: false,
        light: false,
        color: "#FFFFFF",
        src: "",
      },
      footer: {
        fontFamily:"",
        inset: false,
      },
      content:{
        fontFamily:"",
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