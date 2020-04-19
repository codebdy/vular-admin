<template>
  <v-hover
    v-slot:default="{ hover }"
  >
    <v-col
      class="d-flex image-grid-col"
      cols="4"
      sm="3"
      md="2"
      @click="onClick"
    >
      <v-card flat tile class="d-flex flex-column" color="transparent">
        <v-img
          :src="inputValue.src"
          :lazy-src="inputValue.lazySrc"
          aspect-ratio="1"
          class="image real-image"
          :class = "inputValue.selected ? 'selected' :''"
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
          <div class="image-checkbar">
            <v-btn fab x-small depressed light color="white" 
              v-if="inputValue.selected"
            >
              <v-icon dark>mdi-check</v-icon>
            </v-btn>
          </div>
        </v-img>
        <v-card-text class="d-flex justify-center align-center image-text">
        {{inputValue.title}}
        </v-card-text>
      </v-card>
      <div v-if="hover" class="image-toolbar">
        <v-btn dark fab x-small class="image-button move-button" depressed>
          <v-icon size="16"  dark>mdi-arrow-all</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn dark fab x-small depressed class="image-button">
          <v-icon size="13"  dark>mdi-magnify</v-icon>
        </v-btn>
        <v-btn dark fab x-small depressed class="image-button ml-1">
          <v-icon size="13"  dark>mdi-pencil</v-icon>
        </v-btn>
        <v-btn dark fab x-small depressed class="image-button ml-1">
          <v-icon size="13"  dark>mdi-delete-outline</v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-hover>
</template>

<script>
  export default {
    name: "media-cell",
    components: {
    },
    props: {
      value:{default: ()=>{return {}}}
    },

    data: () => ({
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
    },

    methods: {
      onClick(){
        this.$set(this.inputValue, 'selected', !this.inputValue.selected)
        if(this.inputValue.selected){
          this.$emit('select', this.inputValue)
        }
        else{
          this.$emit('unselect', this.inputValue)
        }
      }
    }
  }
</script>

<style>
  .real-image.selected{
    border: rgba(0, 0, 255, 0.5) solid 2px; 
  }

  .image-grid-col .real-image{
    position: relative;
  }

  .image-grid-col:hover .real-image::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .image-grid-col .image-checkbar{
    position: absolute;
    width: 100%;
    height: 40px;
    bottom: 0;
    left: 0;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5px;
  }

</style>
