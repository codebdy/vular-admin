<template>
  <v-hover
    v-slot:default="{ hover }"
  >
    <v-col
      class="d-flex image-grid-col"
      cols="4"
      sm="3"
      md="2"
      @dragover="onDragOver($event)"
      @dragleave="onDragLeave($event)"
      @drop="onDrop($event)"
    >
      <div class="media-folder"
        draggable='true'
        @dragstart="onDragStart($event)"
        @dragend="onDragEnd($event)"
      >
        <div class="media-folder-inner image">
          <v-icon size="60">mdi-folder-outline</v-icon>
        </div>
      </div>
      <v-card-text class="d-flex justify-center align-center image-text">
        <input v-model="inputValue.title" 
          v-show="inputValue.editing"
          @keyup.13 = "onStopEdit"
          @blur = "onStopEdit"
          ref="titleInput"
          class="media-title-input"
        />
        <span v-show="!inputValue.editing">
          {{inputValue.title}}
        </span>
      </v-card-text>
      <div v-if="hover" class="image-toolbar">
        <v-spacer></v-spacer>
        <v-btn dark fab x-small depressed class="image-button"
          @click.stop = "onEdit"
        >
          <v-icon size="13" dark>mdi-pencil-outline</v-icon>
        </v-btn>
        <v-btn dark fab x-small depressed class="image-button ml-1"
          @click.stop = "onRemove"
        >
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
      value:{default: ()=>{return {}}},
      draggedFolder: { default:null },
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
      onEdit(){
        this.$set(this.inputValue, 'editing', true)
        this.oldTitle = this.inputValue.title
        this.$refs.titleInput.focus()
      },

      onStopEdit(){
        this.$set(this.inputValue, 'editing', false)
        if(this.oldTitle !== this.inputValue.title){
          //@@@数据更改提交后台
          console.log('@@@数据更改提交后台,ID也要更新，应对新建情况')
        }
      },

      onRemove(){
        this.$emit('remove', this.inputValue)
      },

      onDragStart(){
        this.$emit('dragFolder', this.inputValue)
      },

      onDragEnd(){
        this.$emit('endDragFolder')
      },

      onDragOver(event){
        if(this.draggedFolder !== this.inputValue){
          event.preventDefault();
        }
      },

      onDragLeave(){

      },

      onDrop(){
        if(this.draggedFolder !== this.inputValue){
          this.$emit('changePosition', this.inputValue)
        }
      },
    }
  }
</script>

<style scoped>
  .medias-widget .media-folder{
    position: relative;
    padding-bottom: 100%;
  }

  .medias-widget .media-folder-inner{
    position: absolute;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border:rgba(0, 0, 255, 0.05) solid 1px;
    cursor: move;
  }

  .medias-widget .media-folder-inner:hover{
    background: rgba(0, 0, 255, 0.05);
    border:rgba(0, 0, 255, 0.1) solid 1px;
  }
  
</style>