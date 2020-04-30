<template>
  <ValidationProvider v-slot="{ errors }" :name="vInput.props.label" :rules="vInput.rules">
    <component
      :is="vInput.name" 
      v-bind="vInput.props"
      :error-messages="errors"
      :class="vInput.classes"
      :style="vInput.style"
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
    },

    data: () => ({
    }),

    mounted(){
      //console.log(this.vInput)
    },

    methods: {
    },
  }
</script>
