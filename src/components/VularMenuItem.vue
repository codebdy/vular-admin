<template>
   <v-list-item link>
      <v-list-item-icon>
        <v-badge
          color="pink"
          dot
          v-if="mini"
        >
          <v-icon>mail</v-icon>
        </v-badge>
     <v-icon
       v-else
     >mail</v-icon>
   </v-list-item-icon>
   <v-list-item-title>
     询盘
   </v-list-item-title>
   <div>
      <v-chip
        color="pink"
        dark
      >6</v-chip>
    </div>
  </v-list-item>
</template>

<script>
export default {
  name: 'vular-menu-item',
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