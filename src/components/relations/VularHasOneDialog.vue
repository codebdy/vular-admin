<template>
    <v-dialog v-model="dialog" scrollable :max-width="width">
      <template v-slot:activator="{ on }">
        <div class="ma-2" v-on="on">
          <v-icon>{{icon}}</v-icon>
          <v-btn text color="primary">{{title}}</v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title>{{title}}</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="max-height: calc(100vh -300px)">
          <v-text-field
            label="Title"
          ></v-text-field>
          <v-textarea
            label="Description"
          ></v-textarea>
          <v-row>
            <v-col sm="6">
              <VularSingleImageInput></VularSingleImageInput>
            </v-col>
            <v-col sm="6">
              <v-text-field label="宽"></v-text-field>
              <v-text-field label="高"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-5 media-alt-dialog-actions">
          <v-spacer></v-spacer>
          <v-btn color="primary" class="mr-5" text rounded @click="dialog = false">{{$t('media.cancel')}}</v-btn>
          <v-btn color="primary" class="mr-5" rounded @click="dialog = false">{{$t('media.confirm')}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
  export default {
    name: "vular-has-one-dialog",
    components: {
    },
    props: {
      title:{default: '1 to 1 Dialog'},
      width:{default: "600px"},
      icon:{default : ''},
    },

    data: () => ({
      dialog:false,
    }),

    methods: {
    }
  }
</script>
