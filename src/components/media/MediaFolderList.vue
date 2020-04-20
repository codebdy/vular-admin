<template>
  <v-list color="transparent">
      <v-list-item
        link
        @click="onClick('root')"
        v-model="selectRoot"
        color="primary"
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
        v-model="item.selected"
        @click="onClick(i)"
        color="primary"
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
    name: "media-folder-list",
    components: {
    },
    props: {
      folders:{default:()=>{return []}},
    },

    data: () => ({
      selectRoot:true,
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
          this.selectRoot = true
        }
        else{
          this.selectRoot = false
        }
        for(var i = 0; i < this.ownFolders.length; i ++){
          this.$set(this.ownFolders[i], 'selected' ,i === index )
        }
      }
    }
  }
</script>
