<template>
  <v-card
    class="pa-2 mt-5"
    flat
    style="height: 500px;"
    :color="$store.state.vularApp.content.card.color" 
    :style="$store.state.vularApp.content.card.style"

  >
    <v-toolbar flat color="transparent">
      <v-toolbar-title>基本信息</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text>
      <slot>No slot</slot>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: "vular-form-card",
    components: {
    },
    props: {
    },

    data: () => ({
    }),

    methods: {
    }
  }
</script>
