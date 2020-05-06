<template>
    <v-dialog v-model="inputValue" scrollable max-width="500px">
      <v-card>
        <v-card-title>{{$t('notification.view')}}</v-card-title>
        <v-divider></v-divider>
        <v-skeleton-loader
            type="article"
            v-if="loading" 
          >
        </v-skeleton-loader>
        <v-card-text v-else style="max-height: calc(100vh - 300px);" class="pa-5">
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            dark
            rounded
            class="mr-5"
            @click="inputValue = false"
          >
            {{$t('base.close')}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>    
  </v-fab-transition>
</template>

<script>
  export default {
    components: {
    },
    props: {
      value:{default: false},
      notification:{default: null},
      viewAction:{default: null},
      vularId: {default: 'view-notification-dialog'},
    },
    data: () => ({
      loading:false,
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
    }
  }
</script>
