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
          :src="inputValue.thumbSrc"
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
          <div v-if="selectable" class="image-checkbar">
            <v-btn fab x-small depressed light color="white" 
              v-if="inputValue.selected"
            >
              <v-icon dark>mdi-check</v-icon>
            </v-btn>
          </div>
        </v-img>
        <v-card-text class="d-flex justify-center align-center image-text">
          <input v-model="inputValue.title" 
            v-show="inputValue.editing"
            @keyup.13 = "onStopEdit"
            @blur = "onStopEdit"
            ref="titleInput"
            class="media-title-input"
          />
          <span v-show="!inputValue.editing">
            {{inputValue.title}}
          </span>
        </v-card-text>
      </v-card>
      <div v-if="hover" class="image-toolbar">
        <v-spacer></v-spacer>
        <v-btn dark fab x-small depressed class="image-button"
          @click.stop="onView"
        >
          <v-icon size="13"  dark>mdi-magnify</v-icon>
        </v-btn>
        <v-btn dark fab x-small depressed class="image-button ml-1"
          @click.stop = "onEdit"
        >
          <v-icon size="13" dark>mdi-pencil-outline</v-icon>
        </v-btn>
        <v-btn dark fab x-small depressed class="image-button ml-1"
          @click.stop = "onRemove"
        >
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
      value:{default: ()=>{return {}}},
      selectable:{default: true},
    },

    data: () => ({
      oldTitle:'',
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
        if(this.selectable){
          this.$set(this.inputValue, 'selected', !this.inputValue.selected)
          if(this.inputValue.selected){
            this.$emit('select', this.inputValue)
          }
          else{
            this.$emit('unselect', this.inputValue)
          }
        }
        this.$refs.titleInput.focus()
      },

      onEdit(){
        this.$set(this.inputValue, 'editing', true)
        this.oldTitle = this.inputValue.title
        this.$refs.titleInput.focus()
      },

      onStopEdit(){
        this.$set(this.inputValue, 'editing', false)
        if(this.oldTitle !== this.inputValue.title){
          //@@@数据更改提交后台
          console.log('@@@数据更改提交后台')
        }
      },

      onRemove(){
        this.$emit('remove', this.inputValue)
      },

      onView(){
        this.$emit('view', this.inputValue)
      }
    }
  }
</script>

<style scoped>
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
    z-index: 1;
  }

</style>
