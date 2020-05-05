<template>
  <v-skeleton-loader
    type="card-heading"
    v-if="inputValue == 'loading'" 
  >
  </v-skeleton-loader>

  <ValidationProvider v-slot="{ errors }" 
    :name="vInput.props.label" 
    :rules="rules"
    v-else
  >
    <component
      :is="vInput.name" 
      v-bind="vInput.props"
      :error-messages="errors"
      :class="vInput.classes"
      :style="vInput.style"
      v-model="inputValue[field]"
    >
    </component>
  </ValidationProvider>
</template>

<script>
  import { ValidationProvider } from 'vee-validate'
  
  export default {
    name: "vular-input",
    components: {
      ValidationProvider
    },
    props: {
      vInput:{default:()=>{ return{} }},
      rules:{default:''},
      value:{default:()=>{ return{} }},
      field:{default:''},
    },

    data: () => ({
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

    mounted(){
      //console.log(this.field,this.inputValue[this.field])
    },

    methods: {
    },
  }
</script>
