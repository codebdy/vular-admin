<template>
  <v-card
    class="pa-2"
    flat
    :color="$store.state.vularApp.content.card.color" 
    :style="$store.state.vularApp.content.card.style"
  >
    <v-toolbar flat color="transparent">
      <v-toolbar-title>
        {{$t('media.images')}} & {{$t('media.videos')}}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y top>
        <template v-slot:activator="{ on }">
          <v-btn icon color="primary" v-on="on">
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>
        <v-list class="px-2" :color="$store.state.vularApp.content.card.color">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="primary">mdi-text-recognition</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{$t('media.edit-alt')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="primary">mdi-delete-sweep-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{$t('media.remove-all')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text>
      <v-row no-gutters>
        <v-col
          cols="12"
          md="4"
          xs="6"

          style="padding:10px;"
        >
          <v-img
              :src="`https://picsum.photos/500/300?image=${20 * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${20 * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
            >
          </v-img>
         
        </v-col>
        <v-col
          cols="12"
          md="8"
          xs="6"
        >
          <v-row no-gutters>
            <v-col
              v-for="n in 8"
              :key="n"
              cols="12"
              md="3"
              style="padding:10px;"
            >
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
            </v-col>

          </v-row>
        </v-col>
        <v-col
          v-for="n in 10"
          :key="n"
          class="d-flex child-flex"
          cols="12"
          md="2"
          style="padding:10px;"
        >
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>
</template>

<script>
import AltDialog from "./AltDialog.vue"
export default {
  name: "vular-media-select",
  components: {
  },

  data: () => ({
  }),

  methods: {
  }
}
</script>
