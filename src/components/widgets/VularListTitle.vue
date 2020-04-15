<template>
  <ul class="vular-list-head">
    <li 
      v-for="(column, index) in schema.columns"
      :key="column.field"
      :style="{
        'margin-left' : schema.canSelect && index===0 ? '50px' : '',
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
      schema: {default : ()=>{return {}}},
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
  .vular-list-head{
    list-style: none;
    padding: 0; 
    margin:0;
    display: flex; 
    flex-flow: row;
    padding: 0 !important;
    flex: 1;
  }

  .vular-list-head li{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding-right:20px;
    word-break:break-all;
  }

  .vular-list-head .list-action{
    width: 150px;
    justify-content: flex-end;
  }
</style>