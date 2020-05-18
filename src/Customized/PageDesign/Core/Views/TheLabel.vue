<template>
  <div 
    class="mouse-follower"
  >
    Mouse Follower
  </div>
</template>

<script>
  export default {
    name: "the-label",
    components: {
    },
    props: {
    },

    data: () => ({
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
      onMouseMove(){
      },
    }
  }
</script>

<style scoped>
</style>
