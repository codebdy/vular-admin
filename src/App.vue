<template>
  <div id="app">
    <v-app>
      <vular-drawer
        v-model="primaryDrawer.model"
        :clipped="primaryDrawer.clipped"
        :floating="primaryDrawer.floating"
        :mini-variant.sync="primaryDrawer.mini"
        :permanent="primaryDrawer.type === 'permanent'"
        :temporary="primaryDrawer.type === 'temporary'"
        app
      >
      </vular-drawer>

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
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>cards-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>account_circle</v-icon>
        </v-btn>

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
