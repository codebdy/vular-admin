<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
    }),
  }
</script>

<style>
#app {
}

/*::-webkit-scrollbar {
  width: 0.3rem;
  height: 0.3rem;
}
::-webkit-scrollbar-track {
  border-radius: 0;
}
::-webkit-scrollbar-thumb {
  border-radius: 0;
  background: #535353;
  transition: all .2s;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #606060;
}

::-webkit-scrollbar-corner{
  background: #232323;
  }*/
  body{
    font-size:13px;
  }

  .flex-1{
    flex:1;
  }

  .shrink-0{
    flex-shrink:0;
  }

</style>
