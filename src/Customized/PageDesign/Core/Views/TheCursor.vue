<template>
  <div 
    class="the-cursor"
    v-if="isShow"
    :style="{
      width:width,
      top:top,
      left:left,
      height:height,
    }"
    :class="theClass"
  >
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
      isShow:false,
      width:"0",
      height:'0',
      top:"0%",
      left:"0",
      theClass:"",
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
        let rect = event.target.getBoundingClientRect()
        if(position == 'in'){
          this.isShow = true
          //this.theClass = 'vertical'
          this.left = rect.left + 'px'
          this.top = (rect.top + rect.height/2) +  'px'
          this.width = rect.width + 'px'
          this.height = 4 + 'px'
        }
      },

      onHide(){
        this.isShow = false
        this.theClass = ""
        //this.width=0
        //this.height=0
      },
    }
  }
</script>

<style scoped>
  .the-cursor{
    position: fixed;
    background: #5d78ff;
    border: #fff solid 1px;
    z-index: 10020;
    pointer-events: none;
    transition: width 0.3s, height 0.3s;
    will-change: auto;
  }

  .the-cursor.vertical{
    transform:rotate(90deg);
    -ms-transform:rotate(90deg); 	/* IE 9 */
    -moz-transform:rotate(90deg); 	/* Firefox */
    -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
    -o-transform:rotate(90deg); 	/* Opera */    
  }

  .the-cursor::after{
    position: absolute;
    content: '';
    width: 0; 
    height: 0;
    top: 0.15rem;
    left: calc(50% - 2px);
    border-width: 4px;
    border-style: solid;
    border-color:#5d78ff transparent  transparent  transparent;
  }

  .the-cursor::before{
    position: absolute;
    content: '';
    width: 0; 
    height: 0;
    top: -0.60rem;
    left: calc(50% - 2px);
    border-width: 4px;
    border-style: solid;
    border-color:transparent transparent #5d78ff  transparent;
  }

  .the-cursor.vertical::after{
    top: 0.25rem;

  }

</style>
