<template>
  <v-list-group
    v-model="schema.active"
    no-action>

    <template v-slot:activator>
      <v-list-item-icon>
        <v-badge
        color="pink"
        dot
        v-if="drawer.mini"
        >
        <v-icon v-text="schema.prependIcon"></v-icon>
      </v-badge>
      <v-icon
        v-else
        v-text="schema.prependIcon"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="schema.title"></v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon v-if="schema.appendIcon">
        <v-icon v-text="schema.appendIcon"></v-icon>
      </v-list-item-icon>
      <div v-if="schema.chip">
        <v-chip
          v-bind="schema.chip.props"
        >{{schema.chip.title}}</v-chip>
      </div>
      <div v-if="schema.badge">
        <v-chip
          v-bind="schema.badge.props"
        >{{schema.badge.title}}</v-chip>
      </div>
    </template>
    <component
      v-if="schema.children"     
      v-for="subSchema in schema.children"
      :key="subSchema.title"
      :is="subSchema.name" 
      :schema="subSchema"
      :drawer="drawer"
    >
    </component>
    <div>
    </div>
  </v-list-group>
</template>

<script>
import VularMenuItem from "./VularMenuItem"
export default {
  name: 'vular-menu-item-group',
  components: {
    VularMenuItem,
  },
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