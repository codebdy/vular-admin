<template>
  <v-img aspect-ratio="1" class="new-image-placeholder image" @click="selectDialog=true">
    <div class="add-icon"></div>
    <MediaSelectDialog @selectMedias = "onSelectMedias" v-model="selectDialog"></MediaSelectDialog>
  </v-img>
</template>

<script>
  import MediaSelectDialog from "./MediaSelectDialog"
  export default {
    components: {
      MediaSelectDialog
    },
    props: {
    },

    data: () => ({
      addMenu : false,
      selectDialog: false,
    }),

    methods: {
      onSelectMedias(medias){
        this.$emit('selectMedias', medias)
      },
    },

    watch:{
      selectDialog(val){
        if(val){
          this.addMenu = false
        }
      }
    }
  }
</script>

<style scoped>
  .new-image-placeholder{
    background: rgba(0,0,255, 0.05);
    padding:10px;
    cursor: pointer;
  }

  .new-image-placeholder:hover{
    background: rgba(0,0,255, 0.1);
  }

  .add-new-item{
    background: rgba(0,0,255, 0.05);
    cursor: pointer;
  }

  .add-new-item:hover{
    background: rgba(0,0,255, 0.1) !important;
  }

  .add-icon{
    width: 100%;
    height: 100%;
    border: rgba(0,0,255, 0.3) dashed 1px;
    position: relative;
  }

  .add-icon::before{
    content: "";
    position: absolute;
    height: 1px;
    width: 40px;
    border-top: rgba(0,0,255, 0.3) solid 0.1rem;
    top: 50%;
    left: calc(50% - 20px);
  }

  .add-icon::after{
    content: "";
    position: absolute;
    height: 40px;
    width: 1px;
    border-left: rgba(0,0,255, 0.3) solid 0.1rem;
    top: calc(50% - 20px);
    left: 50%;
  }
</style>
