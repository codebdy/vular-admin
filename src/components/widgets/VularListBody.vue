<template>
  <v-card-text class="pa-0">
    <v-hover
      v-for="(row, i) in inputValue"
      :key = "row.id"
      v-slot:default="{ hover }"
    >
      <ul class="vular-list-body px-6"
        :style = "{
          'border-bottom': $store.state.vularApp.content.color + ' solid 1px',
          background: hover ? 'rgba(0, 0, 255, 0.1)' : ''
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
          <v-btn icon color="primary" v-if="hover">
            <v-icon small>mdi-eye-outline</v-icon>
          </v-btn>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon color="primary"
                v-on="on"
              >
                <v-icon small>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list :color="$store.state.vularApp.content.card.color" class="px-2">
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-pencil</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>编辑</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-content-copy</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>克隆</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-trash-can</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>删除</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </li>
      </ul>
    </v-hover>
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
    cursor: pointer;
  }

  .vular-list-body .list-action{
    width: 150px;
    justify-content: flex-end;
  }

  .vular-list-body .select-col{
    width: 50px;
  }
</style>