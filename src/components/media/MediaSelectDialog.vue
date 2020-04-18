<template>
  <v-card
    :color="$store.state.vularApp.content.card.color" 
  >
    <v-toolbar flat dark color="primary">
      <v-toolbar-title>{{$t('media.edit-alt')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="onCancel">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="media-alt-dialog-body">
      <v-subheader class="mt-5">{{$t('media.alt-tips')}}</v-subheader>


    </v-card-text>
    <v-card-actions class="pa-5 card-media-alt-dialog">
      <v-spacer></v-spacer>
      <v-btn color="primary" class="mr-5" text rounded @click="onCancel">{{$t('media.cancel')}}</v-btn>
      <v-btn color="primary" class="mr-5" rounded @click="onConfirm">{{$t('media.confirm')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "media-select-dialog",

    data: () => ({
    }),

    methods: {
      onCancel(){
        this.$emit('close')
      },

      onConfirm(){
        this.$emit('close')
      },
    }
  }
</script>
