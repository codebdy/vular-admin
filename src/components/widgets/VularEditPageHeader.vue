<template>
    <v-container fluid
      :style="{ 
        width:'calc(100% - ' + ($vuetify.application.left + $vuetify.application.right) + 'px)' ,
        top:$vuetify.application.top + 'px',
        background: heightPercent === 0 ? $store.state.vularApp.content.color : '',
      }"
      v-scroll="onScroll"
      class="py-0 header-container"
      style="transition: height 0.3s"
    >
      <div class="header-mask"
        :style="{ 
          background: $store.state.vularApp.content.color,
          opacity: 1 - heightPercent,
          'box-shadow': heightPercent === 0 ? '2px 2px 5px rgba(0,0,0,0.1)' :'',
        }"
      >
      </div>
      <div
        v-if="large"
        :color="$store.state.vularApp.content.color"
        :style="{
          height: (heightPercent*30 + 30) + 'px',
        }"
        style="transition: height 0.3s"
        class="d-flex flex-row align-center"
      >
        <template v-for="(crumb, i) in breadcrumbs">
          <v-btn text rounded class="ml-n4"
            :dark="dark" 
            @click="onBreadcrumbClick(crumb)">{{crumb.title}}</v-btn>
          <v-icon :dark="dark">mdi-chevron-right</v-icon>
        </template>
        <v-chip rounded :dark="dark" color="transparent">{{title}}</v-chip>
      </div>
      <div
        class="d-flex flex-row align-center"
        :style="{
          height: (heightPercent*30 + 70) + 'px',
          'margin-top' : (-heightPercent*20) + 'px'
        }"

        style="transition: height 0.3s"
      >
        <template
          v-if="!large && !this.$vuetify.breakpoint.xs"
        >
          <template v-for="(crumb, i) in breadcrumbs">
            <v-btn text rounded  class="ml-n4"
              @click="onBreadcrumbClick(crumb)"
            >{{crumb.title}}</v-btn>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
          <v-chip rounded color="transparent"
          >{{title}}</v-chip>
          <v-icon class="mr-4"
          >mdi-chevron-right</v-icon>
          
        </template>
        <v-text-field
          :dark="dark"
          v-model="inputValue[titleField]"
          :style="{'font-size': titleFontSize + 'px'}"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-menu offset-y
          v-if="menuItems.length > 0"
        >
          <template v-slot:activator="{ on }">
            <v-btn outlined fab 
              :dark="dark" 
              :small = "large"
              :x-small ="!large"
              v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list class="px-2" :color="$store.state.vularApp.content.card.color">
            <v-list-item link
              v-for="(item, index) in menuItems"
              :key = "index"
              @click = "onMenuItemClick(item)"
            >
              <v-list-item-icon>
                <v-icon color="primary">{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn outlined rounded 
          v-if="cancelButton"
          :dark="dark" 
          :large="large" 
          class="ml-6"
          @click="onCancel">
          {{$t('base.cancel')}}

        </v-btn>

        <v-btn rounded
          v-if="saveButton" 
          class="ml-6"
          :large="large"
          color="primary"
          :text = "dark && !$vuetify.theme.dark" 
          :style="{background: $store.state.vularApp.content.card.color}"
          @click="onSave"
        >
          {{$t('base.save')}}
        </v-btn>
      </div>
    </v-container>
</template>

<script>
import VularPageHeader from "./VularPageHeader"

  export default {
    name: "vular-edit-page-header",
    extends:VularPageHeader,
    props: {
      breadcrumbs : {default: ()=>{
        return []
      }},
      titleField : {},
      value:{default:()=>{ return{} }},
      saveButton:{default:null},
      cancelButton:{default:null},
      menuItems:{default:()=>{ return[] }},
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

      large(){
        return this.heightPercent >= 0.1
      },

      dark(){
        return this.heightPercent >= 0.5 && this.$store.state.vularApp.content.breadcurmbsImage
      }
    },

    mounted(){
      //console.log(this.inputValue)
    },

    methods: {
      onBreadcrumbClick(crumb){
        this.$emit('action', crumb.action)
      },

      onSave(){
        this.$emit('action', this.saveButton.action)
      },

      onCancel(){
        this.$emit('action', this.cancelButton.action)
      },

      onMenuItemClick(item){
        this.$emit('action', item.action)
      },
    }
  }
</script>

<style>
  .header-container{
    z-index: 1;
  }

  .header-mask{
    position: absolute;
    top:0;
    left: 0; 
    width: 100%;
    height: calc(100% + 7px);
  }
</style>
