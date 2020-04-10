<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer
        v-model="primaryDrawer.model"
        :clipped="primaryDrawer.clipped"
        :floating="primaryDrawer.floating"
        :mini-variant.sync="primaryDrawer.mini"
        :permanent="primaryDrawer.type === 'permanent'"
        :temporary="primaryDrawer.type === 'temporary'"
        app
        overflow

      >
        <v-toolbar color="primary darken-1" dark>
          <img src="images/logo.png" :height="primaryDrawer.mini ? 26 : 36" alt="Vular Amazing Framework" />
          <v-toolbar-title class="ml-0 pl-3">
            <span class="hidden-sm-and-down">Vular</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon class="hidden-xs-only" 
          @click.stop="primaryDrawer.mini = !primaryDrawer.mini"
          >
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>dashboard</v-icon>
            </v-list-item-icon>

            <v-list-item-title>仪表盘</v-list-item-title>
          </v-list-item>

          <v-list-group
            prepend-icon="account_circle"
            value="true"
          >
            <template v-slot:activator>
              <v-list-item-title>Users</v-list-item-title>
            </template>

            <v-list-group
              no-action
              sub-group
              value="true"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Admin</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="(admin, i) in admins"
                :key="i"
                link
              >
                <v-list-item-title v-text="admin[0]"></v-list-item-title>
                <v-list-item-icon>
                  <v-icon v-text="admin[1]"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group
              sub-group
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Actions</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="(crud, i) in cruds"
                :key="i"
                @click=""
              >
                <v-list-item-title v-text="crud[0]"></v-list-item-title>
                <v-list-item-action>
                  <v-icon v-text="crud[1]"></v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list-group>
          </v-list-group>
          <v-list-group
            prepend-icon="account_circle"
            value="true"
          >
            <template v-slot:activator>
              <v-list-item-title>Users</v-list-item-title>
            </template>

            <v-list-group
              no-action
              sub-group
              value="true"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Admin</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="(admin, i) in admins"
                :key="i"
                link
              >
                <v-list-item-title v-text="admin[0]"></v-list-item-title>
                <v-list-item-icon>
                  <v-icon v-text="admin[1]"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group
              sub-group
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Actions</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="(crud, i) in cruds"
                :key="i"
                @click=""
              >
                <v-list-item-title v-text="crud[0]"></v-list-item-title>
                <v-list-item-action>
                  <v-icon v-text="crud[1]"></v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list-group>
          </v-list-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>settings</v-icon>
            </v-list-item-icon>

            <v-list-item-title>设置</v-list-item-title>
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
        <v-toolbar-title></v-toolbar-title>
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
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings'],
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete'],
      ],
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
