<template>
  <div 
    class="mouse-follower"
    :style="{
      left:x,
      top:y,
    }"
  >
    Mouse Follower
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
      x:0,
      y:0,
    }),
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
        if(window.draggedElement){
          this.x = event.offsetX
          this.y = event.offsetY
        }
      },
    }
  }
</script>

<style scoped>
</style>
