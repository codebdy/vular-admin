<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer
        v-model="primaryDrawer.model"
        :clipped="primaryDrawer.clipped"
        :floating="primaryDrawer.floating"
        :mini-variant="primaryDrawer.mini"
        :permanent="primaryDrawer.type === 'permanent'"
        :temporary="primaryDrawer.type === 'temporary'"
        app
        overflow
      >
        <v-toolbar color="primary darken-1" dark>
          <img src="images/logo.png" height="36" alt="Vular Amazing Framework" />
          <v-toolbar-title class="ml-0 pl-3">
            <span class="hidden-sm-and-down">Vue Material</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon class="hidden-xs-only" >
            <v-icon>chevron_right</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list dense>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>

      <v-app-bar
        :clipped-left="primaryDrawer.clipped"
        color="primary"
        dark
        app
      >
        <v-app-bar-nav-icon
          v-if="primaryDrawer.type !== 'permanent'"
          @click.stop="primaryDrawer.model = !primaryDrawer.model"
        />
        <v-toolbar-title>Vuetify</v-toolbar-title>
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
                      md="6"
                    >
                      <span>Scheme</span>
                      <v-switch
                        v-model="$vuetify.theme.dark"
                        primary
                        label="Dark"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <span>Drawer</span>
                      <v-radio-group
                        v-model="primaryDrawer.type"
                        column
                      >
                        <v-radio
                          v-for="drawer in drawers"
                          :key="drawer"
                          :label="drawer"
                          :value="drawer.toLowerCase()"
                          primary
                        />
                      </v-radio-group>
                      <v-switch
                        v-model="primaryDrawer.clipped"
                        label="Clipped"
                        primary
                      />
                      <v-switch
                        v-model="primaryDrawer.floating"
                        label="Floating"
                        primary
                      />
                      <v-switch
                        v-model="primaryDrawer.mini"
                        label="Mini"
                        primary
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
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
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
      },
      footer: {
        inset: false,
      },
    }),
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
