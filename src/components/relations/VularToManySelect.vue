<template>
  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    v-bind="attributes"
    item-text="title"
  ></v-autocomplete>
</template>

<script>
  export default {
    name: "vular-to-many-select",
    extends:"v-autocomplete",
    components: {
    },
    props: {
      queryAction : { default:null },
    },

    computed:{
      attributes(){
        let attrs = Object.assign( {}, this.$attrs )
        delete attrs.queryAction
        return attrs
      }
    },

    data () {
      return {
        loading: false,
        items: [],
        search: null,
        select: null,
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods: {
      querySelections (v) {
        //console.log('querySelections:' + v)
        this.loading = true
        let action = this.queryAction
        $axios.post(action.api, {params: action.params, data : {keywords:v}})
        .then((res)=>{
          this.loading = false
          this.items = res.data
        })


        // Simulated ajax query
        /*setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)*/
      },
    },
  }
</script>
