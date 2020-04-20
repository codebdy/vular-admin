<template>
  <v-col
    class="d-flex flex-row align-end"
    cols="12"
  >
    <div class="image-area">
      <div class="media-folder"
        draggable='true'
        @dragstart="onDragStart($event)"
        @dragend="onDragEnd($event)"
      >
        <div class="media-folder-inner image">
          <v-icon size="30">mdi-folder-outline</v-icon>
        </div>
      </div>
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
  import MediaFolderCell from "./MediaFolderCell"
  export default {
    name: "media-folder-row",
    extends : MediaFolderCell,
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