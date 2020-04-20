<template>
  <v-dialog
    v-if="media"
    v-model="inputValue"
    max-width="800px"
    max-height="calc(100% - 200px)"
    scrollable
  >
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title>{{$t('media.view-media')}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="inputValue = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <img 
          v-if="media.type == 'image'" 
          :src="media.src"
          style="width: 100%" 
        />
      </v-card-text>
      <v-card-actions>
        url : {{media.src}}
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'media-view',
    props:{
      media:Object,
      value:{default:false}
    },

    data: function () {
      return {
        //fab: false,
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
    }
  };
</script>

<style">
  
</style>