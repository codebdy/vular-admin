<template>
  <v-hover
    v-slot:default="{ hover }"
  >
    <v-col
      class="d-flex image-grid-col"
      cols="4"
      sm="3"
      md="2"
    >
      <div aspect-ratio="1" class="media-folder">
        <div class="media-folder-inner image">
          <v-icon size="60">mdi-folder-outline</v-icon>
        </div>
      </div>
      <v-card-text class="d-flex justify-center align-center image-text">{{inputValue.title}}</v-card-text>
      <div v-if="hover" class="image-toolbar">
        <v-btn dark fab x-small class="image-button move-button" depressed>
          <v-icon size="16"  dark>mdi-arrow-all</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn dark fab x-small depressed class="image-button">
          <v-icon size="13"  dark>mdi-pencil</v-icon>
        </v-btn>
        <v-btn dark fab x-small depressed class="image-button ml-1">
          <v-icon size="13"  dark>mdi-delete-outline</v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-hover>
</template>

<script>
  export default {
    name: "media-folder-cell",
    components: {
    },
    props: {
      value:{default: ()=>{return {}}}
    },

    data: () => ({
    }),

    computed:{
      inputValue: {
        get:function() {
          return this.value;
        },
        set:function(val) {
          this.$emit('input', val);
        },
      },
    },

    methods: {
    }
  }
</script>
