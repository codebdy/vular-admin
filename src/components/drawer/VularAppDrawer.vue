<template>
    <div class="drawer-content" :class="{light: inputValue.light}">
      <v-toolbar v-if="inputValue.showLogo"  class="flex-0" 
        :dark="inputValue.logo.dark"
        :light="inputValue.logo.light"
        :color="inputValue.logo.color"
        :src = "inputValue.logo.src"
        :flat = "inputValue.logo.flat"
        :style = "inputValue.logo.style"
        >
        <img :src="logo.src" style="height:36px;" :alt="logo.alt" />
        <v-toolbar-title class="ml-0 pl-3">
          <span class="hidden-sm-and-down">{{logo.title}}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon class="hidden-xs-only" 
          v-if="!inputValue.mini"
          @click.stop="inputValue.mini = !inputValue.mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-toolbar>

      <v-skeleton-loader
        type="list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar"
        v-if="loading" 
      >
      </v-skeleton-loader>
      <v-list class="drawer-list"
        v-else
      >
      <component     
        v-for="schema in items"
        :key="schema.id"
        :is="schema.name" 
        :schema="schema"
        :drawer="inputValue"
      >
      </component>
    </v-list>

    </div>
</template>
<script>
import VularMenuItem from "./VularMenuItem"
import VularMenuItemGroup from "./VularMenuItemGroup"
import VularSubheader from "./VularSubheader"
export default {
  name: 'vular-app-drawer',
  components: {
    VularMenuItem,
    VularMenuItemGroup,
    VularSubheader,
  },
  props: {
    value:{default:()=>{return {}}},
    logo:{default:()=>{return {}}},
    dark:{default:false},
  },
  data: function () {
    return{
      loading:false,
      items:[],
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
  },

  methods: {
    init(){
      this.loading = true
      let api = '/api/drawer'
      $axios.get(api)
      .then((res)=>{
        this.items = res.data
        this.loading = false
      })
      .catch((error)=>{
        this.$store.commit('error', {
          error:error,
          action:api
        })
        this.loading = false
      })
    }
  },

  created () {
  },

  mounted(){
    this.init()
  },

  watch:{
    "value.mini" : function (val){
      if(val && !this.value.expandOnHover){
        this.items.forEach(item=>{
          this.$set(item, 'active', false)
        })
      }
    }
  }

};
</script>

<style>
  .drawer-content ::-webkit-scrollbar {
    display: none;
  }
  .drawer-content ::-webkit-scrollbar-track {
    border-radius: 0;
  }
  .drawer-content ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background: rgba(0,0,0, 0.2);
    transition: all .2s;
  }

  .drawer-content:hover ::-webkit-scrollbar{
    display: block;
    width: 0.4rem;
    height: 0.4rem;
  }

  .drawer-content ::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0, 0.4);
  }

  .theme--dark .drawer-content ::-webkit-scrollbar-thumb {
    border-radius: 0.2rem;
    background: rgba(255,255,255, 0.2);
    transition: all .2s;
  }
  .theme--dark .drawer-content ::-webkit-scrollbar-thumb:hover {
    background: rgba(255,255,255, 0.4);
  }
  .light.drawer-content ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background: rgba(0,0,0, 0.2);
    transition: all .2s;
  }

  .light.drawer-content ::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0, 0.4);
  }

  .drawer-content ::-webkit-scrollbar-corner{
    background: transparent;
  }

  .drawer-content{
    width: 100%;height: 100%;display: flex;flex-flow: column;
  }

  .drawer-content .v-list-item__title{
    font-size: 0.825rem;
  }

  .drawer-content .v-subheader{
    font-size: 0.825rem;
  }

  .flex-0{
    flex: 0;
  }

  .drawer-list{
    flex: 1;
    overflow-y: auto; 
    overflow-x:hidden;
    /*margin-right: 2px;*/
  }

</style>
