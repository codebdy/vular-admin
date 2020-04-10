<template>
  <v-navigation-drawer
    :miniVariant = "mini"
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
    >
    <slot></slot>

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
      default: 80
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
    }    
  },
  

  methods: {
  },

  created () {
    const self = this;
    $bus.$on('changeDrawerMini', function () {
      self.mini = !self.mini;
      $bus.$emit('miniChanged', self.mini);
    })

    $bus.$on('vularAction', function (event) {
      if(event.action == 'hideOrShowDrawer'){
        self.model = !self.model;
      }
    })
  },
  
};
</script>
