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
          @click.stop="inputValue.mini = !inputValue.mini"
        >
          <v-icon>chevron_left</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list class="drawer-list">
      <component     
        v-for="schema in items2"
        :key="schema.title"
        :is="schema.name" 
        :schema="schema"
        :drawer="inputValue"
      >
      </component>
      <v-list-group
      v-for="item in items"
      :key="item.title"
      v-model="item.active"
      no-action
      >

      <template v-slot:activator>
        <v-list-item-icon>
          <v-badge
          color="pink"
          dot
          v-if="inputValue.mini"
          >
          <v-icon v-text="item.icon"></v-icon>
        </v-badge>
        <v-icon
        v-else
        v-text="item.icon"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item-content>
    </template>
    <v-list-item link>
      <v-list-item-icon>
        <v-icon>mail</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Test</v-list-item-title>
      </v-list-item-content>
      <div>
        <v-chip
        color="blue"
        x-small
        dark
        >new</v-chip>
      </div>
    </v-list-item>

    <v-list-item >
      <v-list-item-icon>
        <v-icon>mail</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Test2</v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon>
        <v-icon>mail</v-icon>
      </v-list-item-icon>
      <div>
        <v-chip
        color="pink"
        >3</v-chip>
      </div>
    </v-list-item>

    <v-list-item
    v-for="subItem in item.items"
    :key="subItem.title"
    @click=""
    >
      <v-list-item-content>
        <v-list-item-title v-text="subItem.title"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    </v-list-group>
    <v-subheader v-if="!inputValue.mini">系统设置</v-subheader>
    <v-list-item link>
      <v-list-item-icon>
        <v-icon>settings</v-icon>
      </v-list-item-icon>

      <v-list-item-title>设置</v-list-item-title>
    </v-list-item>


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
      items2:[
        {
          name:"vular-menu-item",
          prependIcon:'mdi-speedometer',
          title:'仪表盘',
        },
        {
          name:"vular-menu-item",
          prependIcon: 'mail',
          title:'询盘',
          badge:{
            title:'6',
            props:{
              dark:true,
              color:'red',
              small:false,
            }
          },
          chip:{
            title:'New',
            props:{
              dark:true,
              color:'red',
              small:false,
            }
          }
        },
        {
          name:"vular-menu-item",
          prependIcon: 'home',
          title:'测试',
          appendIcon: 'home',
          badge:{
            title:'6',
            props:{
              dark:true,
              color:'red',
              small:false,
            }
          },
          chip:{
            title:'New',
            props:{
              dark:true,
              color:'red',
              small:false,
            }
          }
        },
        {
          name:"vular-subheader",
          title:"外贸管理"
        },
        {
          name:"vular-menu-item-group",
          icon:'mail',
          title:'订单管理',
          appendIcon: 'home',
          badge:{
            title:'6',
            props:{
              dark:true,
              color:'red',
              small:false,
            }
          },
          chip:{
            title:'New',
            props:{
              dark:true,
              color:'red',
              small:false,
            }
          }
        },
      ],
      items: [
        {
          icon: 'local_activity',
          title: 'Attractions',
          items: [
          { title: 'List Item' },
          ],
        },
        {
          icon: 'restaurant',
          title: 'Dining',
          active: false,
          items: [
          { title: 'Breakfast & brunch' },
          { title: 'New American' },
          { title: 'Sushi' },
          ],
        },
        {
          icon: 'school',
          title: 'Education',
          items: [
          { title: 'List Item' },
          ],
        },
        {
          icon: 'directions_run',
          title: 'Family',
          items: [
          { title: 'List Item' },
          ],
        },
        {
          icon: 'healing',
          title: 'Health',
          items: [
          { title: 'List Item' },
          ],
        },
      ],
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
  },

  created () {
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
    width: 0.2rem;
    height: 0.2rem;
  }
  .drawer-content ::-webkit-scrollbar-track {
    border-radius: 0;
  }
  .drawer-content ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background: rgba(0,0,0, 0.2);
    transition: all .2s;
  }

  .drawer-content ::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0, 0.4);
  }

  .theme--dark .drawer-content ::-webkit-scrollbar-thumb {
    border-radius: 0;
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
    margin-right: 2px;
  }

</style>
