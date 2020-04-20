<template>
  <v-card
    class="pa-2 media-select"
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
          sm="4"
          class="image-col"
          v-if="feathureMedia"
        >
          <MediaSelectCell :media="feathureMedia"></MediaSelectCell>
        </v-col>
        <v-col
          v-if="hasFeathureRow"
          cols="12"
          :sm="8"
        >
          <v-row no-gutters>
            <v-col
              v-for="(media,index) in feachureRightMedias"
              :key="media.src"
              sm="3"
              class="image-col"
            >
              <MediaSelectCell :media="media"></MediaSelectCell>
            </v-col>
            <v-col
              v-if="feachureRightMedias.length < 8"
              sm="3"
              class="image-col"
            >
              <MediaAddMenu @selectMedias= "onSelectMedias"></MediaAddMenu>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          class="image-col"
          v-for="(media,index) in secondRowMedias"
          :key="media.src"
          :cols="cols ? cols : 4"
          :sm="cols ? cols : 2"
        >
          <MediaSelectCell :media="media"></MediaSelectCell>          
        </v-col>
        <v-col
          v-if="feachureRightMedias.length == 8 || !hasFeathureRow"
          class="d-flex child-flex image-col"
          :cols="cols ? cols : 4"
          :sm="cols ? cols : 2"
        >
          <MediaAddMenu @selectMedias= "onSelectMedias"></MediaAddMenu>
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>
</template>

<script>
  import AltDialog from "./AltDialog"
  import MediaAddMenu from "./MediaAddMenu"
  import MediaSelectCell from "./MediaSelectCell"
  export default {
    name: "vular-media-select",
    components: {
      AltDialog,
      MediaAddMenu,
      MediaSelectCell
    },
    props: {
      small: { default: false },
      cols:{ default : ''/*"6"*/ },
    },

    data: () => ({
      menu : false,
      altDialog : false,
      medias:[
        {
          id : 1,
          type : "image",
          title : "图片1",
          src : "/images/pics/111-500x300.jpg",
          thumbSrc : '/images/pics/111-500x300.jpg',
          lazySrc : "/images/lazy-pics/111-500x300.jpg",
        },
        {
          id : 999,
          type : "image",
          title : "图片X",
          src : "/images/pics/110-500x300.jpg",
          thumbSrc : '/images/pics/110-500x300.jpg',
          lazySrc : "/images/lazy-pics/110-500x300.jpg",
          belongsTo : 1,
        },
        {
          id : 2,
          type : "image",
          title : "图片2",
          src : "/images/pics/112-500x300.jpg",
          thumbSrc : '/images/pics/112-500x300.jpg',
          lazySrc : "/images/lazy-pics/112-500x300.jpg",
        },
        {
          id : 3,
          type : "image",
          title : "图片3",
          src : "/images/pics/113-500x300.jpg",
          thumbSrc : '/images/pics/113-500x300.jpg',
          lazySrc : "/images/lazy-pics/113-500x300.jpg",
        },
        {
          id : 4,
          type : "image",
          title : "图片4",
          src : "/images/pics/114-500x300.jpg",
          thumbSrc : '/images/pics/114-500x300.jpg',
          lazySrc : "/images/lazy-pics/114-500x300.jpg",
        },
        {
          id : 5,
          type : "image",
          title : "图片5",
          src : "/images/pics/115-500x300.jpg",
          thumbSrc : '/images/pics/115-500x300.jpg',
          lazySrc : "/images/lazy-pics/115-500x300.jpg",
        },
        {
          id : 6,
          type : "image",
          title : "图片6",
          src : "/images/pics/116-500x300.jpg",
          thumbSrc : '/images/pics/116-500x300.jpg',
          lazySrc : "/images/lazy-pics/116-500x300.jpg",
        },
      ],
    }),

    computed:{
      hasFeathureRow(){
        return !this.cols && !this.$vuetify.breakpoint.xs
      },

      feathureMedia(){
        if(this.medias.length > 0 && this.hasFeathureRow){
          return this.medias[0]
        }
      },

      feachureRightMedias(){
        let rightMedias = []
        if(!this.feathureMedia){
          return rightMedias
        }

        let counts = this.medias.length >= 9 ? 9 : this.medias.length

        for(var i = 1; i < counts; i ++){
          rightMedias.push(this.medias[i])
        }

        return rightMedias
      },

      secondRowMedias(){
        let rowMedias = []
        let startIndex = 0
        if(this.hasFeathureRow){
          if(this.medias.length <= 9){
            return rowMedias
          }

          startIndex = 9
        }

        for(startIndex; startIndex < this.medias.length; startIndex ++){
          rowMedias.push(this.medias[startIndex])
        }

        return rowMedias
      }
    },

    methods: {
      onSelectMedias(medias){

      },
    },

    watch:{
      altDialog(val){
        if(val){
          this.menu = false
        }
      },
    }
  }
</script>

<style>
  .media-select .image-col{
    padding: 10px;
  }

  .media-select .image-col .image{
    border-radius: 5px;
  }

</style>
