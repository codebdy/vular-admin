<template>
  <v-list color="transparent">
    <v-list-item-group color="primary">
      <v-list-item
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-folder-home-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="$t('media.root')"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-for="(item, i) in folders"
        :key="i"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-folder-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
  export default {
    name: "media-folder-list",
    components: {
    },
    props: {
      folders:{default:()=>{return []}},
    },

    data: () => ({
    }),

    methods: {
    }
  }
</script>
