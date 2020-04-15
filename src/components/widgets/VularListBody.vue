<template>
  <v-card-text class="pa-0">
    <ul class="vular-list-body px-6"
      v-for="(row, i) in inputValue"
      :key = "row.id"
      :style = "{
        'border-bottom': $store.state.vularApp.content.color + ' solid 1px',
      }"
    >
      <li v-if="schema.canSelect" class="select-col">
        <v-checkbox
          v-model="row.selected"
        ></v-checkbox>
      </li>
      <li 
        v-for="(column, index) in schema.columns"
        :key="column.field"
        :style="{
          flex: column.flex,
          width: column.width,
        }"
        class="py-5"
      >
        {{row[column.field]}}
      </li>
      <li class="list-action"         
      :style="{
          width: schema.actionsColumn.width,
        }"
      >
        <v-btn icon color="primary" >
          <v-icon small>mdi-eye-outline</v-icon>
        </v-btn>
        <v-btn icon color="primary" >
          <v-icon small>mdi-dots-horizontal</v-icon>
        </v-btn>
      </li>
    </ul>
  </v-card-text>
</template>

<script>
  export default {
    name: 'vular-list-body',
    props: {
      schema: {default : ()=>{return {}}},
      value:{default:[]}
    },

    data () {
      return {
      }
    },

    computed:{
      inputValue: {
        get:function() {
          return this.value;
        },
        set:function(val) {
          this.$emit('input', val);
        },
      },
    },

    methods: {
    },
  }
</script>

<style>
  .vular-list-body{
    list-style: none;
    padding: 0; 
    margin:0;
    display: flex; 
    flex-flow: row;
    padding: 0 !important;
    flex: 1;
  }

  .vular-list-body li{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding-right:20px;
    word-break:break-all;
  }

  .vular-list-body .list-action{
    width: 150px;
    justify-content: flex-end;
  }

  .vular-list-body .select-col{
    width: 50px;
  }
</style>