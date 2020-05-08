<template>
  <div>
    <div>{{label}}</div>
    <div class="viewer">
      <v-hover
        v-slot:default="{ hover }"
        v-if="image"
      >
        <v-img
          aspect-ratio="1"
          :src="image.thumbSrc"
          class="single-image"
        >

          <div class="mask" v-if="hover">
            <v-btn dark fab x-small depressed class="image-button"
              @click.stop="image = null"
            >
              <v-icon size="13"  dark>mdi-close</v-icon>
            </v-btn>
          </div>
        </v-img>
      </v-hover>

      <MediaAddCell @selectMedias= "onSelectMedias"
        v-else
        single="true"
      >
      </MediaAddCell>
    </div>
  </div>
</template>

<script>
  import MediaAddCell from "./MediaAddCell"
  export default {
    name: "vular-single-image-input",
    components: {
      MediaAddCell,
    },
    props: {
      label:{defalut:''},
    },

    data: () => ({
      image:null,
    }),

    methods: {
      onSelectMedias(media){
        console.log(media)
        this.image = media
      }
    }
  }
</script>

<style scoped>
  .viewer{
    width: 100px;
  }

  .single-image{
    position: relative;
  }

  .mask{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: flex-end;
  }

</style>
