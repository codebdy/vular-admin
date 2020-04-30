<template>
  <div>
    <div>{{label}}</div>
    <div :style="{color:color}">{{value}}</div>
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
      color:{default:''},
    },

    data: () => ({
    }),

    methods: {
    },

    mounted(){
    }

  }
</script>
