<template>
  <v-fab-transition>
    <v-btn
      fab="fab"
      small
      dark="dark"
      fixed="fixed"
      bottom="bottom"
      right="right"
      color="primary"
      v-show="fab"
      @click="toTop"
      v-scroll="onScroll"
      style="opacity: 0.6;"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
  export default {
    name: "vular-app-fab",
    components: {
    },
    props: {
    },

    data: () => ({
      fab: false
    }),

    methods: {
      onScroll() {
        if (typeof window === "undefined") return

        const top = window.pageYOffset || document.documentElement.offsetTop || 0
        this.fab = top > 180
      },

      toTop() {
        this.$vuetify.goTo(0)
      }
    }
  }
</script>
