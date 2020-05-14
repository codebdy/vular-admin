<template>
   <v-subheader v-if="!drawer.mini">{{schema.title}}</v-subheader>
</template>

<script>
export default {
  name: 'vular-subheader',
  props: {
    schema:{default:()=>{return {}}},
    drawer:{default:()=>{return {}}},
  },
  data () {
    return {
    }
  },


  methods: {
  },
}
</script>

<style>
</style>