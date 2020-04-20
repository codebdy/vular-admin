<template>
  <v-img
    :src="media.src"
    :lazy-src="media.lazySrc"
    class="image"
    aspect-ratio="1"
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
</template>

<script>
  export default {
    name: "vular-app-fab",
    components: {
    },
    props: {
      media:{default:()=>{return {}}}
    },

    data: () => ({
    }),

    methods: {
    }
  }
</script>
