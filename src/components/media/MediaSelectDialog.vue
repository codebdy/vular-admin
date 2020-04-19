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
          <v-spacer ></v-spacer>
          <v-btn icon >
            <v-icon size="21">mdi-folder-plus-outline</v-icon>
          </v-btn>
          <v-divider vertical class="mx-3"></v-divider>
          <div v-if="!isSmall">
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
          <v-menu offset-y v-if="isSmall">
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
            <v-col
              class="d-flex child-flex"
              cols="4"
              sm="3"
              md="2"
            >
              <div aspect-ratio="1" class="media-folder">
                <div class="media-folder-inner image">
                  <v-icon size="60">mdi-folder-outline</v-icon>
                  <div>产品照片</div>
                </div>
              </div>
            </v-col>

            <v-col
              v-for="n in 5"
              :key="n"
              class="d-flex child-flex"
              cols="4"
              sm="3"
              md="2"
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="image"
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
              </v-card>
            </v-col>
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
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
  import MediaFolderList from "./MediaFolderList"
  export default {
    name: "media-select-dialog",
    components: {
      MediaFolderList
    },

    data: () => ({
      searchboxFocused : false,
      isList: false,
      drawer: true,
      showFolder:true,
      toolIconSize:21,
    }),
    computed:{
      isSmall(){
        return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm
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

  .media-select-dialog .media-folder{
    position: relative;
    padding-bottom: 100%;
  }

  .media-select-dialog .media-folder-inner{
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
  }

  .media-select-dialog .image{
    border-radius: 5px !important;
  }
</style>
