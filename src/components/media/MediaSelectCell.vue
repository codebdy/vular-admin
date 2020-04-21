<template>
  <v-hover
    v-slot:default="{ hover }"
  >
    <v-img
      :src="media.src"
      :lazy-src="media.lazySrc"
      class="select-image"
      aspect-ratio="1"
      draggable='true'
      @dragstart="onDragStart($event)"
      @dragend="onDragEnd($event)"
      @dragover="onDragOver($event)"
      @drop="onDrop($event)"
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
      <div v-if="hover" class="image-mask">
        <v-icon dark size="40">mdi-arrow-all</v-icon>
        <v-btn icon dark x-small class="close-button"
          @click = "onRemove"
        >
          <v-icon dark>mdi-close</v-icon>
        </v-btn>
      </div>
    </v-img>
  </v-hover>
</template>

<script>
  export default {
    name: "vular-app-fab",
    components: {
    },
    props: {
      media:{default:()=>{return {}}},
      draggedMedia: { default:null },
    },

    data: () => ({
    }),

    methods: {
      onDragStart(){
        this.$emit('dragMedia', this.media)
      },

      onDragEnd(){
        this.$emit('endDragMedia')
      },
      onDragOver(event){
        if(this.draggedMedia.id !== this.media.id){
          event.preventDefault();
        }
      },

      onDrop(){
        if(this.draggedMedia.id !== this.media.id){
          this.$emit('changePosition', this.media)
        }
      },

      onRemove(){
        this.$emit('remove', this.media)
      },
    }
  }
</script>

<style scoped>
  .select-image{
    position: relative;
    cursor: move;
  }

  .image-mask{
    position: absolute; 
    width:100%; 
    height: 100%;
    background: rgba(0,0,0, 0.7);
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
  }

  .close-button{
    position: absolute;
    top: 5px;
    right: 5px;
  }
</style>
