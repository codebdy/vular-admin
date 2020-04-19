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
        v-for="(item, i) in items"
        :key="i"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-folder-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
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
    },

    data: () => ({
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }),

    methods: {
    }
  }
</script>
