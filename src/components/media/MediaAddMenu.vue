<template>
  <v-menu offset-y top v-model="addMenu">
    <template v-slot:activator="{ on }">
      <v-img aspect-ratio="1" class="new-image-placeholder image" v-on="on">
        <div class="add-icon"></div>
      </v-img>
    </template>
    <v-card flat class="d-flex flex-row pa-5" :color="$store.state.vularApp.content.card.color">
      <v-dialog v-model="selectDialog" persistent scrollable tile 
        max-width="calc(100vw - 100px)" 
        @selectMedias = "onSelectMedias"
      >
        <template v-slot:activator="{ on }">
          <v-card v-on="on" class="add-new-item mr-5 d-flex flex-column justify-center align-center" flat height="100" width="100" color="rgba(0,0,255, 0.05)">
            <v-icon class="ma-2" large color="rgba(0,20,255, 0.25)" >mdi-image-plus</v-icon>
            {{$t('media.images')}}
          </v-card>
        </template>
        <MediaSelectDialog @close="selectDialog = false"></MediaSelectDialog>
      </v-dialog>

      <v-divider vertical></v-divider>
      <v-card class="add-new-item ml-5 d-flex flex-column justify-center align-center" flat height="100" width="100"  color="rgba(0,0,255, 0.05)">
        <v-icon class="ma-2" large color="rgba(0,20,255, 0.25)">mdi-video-plus</v-icon>
        {{$t('media.videos')}}
      </v-card>
    </v-card>
  </v-menu>
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
