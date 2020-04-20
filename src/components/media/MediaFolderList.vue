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
      selectAble:{ default:true },
    },

    data: () => ({
      selectRoot:true,
      ownFolders: []
    }),

    computed:{
    },

    mounted(){
      this.ownFolders = JSON.parse(JSON.stringify(this.folders))
      this.selectRoot = this.selectAble
    },

    methods: {
      onClick(index){
        if(index == 'root'){
          this.$emit('selectFolder', null)
          this.selectRoot = true
        }
        else{
          this.selectRoot = false
          this.$emit('selectFolder', this.ownFolders[index])
        }
        this.selectRealFolder(index)
      },

      selectRealFolder(index){
        if(this.selectAble){
          for(var i = 0; i < this.ownFolders.length; i ++){
            this.$set(this.ownFolders[i], 'selected' ,i === index )
          }
        }
      }
    }
  }
</script>
