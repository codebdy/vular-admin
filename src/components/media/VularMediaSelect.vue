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
          <MediaSelectCell 
            :media="feathureMedia"
            :draggedMedia = "draggedMedia"
            @dragMedia="onDragMedia"
            @endDragMedia = "onEndDragMedia"
            @changePosition = "onChangePosition"
            @remove = "onRemove"
          ></MediaSelectCell>
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
              <MediaSelectCell 
                :media="media" 
                :draggedMedia = "draggedMedia"
                @dragMedia="onDragMedia"
                @endDragMedia = "onEndDragMedia"
                @changePosition = "onChangePosition"
                @remove = "onRemove"
              ></MediaSelectCell>
            </v-col>
            <v-col
              v-if="feachureRightMedias.length < 8"
              sm="3"
              class="image-col"
            >
              <MediaAddCell @selectMedias= "onSelectMedias"></MediaAddCell>
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
          <MediaSelectCell 
            :media="media"
            :draggedMedia = "draggedMedia"
            @dragMedia="onDragMedia"
            @endDragMedia = "onEndDragMedia"
            @changePosition = "onChangePosition"
            @remove = "onRemove"
          ></MediaSelectCell>          
        </v-col>
        <v-col
          v-if="feachureRightMedias.length == 8 || !hasFeathureRow"
          class="d-flex child-flex image-col"
          :cols="cols ? cols : 4"
          :sm="cols ? cols : 2"
        >
          <MediaAddCell @selectMedias= "onSelectMedias"></MediaAddCell>
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>
</template>

<script>
  import AltDialog from "./AltDialog"
  import MediaAddCell from "./MediaAddCell"
  import MediaSelectCell from "./MediaSelectCell"
  import {remove} from "../../basic/vular-array"

  export default {
    name: "vular-media-select",
    components: {
      AltDialog,
      MediaAddCell,
      MediaSelectCell
    },
    props: {
      small: { default: false },
      cols:{ default : ''/*"6"*/ },
      single: {default : false},
    },

    data: () => ({
      menu : false,
      altDialog : false,
      draggedMedia : null,
      medias:[
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
        medias.forEach(media=>{
          this.addMedia(media)
        })
      },

      onDragMedia(media){
        this.draggedMedia = media
      },

      onEndDragMedia(){
        this.draggedMedia = null
      },

      onChangePosition(media){
        for(var i=0; i<this.medias.length; i++)
        {
          if(this.medias[i].id == this.draggedMedia.id){
            this.$set(this.medias, i, media)
          } 
          else if(this.medias[i].id == media.id){
            this.$set(this.medias, i, this.draggedMedia)
          } 
        }
      },

      onRemove(media){
        remove(media, this.medias)
      },

      addMedia(media){
        if(!this.ifContains(media)){
          this.medias.push(media)
        }
      },

      ifContains(media){
        for(var i = 0; i < this.medias.length; i++){
          if(this.medias[i].id == media.id){
            return true
          }
        }

        return false
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
