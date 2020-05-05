<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="inputValue"
        readonly
        v-bind="$attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">{{$t('base.cancel')}}</v-btn>
      <v-btn text color="primary" @click="onConfirm">{{$t('base.confirm')}}</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
  export default {
    name: "vular-date-field",
    extends:"v-text-field",
    components: {
    },

    props:{
      value:{default:''},
    },

    data: () => ({
      menu:false,
      date:new Date().toISOString().substr(0, 10),
    }),

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
      onConfirm(){
        this.inputValue = this.date
        this.menu = false
      }
    },

    mounted(){
      //console.log(this.inputValue)
    },
  }
</script>
