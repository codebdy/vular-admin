<template>
  <v-container>
    <v-row>
      <v-col>
        <ValidationProvider v-slot="{ errors }" name="Name2" rules="required|max:10">
          <div>
            <v-text-field
              v-model="name2"
              :counter="10"
              :error-messages="errors"
              label="Name2"
              required
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
    }),

    methods: {
    }
  }
</script>
