<template>
  <v-card-text class="pa-0">
    <v-hover
      v-for="(row, i) in inputValue"
      :key = "row.id"
      v-slot:default="{ hover }"
    >
      <ul class="px-6"
        :style = "Object.assign({
            'border-bottom': $store.state.vularApp.content.color + ' solid 1px',
            background: hover ? 'rgba(0, 0, 255, 0.1)' : ''
          },
          row['vular-styles']
        )"

        :class="schema.transshape ? 'vular-list-body-small' : 'vular-list-body'"
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
            flex: schema.transshape ? '' : column.flex,
            width: schema.transshape ? '' : column.width,
          }"
          class="py-5"
        >
          <div
            v-if="schema.transshape"
            class="column-title"
          >
            {{column.title}}
          </div>
          <div v-if="!row[column.field] || typeof(row[column.field]) == 'string'">
            {{row[column.field]}}
          </div>
          <VularNode
            v-else
            :schema = "row[column.field]"
          >
          </VularNode>
        </li>
        <li class="list-action"         
        :style="{
            width: !schema.transshape ? schema.actionsColumn.width :'',
          }"
        >
          <v-tooltip top
            v-for="(action, index) in schema.rowActions"
            v-if="hover && action.shortcut"
            :key="index"
          >
            <template v-slot:activator="{ on }">
              <v-btn icon color="primary" 
                v-on="on"
                :key = "action.id"
              >
                <v-icon small v-text="action.icon"></v-icon>
              </v-btn>
            </template>
            <span>{{action.title}}</span>
          </v-tooltip>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon color="primary"
                v-on="on"
              >
                <v-icon small>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list :color="$store.state.vularApp.content.card.color" class="px-2">
              <v-list-item link
                v-for="(action, index) in schema.rowActions"
                v-if="!action.shortcut"
                :key = "action.id"
              >
                <v-list-item-icon>
                  <v-icon color="primary" v-text="action.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{action.title}}</v-list-item-title>
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
  }

  .vular-list-body .list-action{
    justify-content: flex-end;
  }

  .vular-list-body .select-col{
    width: 50px;
  }

  .vular-list-body-small{
    list-style: none;
    padding: 0; 
    margin:0;
    display: flex; 
    flex-flow: column;
    padding: 0 !important;
    flex: 1;
  }

  .vular-list-body-small li{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding-right:20px;
    word-break:break-all;
    cursor: pointer;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }

  .vular-list-body-small .select-col, .vular-list-body-small .list-action{
    justify-content: flex-end;
  }

  .vular-list-body-small .column-title{
    font-weight: bold;
  }
</style>