<template>
  <v-text-field label="背景图/色" 
    placeholder="输入图片地址，点选颜色"
    v-model="inputValue.src">
    <v-btn icon slot="prepend" @click="onClear">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-menu slot="append" :close-on-content-click = "false" v-model="model">
      <template v-slot:activator="{ on }">
        <v-btn icon                            
          v-on="on"
        >
          <v-avatar size="30px" tile style="border:solid 1px;" :style="{background: inputValue.color}">
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
  name: 'vular-background-input',
  props: {
    value:{default:()=>{return {color:'', src:''}}},
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
      this.inputValue.color = ""
      this.inputValue.src = ""
    },

    onCancel(){
      this.model = false
      this.color = this.inputValue.color
    },

    onConfirm(){
      this.model = false
      this.inputValue.color = this.color
    }
  },

  watch:{
    model(val){
      if(val && this.inputValue.color){
        this.color = this.inputValue.color
      }
    }
  }
}
</script>

<style>
</style>