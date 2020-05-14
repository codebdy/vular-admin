<template>
  <v-dialog
    v-model="$store.state.showError"
    persistent
    width="400"
  >
    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        <v-icon color="red" class="ml-n3 mr-2" size="34">mdi-close-circle</v-icon>
        {{$t('base.error')}}
      </v-card-title>

      <v-card-text class="mt-4">
        {{$store.state.errorMsg}}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          dark
          rounded
          class="mr-5"
          @click="onConfirm"
        >
          {{$t('base.confirm')}}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>
  export default {
    name: "ErrorDialog",
    components: {
    },
    props: {
    },

    data: () => ({
      dialog:true,
    }),

    methods: {
      onConfirm(){
        this.$store.commit('hideError')
      }
    }
  }
</script>
