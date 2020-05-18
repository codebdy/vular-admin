<template>
  <div 
    class="mouse-follower"
    v-if="isShow"
    :style="{
      left:left,
      top:top,
    }"
  >
  {{followedElement.title}}
  </div>
</template>

<script>
  export default {
    name: "the-mouse-follower",
    components: {
    },
    props: {
    },

    data: () => ({
      left:0,
      top:0,
      isShow: false,
    }),

    computed:{
      followedElement(){
        return this.$store.state.customizedApp.draggedElement
      }
    },

    created(){
    },
    
    
    mounted() {
      window.$bus.$on('followMouse', this.onFollowMouse)
      window.$bus.$on('unFollowMouse', this.onUnFollowMouse)
    },
    destroyed() {
      window.$bus.$off('followMouse', this.onFollowMouse)
      window.$bus.$off('unFollowMouse', this.onUnFollowMouse)
    },

    methods: {
      onFollowMouse(event){
        this.isShow = true
        this.left = event.clientX + 'px'
        this.top = event.clientY + 'px'

      },

      onUnFollowMouse(){
        this.isShow = false
      },
    },
  }
</script>

<style scoped>
  .mouse-follower{
    position:fixed;
    background: #546bde;
    color:#fff;
    padding:5px 10px;
    pointer-events: none;
    border-radius: 3px;
    font-size: 12px;
    z-index: 10;
  }
</style>
