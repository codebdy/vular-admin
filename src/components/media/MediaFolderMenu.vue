<template>
  <v-list color="transparent">
      <v-list-item
        link
        @click="onClick('root')"
      >
        <v-list-item-icon>
          <v-icon>mdi-folder-home-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="$t('media.root')"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-for="(item, i) in ownFolders"
        :key="i"
        @click="onClick(i)"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-folder-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  </v-list>
</template>

<script>
  export default {
    name: "media-folder-menu",
    components: {
    },
    props: {
      folders:{default:()=>{return []}},
    },

    data: () => ({
      ownFolders: []
    }),

    computed:{
    },

    mounted(){
      this.ownFolders = JSON.parse(JSON.stringify(this.folders))
    },

    methods: {
      onClick(index){
        if(index == 'root'){
          this.$emit('selectFolder', null)
        }
        else{
          this.$emit('selectFolder', this.ownFolders[index])
        }
      },
    }
  }
</script>
