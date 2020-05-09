<template>
  <v-skeleton-loader
    type="card-heading"
    v-if="inputValue == 'loading'" 
  >
  </v-skeleton-loader>
  <v-card 
    v-else
    class="mt-5"
    flat
    :color="$store.state.vularApp.content.card.color" 
    :style="$store.state.vularApp.content.card.style"
  >
    <v-toolbar v-if="!inputValue[this.field] || inputValue[this.field].length == 0" flat >
      <v-toolbar-title>{{title}} </v-toolbar-title>
    </v-toolbar>
    <div v-for="(item,index) in inputValue[field]">
      <v-divider v-if="index > 0"></v-divider>
      <v-toolbar flat >
        <v-toolbar-title> {{title}} #{{index+1}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="onRemove(index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <VularNode
          v-for="(schema, index) in layout" 
          :schema = "schema"
          :key = "index" 
          v-model="inputValue[field][index]">
        </VularNode>
      </v-card-text>
    </div>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn 
        icon
        color="primary" @click="onAdd">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
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
        //items:[],
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

      onAdd(){
        var item = {}
        if(!this.inputValue[this.field]){
          this.$set(this.inputValue, this.field, [] )
        }
        //for(var i = 0; i <this.flexs.length; i++){
        //  item[this.flexs[i].field.field] = null
        //}
        this.inputValue[this.field].push(item)
      },

      onRemove(i){
        if(confirm('Are you sure to delete?')){
          this.inputValue[this.field].splice(i,1)
        }
      },

    },

  };
</script>
