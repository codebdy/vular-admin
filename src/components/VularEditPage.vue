<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
  >
    <VularEditPageHeader :title="title" v-model="inputValue">
    </VularEditPageHeader>
      <div class="header-image-container"
        v-if="this.$store.state.vularApp.content.breadcurmbsImage"
        :style="{
          width : headerImageWidth,
          left : $vuetify.application.left + 'px',
          height : headerImageHeight,
          top : headerImageTop + 'px',
          opacity:inputValue.header.heightPercent,
        }" 
      >
        <div :style=" 'background-image:url(' + headerImageSrc + ');' " class="header-image"
        >
          <div class="header-image-mask">
          </div>
        </div>
      </div>
      <v-container fluid style="margin-top:120px;">
        <v-form>
          <slot></slot>
        </v-form>
      </v-container>
  </v-content>
</template>

<script>
  export default {
    name: 'vular-edit-page',
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
          model:{
            medias:[],
          },
        }}
      },
      headerImageField:{default:'medias'},
      title: {default:''},
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

      headerImageSrc(){
        let image = null
        if(this.headerImageField){
          let medias = this.inputValue.model[this.headerImageField]
          for(var i = 0; i < medias.length; i++){
            if(medias[i].type === 'image'){
              image = medias[i]
              break
            }
          }
        }

        return image ? image.src : '/images/login.jpg'
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
    height: 400px; 
    background-repeat: no-repeat; 
    background-size: cover ;
    background-position: center center;
  }
  .header-image-mask{
    width: 120%;
    height: 100%; 
    opacity: 0.5; 
    background-image: linear-gradient(257deg,#7f7679,#79abb5 71%,#b9b1aa);
  }
</style>