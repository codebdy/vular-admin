<template>
  <v-col
    class="d-flex flex-row align-end"
    cols="12"
    @click="onClick"
  >
    <div class="image-area">
      <v-img
        :src="inputValue.thumbSrc"
        :lazy-src="inputValue.lazySrc"
        aspect-ratio="1"
        class="image real-image"
        :class = "inputValue.selected ? 'selected' :''"
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
        <div class="image-checkbar">
          <v-btn fab x-small depressed light color="white"
            class="check-button"
            v-if="inputValue.selected"
          >
            <v-icon x-small dark>mdi-check</v-icon>
          </v-btn>
        </div>
      </v-img>
    </div>
    <div class="ml-2 input-area">
      <input 
        v-model="inputValue.title"
        v-show="inputValue.editing"
        @keyup.13 = "onStopEdit"
        @blur = "onStopEdit"
        ref="titleInput"
        class="title-input"
        @click.stop=""
      />
      <span v-show="!inputValue.editing">
        {{inputValue.title}}
      </span>
    </div>
    <div class="image-toolbar">
      <v-btn icon
        @click.stop="onView"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon
        @click.stop = "onEdit"
      >
        <v-icon>mdi-pencil-outline</v-icon>
      </v-btn>
      <v-btn icon
        @click.stop = "onRemove"
      >
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>      
    </div>
  </v-col>
</template>

<script>
  import MediaCell from "./MediaCell"
  export default {
    name: "media-row",
    extends: MediaCell,
    components: {
    },
    props: {
    },

    data: () => ({
    }),

    computed:{
    },

    methods: {
    }
  }
</script>

<style scoped>
  .image-area{
    width:50px;
  }

  .input-area{
    flex:1;
  }

  .image-checkbar{
    position: absolute;
    bottom: 2px;
    right: 2px;
  }

  .image-checkbar .check-button{
    width:20px;
    height: 20px;
  }

  .title-input{
    width: 100%;
    outline: rgba(0,0,255,0.3) solid 2px; 
    padding: 5px 10px;
  }

  .image-toolbar{
    width: 150px; 
    display: flex; 
    flex-flow: row; 
    justify-content: flex-end; 
    align-items: center;
  }
</style>
