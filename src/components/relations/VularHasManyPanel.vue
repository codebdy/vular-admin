<template>
  <v-skeleton-loader
    type="card-heading"
    v-if="inputValue == 'loading'" 
  >
  </v-skeleton-loader>
  <v-card class="mt-5"
    v-else
  >
    <v-toolbar v-if="items && items.length == 0" flat >
      <v-toolbar-title>{{title}} </v-toolbar-title>
    </v-toolbar>
    <div v-for="(item,index) in items">
      <v-toolbar light flat >
        <v-toolbar-title> {{title}} #{{index+1}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn light icon @click="remove(index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <VularNode
          v-for="(schema, index) in layout" 
          :schema = "schema"
          :key = "index" 
          v-model="inputValue">
        </VularNode>
      </v-card-text>
    </div>
    <v-btn 
      fab
      bottom
      right
      absolute
      small
      color="info" @click="add">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
  export default {
    name: 'vular-has-many-panel',
    props:{
      //flexs:Array,
      title:String,
      value:{default:null},
      layout:{default:()=>{ return[] }},
      field:String,
    },

    data: function () {
      return {
        valid: false,
        items:[],
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
    created () {

    },

    methods: {

      add(){
        var item = {}
        for(var i = 0; i <this.flexs.length; i++){
          item[this.flexs[i].field.field] = null
        }
        this.items.push(item)
      },

      remove(i){
        if(confirm('Are you sure to delete?')){
          this.items.splice(i,1)
        }
      },

    },

  };
</script>
