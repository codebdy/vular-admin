<template>
  <v-card
    class="pa-2"
    flat
    :color="$store.state.vularApp.content.card.color" 
    :style="$store.state.vularApp.content.card.style"
  >
    <v-toolbar flat color="transparent">
      <v-toolbar-title>
        {{$t('media.images')}} & {{$t('media.videos')}}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y top v-model="menu">
        <template v-slot:activator="{ on }">
          <v-btn icon color="primary" v-on="on">
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>
        <v-list class="px-2" :color="$store.state.vularApp.content.card.color">
          <v-dialog v-model="altDialog" scrollable tile max-width="600px">
            <template v-slot:activator="{ on }">
              <v-list-item link v-on="on">
                <v-list-item-icon>
                  <v-icon color="primary">mdi-text-recognition</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{$t('media.edit-alt')}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <AltDialog @close="altDialog = false"></AltDialog>
          </v-dialog>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="primary">mdi-delete-sweep-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{$t('media.remove-all')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text style="padding: 7px;">
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="4"
          xs="6"
          style="padding:10px;"
        >
          <v-img
              :src="`/images/pics/110-500x300.jpg`"
              :lazy-src="`/images/pics/110-500x300.jpg`"
              aspect-ratio="1"
              style="border-radius: 5px"
            >
          </v-img>
         
        </v-col>
        <v-col
          cols="12"
          sm="8"
          xs="6"
        >
          <v-row no-gutters>
            <v-col
              v-for="n in 8"
              :key="n"
              cols="12"
              sm="3"
              xs="4"
              style="padding:10px;"
            >
                <v-img
                  :src="`/images/pics/11${n+1}-500x300.jpg`"
                  :lazy-src="`/images/pics/11${n+1}-500x300.jpg`"
                  aspect-ratio="1"
                  style="border-radius: 5px"
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
            </v-col>

          </v-row>
        </v-col>
        <v-col
          class="d-flex child-flex"
          cols="12"
          sm="2"
          style="padding:10px;"
        >
          <v-menu offset-y top v-model="addMenu">
            <template v-slot:activator="{ on }">
              <v-img aspect-ratio="1" class="new-image-placeholder" v-on="on">
                <div class="add-icon"></div>
              </v-img>
            </template>
            <v-card flat class="d-flex flex-row pa-5" :color="$store.state.vularApp.content.card.color">
              <v-dialog v-model="selectDialog" scrollable tile max-width="calc(100vw - 100px)" >
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
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>
</template>

<script>
  import AltDialog from "./AltDialog"
  import MediaSelectDialog from "./MediaSelectDialog"
  export default {
    name: "vular-media-select",
    components: {
      AltDialog,
      MediaSelectDialog
    },
    props: {
      small: { default: false },
    },

    data: () => ({
      menu : false,
      addMenu : false,
      altDialog : false,
      selectDialog: false,

    }),

    methods: {
    },

    watch:{
      altDialog(val){
        if(val){
          this.menu = false
        }
      },

      selectDialog(val){
        if(val){
          this.addMenu = false
        }
      }
    }
  }
</script>

<style>
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
