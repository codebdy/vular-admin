<template>
   <v-list-item link>
      <v-list-item-icon
        v-if="schema.prependIcon"
      >
        <v-badge
          color="pink"
          dot
          v-if="drawer.mini && schema.badge"
        >
          <v-icon v-text="schema.prependIcon"></v-icon>
        </v-badge>
     <v-icon
       v-else
       v-text="schema.prependIcon"
     ></v-icon>
   </v-list-item-icon>
   <v-list-item-title>
     {{schema.title}}
   </v-list-item-title>
   <div v-if="schema.badge">
      <v-chip
        v-bind="schema.badge.props"
      >{{schema.badge.text}}</v-chip>
    </div>
  </v-list-item>
</template>

<script>
export default {
  name: 'vular-menu-item',
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