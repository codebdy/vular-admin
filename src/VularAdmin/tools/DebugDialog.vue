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
        <v-btn text @click="onClear" :disabled="$store.state.errors.length == 0">
          <v-icon>mdi-broom</v-icon>
          {{$t('debug.clear')}}
        </v-btn>
        <v-btn text href="https://github.com/vularsoft/vular-admin/issues" target="_blank">
          <v-icon medium class="mr-1">mdi-github</v-icon>
          {{$t('debug.report-bug')}}
        </v-btn>
      </v-toolbar>
      <v-list three-line subheader>
        <v-list-item
          v-for="(error, index) in $store.state.errors"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title><b>#{{index + 1}} </b>{{error.error.message}}</v-list-item-title>
            <div>
              <v-btn text small class="ml-n3"
                @click="onAction(error)"
              >
                Action:
                <v-icon 
                  v-if="error.showAction"
                  key="mdi-menu-down"
                >
                  mdi-menu-down</v-icon>
                <v-icon 
                  v-else
                  key="mdi-menu-right"
                >
                  mdi-menu-right
                </v-icon>
              </v-btn>
              <pre v-if="error.showAction">{{error.action}}</pre>
            </div>
            <div v-if="error.data">
                <v-btn text small class="ml-n3"
                  @click="onActionData(error)"
                >
                  Action Data:
                  <v-icon 
                    v-if="error.showActionData"
                    key="mdi-menu-down"
                  >mdi-menu-down</v-icon>
                  <v-icon 
                    v-else
                    key="mdi-menu-right"
                  >mdi-menu-right</v-icon>
                </v-btn>
              <pre v-if="error.showActionData">{{error.data}}</pre>
            </div>
            <div>
              <v-btn text small class="ml-n3"
                @click="onRequest(error)"
              >Request 
                <v-icon 
                  v-if="error.showRequest"
                  key="mdi-menu-down"
                >
                  mdi-menu-down
                </v-icon>
                <v-icon 
                  v-else
                  key="mdi-menu-right"
                >
                  mdi-menu-right
                </v-icon>
              </v-btn>
              <pre v-if="error.showRequest" style="color:green;">{{error.error.request}}</pre>
            </div>
            <div style="color:red;"><pre>{{error.error.stack}}</pre></div>
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
      onClear(){
        this.$store.commit('clearErrors')
      },

      onAction(error){
        this.$set(error, 'showAction', !error.showAction)
      },

      onActionData(error){
        this.$set(error, 'showActionData', !error.showActionData)
      },

      onRequest(error){
        this.$set(error, 'showRequest', !error.showRequest)
      },
    }
  }
</script>
