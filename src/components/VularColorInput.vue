<template>
  <v-text-field :label="label" 
    placeholder="输入或点选颜色"
    v-model="inputValue">
    <v-menu slot="append" :close-on-content-click = "false" v-model="model">
      <template v-slot:activator="{ on }">
        <v-btn icon                            
          v-on="on"
        >
          <v-avatar size="30px" tile style="border:solid 1px;" :style="{background: inputValue}">
          </v-avatar>
        </v-btn>
      </template>
      <v-card style="padding:10px;">
        <v-color-picker flat show-swatches swatches-max-height="200px" v-model="color"></v-color-picker>
        <div class="text-center my-2">
          <v-btn class="ma-2" tile @click="onCancel">取消</v-btn>
          <v-btn class="ma-2" tile color="primary" @click="onConfirm">确定</v-btn>
        </div>
      </v-card>
    </v-menu>
  </v-text-field>
</template>

<script>
export default {
  name: 'vular-color-input',
  props: {
    value: {default: ""},
    label: {default: "颜色"},
  },
  data () {
    return {
      color:"#ffffff",
      model:false,
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
    onClear(){
      this.inputValue = ""
    },

    onCancel(){
      this.model = false
      this.color = this.inputValue
    },

    onConfirm(){
      this.model = false
      this.inputValue = this.color
    }
  },

  watch:{
    model(val){
      if(val && this.inputValue.color){
        this.color = this.inputValue
      }
    }
  }
}
</script>

<style>
</style>