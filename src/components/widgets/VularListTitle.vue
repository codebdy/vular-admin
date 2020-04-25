<template>
  <ul class="vular-list-title">
    <li 
      v-for="(column, index) in columns"
      :key="column.field"
      :style="{
        'margin-left' : canSelect && index===0 ? '50px' : '',
        flex: column.flex,
        width: column.width,
      }"
    >
      {{column.title}}
    </li>
    <li class="list-action"></li>
  </ul>
</template>

<script>
  export default {
    name: 'vular-list-title',
    props: {
      columns: {default : ()=>{return []}},
      canSelect: {default: true},
    },

    data () {
      return {
      }
    },

    computed:{
    },

    methods: {
    },
  }
</script>

<style>
  .vular-list-title{
    list-style: none;
    padding: 0; 
    margin:0;
    display: flex; 
    flex-flow: row;
    padding: 0 !important;
    flex: 1;
  }

  .vular-list-title li{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding-right:20px;
    word-break:break-all;
  }

  .vular-list-title .list-action{
    width: 150px;
    justify-content: flex-end;
  }
</style>