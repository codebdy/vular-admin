<template>
  <v-container>
    <v-row>
      <v-col>
        <ValidationProvider v-slot="{ errors }" name="Name2" rules="required|max:10">
          <div>
            <v-text-field
              v-model="name2"
              :error-messages="errors"
              v-bind="propsTest"
              counter="12"
            ></v-text-field>
          </div>
        </ValidationProvider>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { required, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  export default {
    components: {
      ValidationProvider,
    },
    props: {
    },

    data: () => ({
      name2:'',
      propsTest:{
        label:"Test",
        required:true,
      },
    }),

    methods: {
    }
  }
</script>
