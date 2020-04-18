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
        <div style="display: flex;flex-flow: row; height: 60px; align-items: center;padding-right:10px;" color="transparent">
          <v-toolbar-title>全部媒体</v-toolbar-title>
          <v-spacer></v-spacer>
          
        </div>
        <v-divider></v-divider>
        <v-card-text style="flex:1; overflow-y: auto;">
          <div style="height: 1000px;">eee</div>
          
        </v-card-text>
      </div>
      <v-divider vertical></v-divider>
      <div class="d-flex flex-column" style="width: 250px;"
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
  }
</style>
