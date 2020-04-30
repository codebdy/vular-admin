<template>
  <v-card
    class="mt-5 media-select"
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
          :cols="colWidth ? colWidth : 4"
          :sm="colWidth ? colWidth : 2"
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
          :cols="colWidth ? colWidth : 4"
          :sm="colWidth ? colWidth : 2"
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
    name: "vular-media-select-card",
    components: {
      AltDialog,
      MediaAddCell,
      MediaSelectCell
    },
    props: {
      small: { default: false },
      cols:{ default : ''/*"6"*/ },
      single: {default : false},
      value:{default: ()=>{return []}},
      field:{default:''},
    },

    data: () => ({
      menu : false,
      altDialog : false,
      draggedMedia : null,
      colWidth:'',
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

      hasFeathureRow(){
        return !this.cols && !this.$vuetify.breakpoint.xs
      },

      feathureMedia(){
        if(this.inputValue[this.field].length > 0 && this.hasFeathureRow){
          return this.inputValue[this.field][0]
        }
      },

      feachureRightMedias(){
        let rightMedias = []
        if(!this.feathureMedia){
          return rightMedias
        }

        let counts = this.inputValue[this.field].length >= 9 ? 9 : this.inputValue[this.field].length

        for(var i = 1; i < counts; i ++){
          rightMedias.push(this.inputValue[this.field][i])
        }

        return rightMedias
      },

      secondRowMedias(){
        let rowMedias = []
        let startIndex = 0
        if(this.hasFeathureRow){
          if(this.inputValue[this.field].length <= 9){
            return rowMedias
          }

          startIndex = 9
        }

        for(startIndex; startIndex < this.inputValue[this.field].length; startIndex ++){
          rowMedias.push(this.inputValue[this.field][startIndex])
        }

        return rowMedias
      }
    },

    mounted(){
      if(this.cols){
        this.colWidth = parseInt(12/this.cols)
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
        for(var i=0; i<this.inputValue[this.field].length; i++)
        {
          if(this.inputValue[this.field][i].id == this.draggedMedia.id){
            this.$set(this.inputValue[this.field], i, media)
          } 
          else if(this.inputValue[this.field][i].id == media.id){
            this.$set(this.inputValue[this.field], i, this.draggedMedia)
          } 
        }
      },

      onRemove(media){
        remove(media, this.inputValue[this.field])
      },

      addMedia(media){
        if(!this.ifContains(media)){
          this.inputValue[this.field].push(media)
        }
      },

      ifContains(media){
        for(var i = 0; i < this.inputValue[this.field].length; i++){
          if(this.inputValue[this.field][i].id == media.id){
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
