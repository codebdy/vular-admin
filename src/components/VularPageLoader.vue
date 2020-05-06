<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
    v-if="loading"
  >
      <v-container>
        <v-skeleton-loader
          type="table-heading, list-item-two-line, image, table-tfoot" 
        >
        </v-skeleton-loader>
      </v-container>
  </v-content>
  <VularNode v-else-if="page" :schema = "page"></VularNode>
</template>

<script>
  export default {
    name: "vular-page-loader",
    components: {
    },
    props: {
    },

    data: () => ({
      loading:false,
      page:null,
    }),

    methods: {
      init(){
        //console.log('init page:' + this.$route.params.pageId)
        let page = this.$store.state.pagesCache.get(this.$route.params.pageId)
        if(page){
          this.page = page
          //console.log('从缓存中取页面')
          return
        }

        this.load()
      },

      load(){
        this.loading = true
        $axios.post('/api/view', this.$route.params)
        .then((res)=>{
          this.$store.commit("globals", res.data.globals)
          let page = res.data.pageData
          this.$set(this, 'page', page)
          this.$store.commit('cachePage', {
            pageId: this.$route.params.pageId, 
            page: page
          })
          this.loading = false
        })
        .catch((error)=>{
          this.loading = false
          this.$store.commit('error', {
            error:error,
            action:this.$route.params.pageId,
            //data:data
          })
        });
      }
    },

    mounted(){
      this.init()
    },

    watch: {
      "$route": "init",
    }
  }
</script>
