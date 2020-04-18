<template>
  <v-card
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
      <div style="flex:1; display: flex;flex-flow: column;">
        <div style="display: flex;flex-flow: row; align-items: center; height:60px; padding:20px 15px;" color="transparent">
          <v-toolbar-title style="font-size: 16px;">根目录</v-toolbar-title>
          <div 
            style="transition: width 0.3s;"
            :style="{width: searchboxWidth + 'px'}"
            class="list-search-box ml-5"
          >
            <v-text-field
              hide-details
              append-icon = "mdi-magnify"
              style = "padding-top:0px; "
              class = "mt-n1"
              @focus = "searchboxWidth = 350"
              @blur = "searchboxWidth = 200"
            ></v-text-field>
          </div>
          <v-spacer ></v-spacer>
          <v-btn icon >
            <v-icon size="21">mdi-folder-plus-outline</v-icon>
          </v-btn>
          <v-divider vertical class="mx-3"></v-divider>
          <v-btn icon >
            <v-icon size="21">mdi-filter-outline</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon size="21">mdi-sort-ascending</v-icon>
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
            <v-icon size="21">mdi-format-list-checkbox</v-icon>
          </v-btn>
        </div>
        <v-divider></v-divider>
        <v-card-text style="flex:1; overflow-y: auto;">
          <div style="height: 1000px;">eee</div>
          
        </v-card-text>
      </div>
      <v-divider vertical></v-divider>
      <div class="flex-column d-none d-md-flex" style="width: 250px;"
        :style="{background: $store.state.vularApp.content.color}"
      >
        <div class="d-flex justify-center align-center" style="height: 80px;">
          <v-btn color="primary" rounded >
            <v-icon class="mr-3">mdi-cloud-upload-outline</v-icon> 上传文件
          </v-btn>
        </div>
        <div style="flex: 1; overflow-y: auto; padding:15px 15px;">
          <v-card flat height="1000" color="transparent">
            ffffwe<br>
            wf<br>
            545<br>
            656<br>
            78<br>
            990<br>
            --<br>
            xc<br>
            ffffwe<br>
            wf<br>
            545<br>
            656<br>
            78<br>
            990<br>
            --<br>


          </v-card>
        </div>
      </div>
    </v-card-text>
    <v-card-actions class="pa-5 media-select-dialog-actions">
      <v-spacer></v-spacer>
      <v-btn color="primary" class="mr-5" outlined rounded @click="onCancel">{{$t('media.cancel')}}</v-btn>
      <v-btn color="primary" class="mr-5" rounded @click="onConfirm">{{$t('media.select')}}</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "media-select-dialog",

    data: () => ({
      searchboxWidth : 150,
      isList: false,
      drawer: true,
      showFolder:true,
    }),

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
  .media-select-dialog-body{
    height: calc(100vh - 0px);
  }
  .media-select-dialog-actions{
    box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
    height: 50px;
  }
</style>
