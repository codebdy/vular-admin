<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
  >
    
    <VularEditPageHeader 
      :title="title" 
      :breadcrumbs="breadcrumbs" 
      :titleField="titleField" 
      :saveButton = "saveButton"
      :cancelButton = "cancelButton"
      :menuItems = "menuItems"
      v-model="inputValue"
      @heightPercent = "onHeaderHeightPercent"
      @action = "onAction"
    >
    </VularEditPageHeader>
      <div class="header-image-container"
        v-if="this.$store.state.vularApp.content.breadcurmbsImage"
        :style="{
          width : headerImageWidth,
          left : $vuetify.application.left + 'px',
          height : headerImageHeight,
          top : headerImageTop + 'px',
          opacity: 0.3 + headerHeightPercent,
        }" 
      >
        <div :style=" 'background-image:url(' + headerImageSrc + ');' " class="header-image"
        >
          <div class="header-image-mask">
          </div>
        </div>
      </div>
      <v-container fluid style="margin-top:120px;">
        <ValidationObserver ref="observer" v-slot="{ validate, reset }">
          <v-form>
            <slot></slot>
          </v-form>
        </ValidationObserver>
      </v-container>
  </v-content>
</template>

<script>
  import { extend, ValidationObserver, setInteractionMode } from 'vee-validate'

  import * as rules from 'vee-validate/dist/rules';
  import { messages as enMessages } from 'vee-validate/dist/locale/en.json';
  import { messages as zhMessages } from 'vee-validate/dist/locale/zh_CN.json';

  var messages = i18n.locale==='zh' ? zhMessages : enMessages
  Object.keys(rules).forEach(rule => {
    extend(rule, {
      ...rules[rule], // copies rule configuration
      message: messages[rule] // assign message
    });
  });

  setInteractionMode('eager')
  
  export default {
    name: 'vular-edit-page',
    components: {
      ValidationObserver,
    },
    props: {
      value : { default: ()=>{
          return {}
        }
      },
      breadcrumbs : {default: ()=>{
        return []
      }},
      titleField : {default : "title"},
      headerImageField:{default:'medias'},
      title: {default:''},
      saveButton:{default:null},
      cancelButton:{default:null},
      menuItems:{default:()=>{ return[] }},
    },
    data () {
      return {
        headerHeightPercent: 1,
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
          let medias = this.inputValue[this.headerImageField]
          if(medias){
            for(var i = 0; i < medias.length; i++){
              if(medias[i].type === 'image'){
                image = medias[i]
                break
              }
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
        return (this.headerHeightPercent*140 + 100) + 'px'
      },
    },
    created(){
      console.log('created')
    },
    
    mounted() {
      //console.log('vular edit page', this.value)
    },
    activated() {
      console.log('activated')
    },
    deactivated() {
      console.log('deactivated')
    },
    destroyed() {
      console.log('destroyed')
    },

    methods: {
      onHeaderHeightPercent(percent){
        this.headerHeightPercent = percent
      },  

      onAction(action){
        if(action.name == 'openPage'){
          this.$router.push(action.to)
          return
        }
        if(action.validate){
          this.$refs.observer.validate()
          return
        }
        $bus.$emit('VularAction', action)
      },
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