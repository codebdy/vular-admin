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
        <v-radio-group column>
          <v-radio label="Bahamas, The" value="bahamas"></v-radio>
          <v-radio label="Bahrain" value="bahrain"></v-radio>
          <v-radio label="Bangladesh" value="bangladesh"></v-radio>
          <v-radio label="Barbados" value="barbados"></v-radio>
          <v-radio label="Belarus" value="belarus"></v-radio>
          <v-radio label="Belgium" value="belgium"></v-radio>
          <v-radio label="Belize" value="belize"></v-radio>
          <v-radio label="Benin" value="benin"></v-radio>
          <v-radio label="Bhutan" value="bhutan"></v-radio>
          <v-radio label="Bolivia" value="bolivia"></v-radio>
          <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
          <v-radio label="Botswana" value="botswana"></v-radio>
          <v-radio label="Brazil" value="brazil"></v-radio>
          <v-radio label="Brunei" value="brunei"></v-radio>
          <v-radio label="Bulgaria" value="bulgaria"></v-radio>
          <v-radio label="Burkina Faso" value="burkina"></v-radio>
          <v-radio label="Burma" value="burma"></v-radio>
          <v-radio label="Burundi" value="burundi"></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-card-actions class="pa-5 card-actions">
        <v-btn color="primary" text rounded @click="dialog = false">{{$t('media.cancel')}}</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" rounded @click="dialog = false">{{$t('media.confirm')}}</v-btn>
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
