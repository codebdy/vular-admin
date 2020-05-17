<template>
  <div 
    class="the-cursor"
    v-if="isShow"
  >
    Cursor
  </div>
</template>

<script>
  export default {
    name: "the-cursor",
    components: {
    },
    props: {
    },

    data: () => ({
      isShow:false
    }),
    created(){
      window.$bus.$on('showCursor', this.onShow)
      window.$bus.$on('hideCursor', this.onHide)
    },
    
    mounted() {
    },
    destroyed() {
      window.$bus.$off('showCursor', this.onShow)
      window.$bus.$off('hideCursor', this.onHide)
    },

    methods: {
      onShow(event, position){
        console.log(event)
        if(position == 'in'){
          this.isShow = true
        }
      },

      onHide(){
        this.isShow = false
      },
    }
  }
</script>

<style scoped>
</style>
