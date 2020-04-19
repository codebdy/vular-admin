<template>
  <v-card
    class="media-select-dialog"
    :color="$store.state.vularApp.content.card.color" 
  >
    <v-toolbar flat dark color="primary">
      <v-toolbar-title>{{$t('media.select-images')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="onCancel">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0 d-flex flex-row media-select-dialog-body ">
      <div class="slect-left-area">
        <div class="small-toolbar" color="transparent">
          <v-btn icon>
            <v-icon>mdi-folder-home-outline</v-icon>
          </v-btn>
          <v-icon class="mr-2">mdi-chevron-right</v-icon>          
          <div>产品</div>
          <div 
            :style="{width: searchboxWidth + 'px'}"
            class="list-search-box ml-5"
          >
            <v-text-field
              hide-details
              append-icon = "mdi-magnify"
              class = "mt-n1 pa-0"
              @focus = "searchboxFocused = true"
              @blur = "searchboxFocused = false"
            ></v-text-field>
          </div>
          <v-spacer></v-spacer>
          <v-btn icon v-if="selectedMedias.length == 0">
            <v-icon size="21">mdi-folder-plus-outline</v-icon>
          </v-btn>
          <v-divider vertical class="mx-3" v-if="selectedMedias.length == 0"></v-divider>
          <div v-if="!isSmall && selectedMedias.length == 0">
            <v-btn icon >
              <v-icon :size="toolIconSize">mdi-filter-outline</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon :size="toolIconSize">mdi-sort-ascending</v-icon>
            </v-btn>
            <v-btn icon 
              v-if="!isList"
              @click="isList = !isList"
            >
              <v-icon size="21">mdi-view-grid-outline</v-icon>
            </v-btn>
            <v-btn icon  
              v-else
              @click="isList = !isList"
            >
              <v-icon :size="toolIconSize">mdi-format-list-checkbox</v-icon>
            </v-btn>
          </div>
          <div v-if="selectedMedias.length > 0">
            <v-btn icon color="primary">
              <v-icon :size="toolIconSize">mdi-broom</v-icon>
            </v-btn>
            <v-btn icon color="primary">
              <v-icon :size="toolIconSize">mdi-folder-move-outline</v-icon>
            </v-btn>
            <v-btn icon color="primary">
              <v-icon :size="toolIconSize">mdi-delete-sweep-outline</v-icon>
            </v-btn>
          </div>
          <v-menu offset-y v-if="isSmall && selectedMedias.length == 0">
            <template v-slot:activator="{ on }">
              <v-btn icon
                v-on="on"
              >
                <v-icon :size="toolIconSize">mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-card :color="$store.state.vularApp.content.card.color" style="flex: 1; overflow: auto; max-height: calc(100vh - 50px);">
              <v-subheader>过滤</v-subheader>
              <MediaFolderList></MediaFolderList>
              <v-subheader>排序</v-subheader>
              <MediaFolderList></MediaFolderList>
              <v-divider></v-divider>
              <v-subheader>文件夹</v-subheader>
              <MediaFolderList></MediaFolderList>
            </v-card>
          </v-menu>
        </div>
        <v-divider></v-divider>
        <v-card-text style="flex:1; overflow-y: auto;">
          <v-row>
            <MediaFolderCell
              v-for = "(folder, index) in folders"
              :key = "folder.title"
              v-model="folders[index]"
            >
            </MediaFolderCell>
            <MediaCell
              v-for = "(media, index) in medias"
              :key = "media.src"
              v-model="medias[index]"
              @select = "onSelect"
              @unselect = "onUnselect"
            >
            </MediaCell>
          </v-row>
        </v-card-text>
      </div>
      <v-divider vertical></v-divider>
      <div class="flex-column right-column"
        v-if="!isSmall"
        :style="{background: $store.state.vularApp.content.color}"
      >
        <div class="d-flex justify-center align-center upload-button-area">
          <v-btn color="primary" rounded >
            <v-icon class="mr-3">mdi-cloud-upload-outline</v-icon> {{$t("media.upload-files")}}
          </v-btn>
        </div>
        <div style="flex: 1; overflow-y: auto; padding:15px 15px;">
          <MediaFolderList></MediaFolderList>
        </div>
      </div>
    </v-card-text>
    <v-card-actions class="pa-5 media-select-dialog-actions">
      <v-spacer></v-spacer>
      <v-btn class="mr-5" outlined rounded @click="onCancel">{{$t('media.cancel')}}</v-btn>
      <v-btn color="primary" class="mr-5" rounded @click="onConfirm">{{$t('media.select')}}</v-btn>
      <span v-if="selectedMedias.length > 0">已选中 {{selectedMedias.length}} 个</span>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
  import {add, remove} from "../../basic/vular-array"
  import MediaFolderList from "./MediaFolderList"
  import MediaFolderCell from "./MediaFolderCell"
  import MediaCell from "./MediaCell"

  export default {
    name: "media-select-dialog",
    components: {
      MediaFolderList,
      MediaFolderCell,
      MediaCell,
    },

    data: () => ({
      searchboxFocused : false,
      isList: false,
      toolIconSize:21,
      folders:[
        {
          id : 1,
          title : "产品照片",
          type : 'folder',
        },
        {
          id : 2,
          title : "产品图纸",
          type : 'folder',
        },
        {
          id : 3,
          title : "文章照片",
          type : 'folder',
        }
      ],

      medias:[
        {
          id : 999,
          type : "image",
          title : "图片X",
          src : "/images/pics/110-500x300.jpg",
          lazySrc : "/images/lazy-pics/110-500x300.jpg",
        },
        {
          id : 1,
          type : "image",
          title : "图片1",
          src : "/images/pics/111-500x300.jpg",
          lazySrc : "/images/lazy-pics/111-500x300.jpg",
        },
        {
          id : 2,
          type : "image",
          title : "图片2",
          src : "/images/pics/112-500x300.jpg",
          lazySrc : "/images/lazy-pics/112-500x300.jpg",
        },
        {
          id : 3,
          type : "image",
          title : "图片3",
          src : "/images/pics/113-500x300.jpg",
          lazySrc : "/images/lazy-pics/113-500x300.jpg",
        },
        {
          id : 4,
          type : "image",
          title : "图片4",
          src : "/images/pics/114-500x300.jpg",
          lazySrc : "/images/lazy-pics/114-500x300.jpg",
        },
        {
          id : 5,
          type : "image",
          title : "图片5",
          src : "/images/pics/115-500x300.jpg",
          lazySrc : "/images/lazy-pics/115-500x300.jpg",
        },
        {
          id : 6,
          type : "image",
          title : "图片6",
          src : "/images/pics/116-500x300.jpg",
          lazySrc : "/images/lazy-pics/116-500x300.jpg",
        },
        {
          id : 7,
          type : "image",
          title : "图片7",
          src : "/images/pics/117-500x300.jpg",
          lazySrc : "/images/lazy-pics/117-500x300.jpg",
        },
        {
          id : 8,
          type : "image",
          title : "图片8",
          src : "/images/pics/118-500x300.jpg",
          lazySrc : "/images/lazy-pics/118-500x300.jpg",
        },
        {
          id : 9,
          type : "image",
          title : "图片9",
          src : "/images/pics/119-500x300.jpg",
          lazySrc : "/images/lazy-pics/119-500x300.jpg",
        },
        {
          id : 10,
          type : "image",
          title : "图片10",
          src : "/images/pics/120-500x300.jpg",
          lazySrc : "/images/lazy-pics/120-500x300.jpg",
        },
        {
          id : 11,
          type : "image",
          title : "图片11",
          src : "/images/pics/121-500x300.jpg",
          lazySrc : "/images/lazy-pics/121-500x300.jpg",
        },
      ],

      selectedMedias: [],
    }),
    computed:{
      isSmall(){
        return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.md
      },

      searchboxWidth(){
        if(!this.searchboxFocused){
          if(this.isSmall){
            return this.$vuetify.breakpoint.sm ? 150 : 100
          }
          return 150
        }

        if(this.searchboxFocused){
          if(this.isSmall){
            return this.$vuetify.breakpoint.sm ? 200 : 150
          }
          return 350
        }
      },

    },

    methods: {
      onSelect(media){
        console.log('onSelect')
        add(media, this.selectedMedias)
      },
      onUnselect(media){
        remove(media, this.selectedMedias)
      },

      onCancel(){
        this.$emit('close')
      },

      onConfirm(){
        this.$emit('close')
      },
    }
  }
</script>
<style>
  .media-select-dialog .slect-left-area{
    flex:1; display: flex;flex-flow: column;
  }

  .media-select-dialog .small-toolbar{
    display: flex;
    flex-flow: row; 
    align-items: center; 
    height:60px; 
    padding:20px 15px;
  }

  .media-select-dialog .upload-button-area{
    height: 70px;
  }

  .media-select-dialog  .list-search-box{
    transition: width 0.3s;
  }

  .media-select-dialog  .right-column{
    width: 250px;
  }

  .media-select-dialog-body{
    height: calc(100vh - 0px);
  }
  .media-select-dialog-actions{
    box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
    height: 50px;
  }

  .media-select-dialog .image{
    border-radius: 5px !important;
  }

  .media-select-dialog .image-grid-col{
    display: flex;
    flex-flow: column;
    position: relative;
    cursor: pointer;
  }

  .image-grid-col .image-toolbar{
    position: absolute;
    width: 100%;
    height: 30px;
    top:0;
    left: 0;
    padding:20px;
    display: flex;
    flex-flow: row;
    cursor: pointer;
  }

  .image-toolbar .image-button{
    width:20px; 
    height:20px; 
    opacity: 0.6;
  }

  .image-toolbar .move-button{
    cursor: move;
  }

  .media-select-dialog .image-text{
    font-size: 13px;
  }
</style>
