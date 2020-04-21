<template>
  <v-card
    class="mt-5"
    flat
    :color="$store.state.vularApp.content.card.color" 
    :style="$store.state.vularApp.content.card.style"
  >
    <v-toolbar flat color="transparent">
      <v-toolbar-title>{{title}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon
        v-if="collapsable"
        @click = "showBody = !showBody"
      >
        <v-icon v-if="showBody">mdi-chevron-up</v-icon>
        <v-icon v-else>mdi-chevron-down</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider v-if="showBody"></v-divider>
    <v-card-text v-if="showBody" :class="pa">
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
      title:{default: ''},
      collapsable:{default: true},
      pa:{default: ''},
    },

    data: () => ({
      showBody: true,
    }),

    methods: {
    }
  }
</script>
