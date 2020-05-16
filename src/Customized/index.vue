<template>
  <v-app>
      <v-app-bar
        app
        color="#1B1B28"
        dark
        clipped-left
        clipped-right
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(27,27,40,.7)"
          ></v-img>
        </template>

        <v-btn icon
          :to="'/admin/dashboard'"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-toolbar-title>Vular定制</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon href="https://github.com/vularsoft/vular-admin">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <VularAppbarAccount :user="{
            avatar:'/images/100.jpg',
          }"
        />
        <v-app-bar-nav-icon
          v-if="!$store.state.customizedApp.modulesDrawer"
          @click="showDrawer"
        />
      </v-app-bar>

      <v-navigation-drawer 
        class="pa-0" app clipped permanent
        :mini-variant="true"
        dark
        color="#1B1B28"
      >
        <div style="height: 100%; display: flex; flex-flow: column; justify-content: space-between;">
          <v-list color= "transparent" dark class="pa-0">
            <v-list-item color="primary" :to="{name:'customized-modules'}">
              <v-list-item-icon>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on">mdi-square-edit-outline</v-icon>
                  </template>
                  <span>模块</span>
                </v-tooltip>              
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item color="primary" :to="{name:'customized-menus'}">
              <v-list-item-icon>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on">mdi-share-variant</v-icon>
                  </template>
                  <span>菜单</span>
                </v-tooltip>              
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>菜单</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item color="primary" :to="{name:'customized-themes'}">
              <v-list-item-icon>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on">mdi-layers-outline</v-icon>
                  </template>
                  <span>模板</span>
                </v-tooltip>              
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>模板</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            
          </v-list>
          <div>
            <v-list-item color="primary" :to="{name:'customized-settings'}">
              <v-list-item-icon>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on">mdi-cog-outline</v-icon>
                  </template>
                  <span>设置</span>
                </v-tooltip>              
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>设置</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item color="primary" link>
              <v-list-item-icon>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-icon color="red" v-on="on">mdi-android-debug-bridge</v-icon>
                  </template>
                  <span>调试</span>
                </v-tooltip>              
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>调试</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            
          </div>
        </div>
    </v-navigation-drawer>

      <v-content 
        :style="{
          background: $store.state.vularApp.content.color,
          'font-family': $store.state.vularApp.content.fontFamily
        }"
      >
        
        <router-view/>
      </v-content>
  </v-app>
</template>

<script>
  export default {
    name: "vular-customized",
    components: {
    },
    props: {
    },

    data: () => ({
    }),
    created(){
      console.log(this.$vuetify)
    },

    methods: {
      showDrawer(){
        this.$store.commit('showCustuomizedModulesDrawer')
      }
    }
  }
</script>
