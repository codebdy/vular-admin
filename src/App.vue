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
      <div style="width: 100%;height: 100%;display: flex;flex-flow: column;">
          <v-toolbar color="primary darken-1" style="flex: 0">
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

    <v-list style="flex: 1;overflow-y: auto; overflow-x:hidden;">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>dashboard</v-icon>
              </v-list-item-icon>

              <v-list-item-title>仪表盘</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-badge
                  color="pink"
                  dot
                  v-if="primaryDrawer.mini"
                >
                  <v-icon>mail</v-icon>
                </v-badge>
                <v-icon
                  v-else
                >mail</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                询盘

              </v-list-item-title>
              <div>
                <v-chip
                  color="pink"
                  dark
                >6</v-chip>
              </div>
            </v-list-item>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        no-action
      >

        <template v-slot:activator>
              <v-list-item-icon>
                <v-badge
                  color="pink"
                  dot
                  v-if="primaryDrawer.mini"
                >
                  <v-icon v-text="item.action"></v-icon>
                </v-badge>
                <v-icon
                  v-else
                v-text="item.action"></v-icon>
              </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>
              <v-list-item >
                <v-list-item-content>
                  <v-list-item-title>Test</v-list-item-title>
                </v-list-item-content>
                <div>
                  <v-chip
                    color="pink"
                  >6</v-chip>
                </div>
             </v-list-item>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          @click=""
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>settings</v-icon>
              </v-list-item-icon>

              <v-list-item-title>设置</v-list-item-title>
            </v-list-item>


    </v-list>
        
      </div>
      </v-navigation-drawer>

      <v-app-bar
        :clipped-left="primaryDrawer.clipped"
        color="primary"
        app

      >
        <v-app-bar-nav-icon
          v-if="primaryDrawer.type !== 'permanent'"
          @click.stop="primaryDrawer.model = !primaryDrawer.model"
        />
        <v-toolbar-title>
          Title          
        </v-toolbar-title>
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
        items: [
          {
            action: 'local_activity',
            title: 'Attractions',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'restaurant',
            title: 'Dining',
            active: true,
            items: [
              { title: 'Breakfast & brunch' },
              { title: 'New American' },
              { title: 'Sushi' },
            ],
          },
          {
            action: 'school',
            title: 'Education',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'directions_run',
            title: 'Family',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            action: 'healing',
            title: 'Health',
            items: [
              { title: 'List Item' },
            ],
          },
        ],
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

/*::-webkit-scrollbar {
  width: 0.3rem;
  height: 0.3rem;
}
::-webkit-scrollbar-track {
  border-radius: 0;
}
::-webkit-scrollbar-thumb {
  border-radius: 0;
  background: #535353;
  transition: all .2s;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #606060;
}

::-webkit-scrollbar-corner{
  background: #232323;
}*/

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
