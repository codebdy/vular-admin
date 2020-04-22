<template>
  <v-dialog v-model="inputValue" persistent scrollable tile 
    max-width="calc(100vw - 100px)" 
  >
    <v-card
      class="media-select-dialog"
      :color="$store.state.vularApp.content.card.color" 
    >
      <v-toolbar flat dark color="primary">
        <v-toolbar-title>{{$t('media.select-medias')}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="onCancel">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <VularMediaWidget v-model="selectedMedias"></VularMediaWidget>
      <v-card-actions class="pa-5 media-select-dialog-actions">
        <v-spacer></v-spacer>
        <v-btn class="mr-5" outlined rounded @click="onCancel">{{$t('media.cancel')}}</v-btn>
        <v-btn color="primary" class="mr-5" rounded
          :disabled = "selectedMedias.length == 0"
          @click="onConfirm">{{$t('media.select')}}</v-btn>
        <span v-if="selectedMedias.length > 0">{{$t('media.selected-counts').replace('{0}', selectedMedias.length)}}</span>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

  export default {
    name: "media-select-dialog",
    components: {
    },
    props: {
      value:{default: false},
      single:{default:false},
    },

    data: () => ({
      selectedMedias : [],
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
      onCancel(){
        this.inputValue = false
        this.clearMediasSelection()
        this.selectedMedias = []
      },

      onConfirm(){
        this.inputValue = false
        this.clearMediasSelection()
        if(this.selectedMedias.length > 0){
          let medias = [...this.selectedMedias]
          this.$emit('selectMedias', this.single ? medias[0] : medias)
        }
        this.selectedMedias = []
      },

      clearMediasSelection(){
        this.selectedMedias.forEach(media=>{
          this.$set(media, 'selected', false)
        })
      },
    },

    watch:{
      inputValue(val){
        if(!val){
          this.selectedMedias = []
        }
      }
    },
  }
</script>
<style>
  .media-select-dialog-actions{
    box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
    height: 50px;
  }


</style>
