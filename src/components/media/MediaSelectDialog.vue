<template>
  <v-card
    class="media-select-dialog"
    :color="$store.state.vularApp.content.card.color" 
  >
    <v-toolbar flat dark color="primary">
      <v-toolbar-title>{{$t('media.select-medias')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="onCancel">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <VularMediaWidget v-model="selectedMedias"></VularMediaWidget>
    <v-card-actions class="pa-5 media-select-dialog-actions">
      <v-spacer></v-spacer>
      <v-btn class="mr-5" outlined rounded @click="onCancel">{{$t('media.cancel')}}</v-btn>
      <v-btn color="primary" class="mr-5" rounded
        :disabled = "selectedMedias.length == 0"
        @click="onConfirm">{{$t('media.select')}}</v-btn>
      <span v-if="selectedMedias.length > 0">{{$t('media.selected-counts').replace('{0}', selectedMedias.length)}}</span>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>

  export default {
    name: "media-select-dialog",
    components: {
    },

    data: () => ({
      selectedMedias : [],
    }),
    computed:{

    },

    methods: {
      onCancel(){
        this.$emit('close')
        this.selectedMedias = []
      },

      onConfirm(){
        this.$emit('close')
        this.selectedMedias = []
      },
    },
  }
</script>
<style>
</style>
