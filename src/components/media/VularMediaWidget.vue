<template>
  <v-card-text class="pa-0 d-flex flex-row medias-widget ">
    <div class="slect-left-area">
      <div class="small-toolbar" color="transparent">
        <div v-if="isSmall">
          <v-menu offset-y v-if="isSmall">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-folder-home-outline</v-icon>
              </v-btn>
            </template>
            <v-card :color="$store.state.vularApp.content.card.color" class="pop-menu">
              <v-subheader>{{$t('media.folder')}}</v-subheader>
              <MediaFolderList 
                v-model = "folders"
                @selectFolder = "onSelectFolder"
              ></MediaFolderList>
            </v-card>
          </v-menu>
          <v-icon class="mr-2">mdi-chevron-right</v-icon>          
        </div>
        <div v-if="currentFolder">{{currentFolder.title}}</div>
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
        <v-btn icon v-if="inputValue.length == 0"
          @click="onCreateFolder"
        >
          <v-icon size="21">mdi-folder-plus-outline</v-icon>
        </v-btn>
        <v-divider vertical class="mx-3" v-if="inputValue.length == 0"></v-divider>
        <div v-if="inputValue.length == 0">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon :size="toolIconSize">mdi-filter-outline</v-icon>
              </v-btn>
            </template>
            <v-list class="px-2" :color="$store.state.vularApp.content.card.color">
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-image-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{$t('media.images')}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-video-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{$t('media.videos')}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-file-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{$t('media.files')}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon :size="toolIconSize">mdi-sort-ascending</v-icon>
              </v-btn>
            </template>
            <v-list class="px-2" :color="$store.state.vularApp.content.card.color">
              <v-subheader>{{$t('media.last-modified')}}</v-subheader>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-sort-descending</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{$t('media.descending')}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-sort-ascending</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{$t('media.ascending')}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-subheader>{{$t('media.name')}}</v-subheader>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-sort-alphabetical-descending</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>A~Z</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-sort-alphabetical-ascending</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Z~A</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
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
        <div v-if="inputValue.length > 0">
          <v-btn icon color="primary"
            @click="onClear"
          >
            <v-icon :size="toolIconSize">mdi-broom</v-icon>
          </v-btn>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon color="primary" v-on="on">
                <v-icon :size="toolIconSize">mdi-folder-move-outline</v-icon>
              </v-btn>
            </template>
            <v-card :color="$store.state.vularApp.content.card.color" class="pop-menu">
              <MediaFolderMenu 
                :folders="folders" 
                :selectAble = "false"
                @selectFolder = "onAddtoFolder"
              ></MediaFolderMenu>
            </v-card>
          </v-menu>
          <v-btn icon color="primary"
            @click.stop = "onRemoveSelected"
          >
            <v-icon :size="toolIconSize">mdi-delete-sweep-outline</v-icon>
          </v-btn>
          <v-btn icon color="primary"
            @click.stop = "onReplace"
          >
            <v-icon :size="17">mdi-file-replace-outline</v-icon>
          </v-btn>
        </div>
      </div>
      <v-divider></v-divider>
      <v-card-text style="flex:1; overflow-y: auto; position: relative;">
        <v-row>
          <MediaFolderCell
            v-if="!isList && !currentFolder"
            v-for = "(folder, index) in folders"
            :key = "folder.id"
            v-model="folders[index]"
            :folders = "folders"
            :draggedFolder = "draggedFolder"
            :draggedMedia = "draggedMedia"
            @remove = "onRemoveFolder"
            @dragFolder = "draggedFolder = folder"
            @endDragFolder = "draggedFolder = null"
            @changePosition = "onChangePosition"
            @selectFolder = "onSelectFolder"
          >
          </MediaFolderCell>
          <MediaFolderRow
            v-else-if = "!currentFolder"
            :key = "folder.id"
            v-model="folders[index]"
            :folders = "folders"
            :draggedFolder = "draggedFolder"
            :draggedMedia = "draggedMedia"
            @remove = "onRemoveFolder"
            @dragFolder = "draggedFolder = folder"
            @endDragFolder = "draggedFolder = null"
            @changePosition = "onChangePosition"
            @selectFolder = "onSelectFolder"
          >
            
          </MediaFolderRow>
          <MediaCell
            v-if = "!isList && ((!currentFolder && !media.belongsTo) || (currentFolder && currentFolder.id == media.belongsTo))"
            v-for = "(media, index) in medias"
            :key = "media.src"
            v-model="medias[index]"
            @select = "onSelect"
            @unselect = "onUnselect"
            @remove = "onRemove"
            @view = "onView"
            @dragMedia = "draggedMedia = media"
            @endDragFolder = "draggedMedia = null"
          >
          </MediaCell>
          <MediaRow
            v-else-if = "(!currentFolder && !media.belongsTo) || (currentFolder &&currentFolder.id == media.belongsTo)"
            :key = "media.src"
            v-model="medias[index]"
            @select = "onSelect"
            @unselect = "onUnselect"
            @remove = "onRemove"
            @view = "onView"
            @dragMedia = "draggedMedia = media"
            @endDragFolder = "draggedMedia = null"
          >
          </MediaRow>
        </v-row>
        <div v-if="isEmperty" class="emperty-area">
          <v-icon size="120" color="primary">mdi-camera-outline</v-icon>
          <span>{{$t('media.drag-here')}}</span>
        </div>
      </v-card-text>
    </div>
    <v-divider vertical></v-divider>
    <div class="flex-column right-column"
      v-if="!isSmall"
      :style="{background: inMediasPage ? '' : $store.state.vularApp.content.color}"
    >
      <div class="d-flex justify-center align-center upload-button-area">
        <v-btn color="primary" rounded @click="uploadClick">
          <v-icon class="mr-3">mdi-cloud-upload-outline</v-icon> {{$t("media.upload-files")}}
        </v-btn>
        <input ref="uploadInput" hidden multiple type="file" :accept="acceptMatch" 
           @change='addFile'
         />
      </div>
      <div class="right-folder-list">
        <MediaFolderList 
          v-model = "folders"
          @selectFolder = "onSelectFolder"
        ></MediaFolderList>
      </div>
    </div>
    <MediaView v-model="mediaViewer" :media="viewedMedia"></MediaView>
  </v-card-text>
</template>

<script>
  import {add, remove} from "../../basic/vular-array"
  import MediaFolderList from "./MediaFolderList"
  import MediaFolderMenu from "./MediaFolderMenu"
  import MediaFolderCell from "./MediaFolderCell"
  import MediaCell from "./MediaCell"
  import MediaView from "./MediaView"
  import MediaRow from "./MediaRow"
  import MediaFolderRow from "./MediaFolderRow"

  export default {
    name: "VularMediaWidget",
    components: {
      MediaFolderList,
      MediaFolderMenu,
      MediaFolderCell,
      MediaCell,
      MediaView,
      MediaRow,
      MediaFolderRow,
    },
    props: {
      inMediasPage:false,
      acceptMatch:{
        type:String,
        default:'image/*',
      },
      value:{default:()=>{return []}}
    },

    data: () => ({
      searchboxFocused : false,
      mediaViewer : false,
      viewedMedia : null,
      isList: false,
      toolIconSize:21,
      draggedFolder: null,
      draggedMedia: null,
      //folders:[],
      folders:[
        {
          id : 1,
          title : "产品照片",
        },
        {
          id : 2,
          title : "产品图纸",
        },
        {
          id : 3,
          title : "文章照片1",
        },
        {
          id : 4,
          title : "文章照片2",
        },
        {
          id : 5,
          title : "文章照片3",
        },
        {
          id : 6,
          title : "文章照片4",
        },
      ],
      //medias:[],
      medias:[
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
          id : 1,
          type : "image",
          title : "图片1",
          src : "/images/pics/111-500x300.jpg",
          thumbSrc : '/images/pics/111-500x300.jpg',
          lazySrc : "/images/lazy-pics/111-500x300.jpg",
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
        {
          id : 7,
          type : "image",
          title : "图片7",
          src : "/images/pics/117-500x300.jpg",
          thumbSrc : '/images/pics/117-500x300.jpg',
          lazySrc : "/images/lazy-pics/117-500x300.jpg",
        },
        {
          id : 8,
          type : "image",
          title : "图片8",
          src : "/images/pics/118-500x300.jpg",
          thumbSrc : '/images/pics/118-500x300.jpg',
          lazySrc : "/images/lazy-pics/118-500x300.jpg",
        },
        {
          id : 9,
          type : "image",
          title : "图片9",
          src : "/images/pics/119-500x300.jpg",
          thumbSrc : '/images/pics/119-500x300.jpg',
          lazySrc : "/images/lazy-pics/119-500x300.jpg",
        },
        {
          id : 10,
          type : "image",
          title : "图片10",
          src : "/images/pics/120-500x300.jpg",
          thumbSrc : '/images/pics/120-500x300.jpg',
          lazySrc : "/images/lazy-pics/120-500x300.jpg",
        },
        {
          id : 11,
          type : "image",
          title : "图片11",
          src : "/images/pics/121-500x300.jpg",
          thumbSrc : '/images/pics/121-500x300.jpg',
          lazySrc : "/images/lazy-pics/121-500x300.jpg",
        },
      ],

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

      currentFolder(){
        for(var i = 0; i < this.folders.length; i++){
          if(this.folders[i].selected){
            return this.folders[i]
          }
        }
        return null
      },

      isEmperty(){
        if(!this.currentFolder && this.folders.length > 0){
          return false
        }

        for(var i = 0; i < this.medias.length; i++){
          if(this.currentFolder && this.medias[i].belongsTo == this.currentFolder.id){
            return false
          }
        }
        return true
      },

    },

    methods: {
      onCreateFolder(){
        //
        let folder = {
          id:'vular-temp-id',
          title: this.$t('media.new-folder'),
          editing: true,
        }

        this.folders.push(folder)
      },

      onSelect(media){
        add(media, this.inputValue)
      },
      onUnselect(media){
        remove(media, this.inputValue)
      },

      onRemove(media){
        remove(media, this.medias)
        remove(media, this.inputValue)
        console.log("@@@调用从后台删除数据节口")
      },

      onRemoveFolder(folder){
        remove(folder, this.folders)
        console.log("@@@调用从后台删除数据节口")
      },

      onView(media){
        this.viewedMedia = media
        this.mediaViewer = true
      },

      onClear(){
        this.medias.forEach(media=>{
          this.$set(media, 'selected', false)
        })
        this.inputValue = []
      },

      onCancel(){
        this.$emit('close')
        this.onClear()
      },

      onConfirm(){
        this.$emit('close')
        this.onClear()
      },

      onChangePosition(folder){
        for(var i=0; i<this.folders.length; i++)
        {
          if(this.folders[i].id == this.draggedFolder.id){
            this.$set(this.folders, i, folder)
          } 
          else if(this.folders[i].id == folder.id){
            this.$set(this.folders, i, this.draggedFolder)
          } 
        }

      },

      onSelectFolder(folder){
        this.folders.forEach(fld=>{
          this.$set(fld, 'selected', folder && fld.id == folder.id)
        })
        this.onClear()
      },

      onAddtoFolder(folder){
        this.inputValue.forEach(media=>{
          this.$set(media, 'selected', false)
          this.$set(media, 'belongsTo', folder ? folder.id : '')
        })

        this.inputValue = []
      },

      onRemoveSelected(){
        this.inputValue.forEach(media=>{
          remove(media, this.medias)
        })
        this.inputValue = []

        console.log("@@@ 通过后台API更新数据")
      },

      uploadClick(){
        this.$refs.uploadInput.click()
      },

      addFile(){

      },

      onReplace(){
        this.$refs.uploadInput.click()
        console.log("@@@ 通过后台API更新数据")
      },

    }
  }
</script>

<style>
  .medias-widget{
    height: calc(100vh - 200px);
  }

  .medias-widget .pop-menu{
    flex: 1; overflow: auto; max-height: calc(100vh - 50px);
  }

  .medias-widget .right-folder-list{
    flex: 1; overflow-y: auto; padding:15px 15px;
  }

  .medias-widget .slect-left-area{
    flex:1; display: flex;flex-flow: column;
  }

  .medias-widget .small-toolbar{
    display: flex;
    flex-flow: row; 
    align-items: center; 
    height:60px; 
    padding:20px 15px;
    padding-left: 8px;
  }

  .medias-widget .upload-button-area{
    height: 70px;
  }

  .medias-widget  .list-search-box{
    transition: width 0.3s;
  }

  .medias-widget  .right-column{
    width: 250px;
    display: flex;
  }

  .medias-widget .image{
    border-radius: 5px !important;
  }

  .medias-widget .image-grid-col{
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

  .medias-widget .image-text{
    font-size: 13px;
  }

  .medias-widget .media-title-input{
    outline: rgba(0,0,255,0.3) solid 2px;
  }

  .medias-widget .emperty-area{
    position: absolute;
    width: calc(100% - 40px); 
    height: calc(100% - 40px);
    top:20px; 
    left:20px;
    border:rgba(0, 0, 255, 0.5) dashed 2px; 
    display: flex; 
    flex-flow: column; 
    justify-content: center; 
    align-items: center;opacity: 0.5;
  }
</style>