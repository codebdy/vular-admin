<template>
  <div>
    <div>{{label}}</div>
    <div :style="styles" v-html="value"></div>
  </div>
</template>

<script>
  export default {
    name: "vular-label",
    components: {
    },
    props: {
      label:{default:''},
      value:{default:''},
      styles:{default:()=>{ return {} }},
    },

    data: () => ({
    }),

    methods: {
    },

    mounted(){
    }

  }
</script>
