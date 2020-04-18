<template>
  <v-dialog v-model="dialog" scrollable tile max-width="600px">
    <template v-slot:activator="{ on }">
      <v-list-item link v-on="on">
        <v-list-item-icon>
          <v-icon color="primary">mdi-text-recognition</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{$t('media.edit-alt')}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-card
      :color="$store.state.vularApp.content.card.color" 
    >
      <v-toolbar flat dark color="primary">
        <v-toolbar-title>{{$t('media.edit-alt')}}</v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text style="max-height: calc(100vh -300px)">
        
      </v-card-text>
      <v-card-actions class="pa-5 card-actions">
        <v-spacer></v-spacer>
        <v-btn color="primary" class="mr-5" text rounded @click="dialog = false">{{$t('media.cancel')}}</v-btn>
        <v-btn color="primary" class="mr-5" rounded @click="dialog = false">{{$t('media.confirm')}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "alt-dialog",

  data: () => ({
    dialog: false,
  }),

  methods: {
  }
}
</script>

<style>
  .card-actions{
    box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
  }
</style>
