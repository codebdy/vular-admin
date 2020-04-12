<template>
    <div class="drawer-content" :class="{light: inputValue.light}">
      <v-toolbar v-if="inputValue.showLogo"  class="flex-0" 
        :dark="inputValue.logo.dark"
        :light="inputValue.logo.light"
        :color="inputValue.logo.color"
        :src = "inputValue.logo.src"
        >
        <img src="images/logo.png" :height="36" alt="Vular Amazing Framework" />
        <v-toolbar-title class="ml-0 pl-3">
          <span class="hidden-sm-and-down">Vular</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon class="hidden-xs-only" 
          @click.stop="inputValue.mini = !inputValue.mini"
        >
          <v-icon>chevron_left</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list class="drawer-list">
        <v-list-item link class="menu-item">
          <v-list-item-icon>
            <v-icon>dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-title>仪表盘</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-badge
            color="pink"
            dot
            v-if="inputValue.mini"
            >
            <v-icon>mail</v-icon>
          </v-badge>
          <v-icon
          v-else
          >mail</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          询盘

        </v-list-item-title>
        <div>
          <v-chip
          color="pink"
          dark
          >6</v-chip>
        </div>
      </v-list-item>
      <v-subheader v-if="!inputValue.mini">外贸管理</v-subheader>
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
          <v-icon v-text="item.action"></v-icon>
        </v-badge>
        <v-icon
        v-else
        v-text="item.action"></v-icon>
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
export default {
  name: 'vular-app-drawer',
  props: {
    value:{default:()=>{return {}}},
    dark:{default:false},
  },
  data: function () {
    return{
      items: [
        {
          action: 'local_activity',
          title: 'Attractions',
          items: [
          { title: 'List Item' },
          ],
        },
        {
          action: 'restaurant',
          title: 'Dining',
          active: true,
          items: [
          { title: 'Breakfast & brunch' },
          { title: 'New American' },
          { title: 'Sushi' },
          ],
        },
        {
          action: 'school',
          title: 'Education',
          items: [
          { title: 'List Item' },
          ],
        },
        {
          action: 'directions_run',
          title: 'Family',
          items: [
          { title: 'List Item' },
          ],
        },
        {
          action: 'healing',
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
