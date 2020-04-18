<template>
    <v-card
      :color="$store.state.vularApp.content.card.color" 
    >
      <v-toolbar flat dark color="primary">
        <v-toolbar-title>{{$t('media.edit-alt')}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="onCancel">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text class="media-alt-dialog-body">
        <v-subheader class="mt-5">{{$t('media.alt-tips')}}</v-subheader>

        <v-list color="transparent">
          <v-list-item
            v-for="(image, i) in images"
            :key="image.src"
          >
            <v-list-item-avatar tile size="65" style="border-radius: 5px;">
              <v-img :src="image.src"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>

              <v-text-field
                v-model="image.alt"
                label="图片的Alt文本"
                type="text"
              >
                <template v-slot:append 
                  v-if="i === 0 && image.alt"
                >
                  <v-btn icon @click="copyToAll(image)">
                    <v-icon>mdi-expand-all-outline</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-card-text>
      <v-card-actions class="pa-5 card-media-alt-dialog">
        <v-spacer></v-spacer>
        <v-btn color="primary" class="mr-5" text rounded @click="onCancel">{{$t('media.cancel')}}</v-btn>
        <v-btn color="primary" class="mr-5" rounded @click="onConfirm">{{$t('media.confirm')}}</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
  export default {
    name: "alt-dialog",

    data: () => ({
      dialog: false,
      images: [
        { src: 'https://picsum.photos/500/300?image=110', alt:"alt text1" },
        { src: 'https://picsum.photos/500/300?image=111', alt:"alt text2" },
        { src: 'https://picsum.photos/500/300?image=112', alt:"alt text3" },
        { src: 'https://picsum.photos/500/300?image=113', alt:"alt text4" },
        { src: 'https://picsum.photos/500/300?image=114', alt:"alt text5" },
        { src: 'https://picsum.photos/500/300?image=115', alt:"alt text6" },
        { src: 'https://picsum.photos/500/300?image=116', alt:"alt text7" },
        { src: 'https://picsum.photos/500/300?image=117', alt:"alt text8" },
        { src: 'https://picsum.photos/500/300?image=118', alt:"alt text9" },
        { src: 'https://picsum.photos/500/300?image=119', alt:"alt text10" },
       ],
    }),

    methods: {
      onCancel(){
        this.$emit('close')
      },

      onConfirm(){
        this.$emit('close')
      },
      copyToAll(image){
        this.images.forEach(img=>{
          img.alt = image.alt
        })
      }
    }
  }
</script>

<style>
  .media-alt-dialog-body{
    max-height: calc(100vh -300px)
  }
  .media-alt-dialog-actions{
    box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
  }
</style>
