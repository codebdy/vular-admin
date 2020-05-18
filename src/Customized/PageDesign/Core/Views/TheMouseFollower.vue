<template>
  <div 
    class="mouse-follower"
    v-if="isShow"
    :key="followedElement._vid"
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
      document.addEventListener('mousemove', this.onMouseMove)
    },
    destroyed() {
      document.removeEventListener('mousemove', this.onMouseMove)
    },

    methods: {
      onMouseMove(event){
        if(this.followedElement){
          this.isShow = true
          this.left = event.clientX + 'px'
          this.top = event.clientY + 'px'
        }
      },
    },

    watch:{
      "$store.state.customizedApp.draggedElement":{
        handler(val){
          if(!val){
            this.isShow = false
          }
        }
      }
    }
  }
</script>

<style scoped>
  .mouse-follower{
    position:fixed;
    background: #222;
    color:#fff;
    padding:5px;
    pointer-events: none;
  }
</style>
