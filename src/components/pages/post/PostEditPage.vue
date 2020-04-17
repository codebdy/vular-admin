<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
  >
    <VularEditPageHeader :title="'文章编辑'" v-model="inputValue.header">
    </VularEditPageHeader>
      <div class="header-image-container"
        :style="{
          width : headerImageWidth,
          left : $vuetify.application.left + 'px',
          height : headerImageHeight,
          top : headerImageTop + 'px',
          opacity:inputValue.header.heightPercent,
        }" 
      >
        <div style=" background-image:url(/images/a1.jpg); " class="header-image"
        >
          <div class="header-image-mask">
          </div>
        </div>
      </div>
      <v-container fluid style="height: 1000px; margin-top:150px;">
        <v-row>
          <v-col
            cols="12"
            md="8"
          >
            <v-card
              class="pa-2"
              flat
              style="height: 500px;"
              :color="$store.state.vularApp.content.card.color" 
              :style="$store.state.vularApp.content.card.style"
            >
              <v-toolbar flat color="transparent">
                <v-toolbar-title>图片&视频</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon color="primary">
                  <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
              </v-toolbar>
              <v-divider></v-divider>
            </v-card>
          </v-col>          
          <v-col
            cols="12"
            md="4"
          >
            <v-card
              class="pa-2"
              flat
              style="height: 500px;"
              :color="$store.state.vularApp.content.card.color" 
              :style="$store.state.vularApp.content.card.style"
            >
            </v-card>
          </v-col>          
        </v-row>
      </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'post-edit-page',
    components: {
    },
    props: {
      value : { default: ()=>{
        return {
          header:{
            isStick: false,
            breadcrumbHeight: 90,
            listHeaderHeight: 0,
            heightPercent: 1,
          },
        }}
      },
    },
    data () {
      return {
      }
    },
    computed:{
      inputValue: {
        get:function() {
          return this.value;
        },
        set:function(val) {
          this.$emit('input', val);
        },
      },

      headerImageTop(){
        return this.$vuetify.application.top
      },

      headerImageWidth(){
        return "calc(100% - " + (this.$vuetify.application.left + this.$vuetify.application.right - 100) + "px )"
      },

      headerImageHeight(){
        return (this.inputValue.header.heightPercent*150 + 100) + 'px'
      },
    },

    methods: {
    },
  }
</script>

<style>
  .header-image-container{
    position: fixed; 
    top:0; 
    left:0; 
    width: calc(100% + 60px); 
    overflow: hidden;
    margin-left:-30px; 
    margin-top: -30px;
  }
  .header-image{
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15px);
    position:absolute;
    width: 100%;
    height: 500px; 
    background-repeat: no-repeat; 
    background-size: cover ;
  }
  .header-image-mask{
    width: 120%;
    height: 100%; 
    opacity: 0.5; 
    background-image: linear-gradient(257deg,#7f7679,#79abb5 71%,#b9b1aa);
  }
</style>