<template>
  <v-dialog v-model="debug" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      <v-btn x-small fab dark falt absolute bottom left 
        class="mb-4 ml-n4" 
        :color="$store.state.errors.length > 0 ? 'red' : 'grey'" 
        v-on="on"
      >
        <v-icon>mdi-android-debug-bridge</v-icon>
      </v-btn>
    </template>
    <v-card dark>
      <v-toolbar dark>
        <v-btn icon dark @click="debug = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title class="mr-4">{{$t('debug.debug')}}</v-toolbar-title>
        <v-divider inset vertical>
          
        </v-divider>
        <v-subheader><v-icon color="primary">mdi-android-debug-bridge</v-icon> {{$t('debug.slogan')}}</v-subheader>
        <v-spacer></v-spacer>
        <v-btn text href="https://github.com/vularsoft/vular-admin/issues" target="_blank">
          <v-icon medium class="mr-1">mdi-github</v-icon>
          {{$t('debug.report-bug')}}
        </v-btn>
      </v-toolbar>
      <v-list three-line subheader>
        <v-subheader>调试界面</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Content filtering</v-list-item-title>
            <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Password</v-list-item-title>
            <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-card>
  </v-dialog>

</template>

<script>
  export default {
    name: "vular-debug",
    components: {
    },
    props: {
    },

    data: () => ({
      debug: false,
    }),

    methods: {
    }
  }
</script>
