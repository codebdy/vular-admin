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
      <v-card flat tile class="d-flex flex-column" color="transparent">
        <v-img
          :src="inputValue.src"
          :lazy-src="inputValue.lazySrc"
          aspect-ratio="1"
          class="image real-image"
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
        <v-card-text class="d-flex justify-center align-center image-text">
        {{inputValue.title}}
        </v-card-text>
      </v-card>
      <div v-if="hover" class="image-toolbar">
        <v-btn dark fab x-small class="image-button move-button" depressed>
          <v-icon size="16"  dark>mdi-arrow-all</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn dark fab x-small depressed class="image-button">
          <v-icon size="13"  dark>mdi-magnify</v-icon>
        </v-btn>
        <v-btn dark fab x-small depressed class="image-button ml-1">
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
    name: "media-cell",
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
