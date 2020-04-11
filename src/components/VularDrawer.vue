<template>
  <v-navigation-drawer
    :miniVariant.sync = "mini"
    :bottom = "bottom"
    :clipped = 'clipped'
    :disableRouteWatcher = 'disableRouteWatcher'
    :disableResizeWatcher = 'disableResizeWatcher'
    :height = 'height'
    :floating = 'floating'
    :miniVariantWidth = 'miniVariantWidth'
    :mobileBreakPoint = 'mobileBreakPoint'
    :permanent = 'permanent'
    :right = 'right'
    :stateless = 'stateless'
    :temporary = 'temporary'
    :touchless = 'touchless'
    :width = 'width'
    :app = 'app'
    :dark = 'dark'
    :light = 'light'
    v-model="model"
    overflow
  >
    <div class="drawer-content">
      <v-toolbar color="primary darken-1 flex-0">
        <img src="images/logo.png" :height="mini ? 26 : 36" alt="Vular Amazing Framework" />
        <v-toolbar-title class="ml-0 pl-3">
          <span class="hidden-sm-and-down">Vular</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon class="hidden-xs-only" 
          @click.stop="mini = !mini"
        >
          <v-icon>chevron_left</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list class="drawer-list">
        <v-list-item link>
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
            v-if="mini"
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
      <v-subheader v-if="!mini">外贸管理</v-subheader>
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
          v-if="mini"
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
    <v-subheader v-if="!mini">系统设置</v-subheader>
    <v-list-item link>
      <v-list-item-icon>
        <v-icon>settings</v-icon>
      </v-list-item-icon>

      <v-list-item-title>设置</v-list-item-title>
    </v-list-item>


    </v-list>

    </div>

  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'vular-drawer',
  props: {
    bottom: Boolean,
    clipped: Boolean,
    disableRouteWatcher: Boolean,
    disableResizeWatcher: Boolean,
    height: {
      type: [Number, String],
      default: '100%'
    },
    floating: Boolean,
    miniVariant: Boolean,
    miniVariantWidth: {
      type: [Number, String],
      default: 56
    },
    mobileBreakPoint: {
      type: [Number, String],
      default: 1264
    },
    permanent: Boolean,
    right: Boolean,
    stateless: Boolean,
    temporary: Boolean,
    touchless: Boolean,
    width: {
      type: [Number, String],
      default: 300
    },

    //mixins/Applicationable
    app: Boolean,

    //mixins/themable
    dark: {
      type: Boolean,
      default: null
    },
    light: {
      type: Boolean,
      default: null
    },

    //mixins/Overlayable
    hideOverlay: Boolean,
  },
  data: function () {
    return{
      mini: this.miniVariant,
      model: true,
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
  

  methods: {
  },

  created () {
  },

  watch:{
    mini(val){
      if(val){
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
    background: #ccc;
    transition: all .2s;
  }
  .drawer-content ::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }

  .drawer-content ::-webkit-scrollbar-corner{
    background: transparent;
  }

  .drawer-content{
    width: 100%;height: 100%;display: flex;flex-flow: column;
  }

  .flex-0{
    flex: 0;
  }

  .drawer-list{
    flex: 1;
    overflow-y: auto; 
    overflow-x:hidden;
  }
</style>
