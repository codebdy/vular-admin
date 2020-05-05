<template>
   <v-list-item link :to="schema.to" color="primary">
      <v-list-item-icon
        v-if="schema.prependIcon"
      >
        <v-badge
          :color="schema.badge.props.color"
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
    <v-list-item-content>
      <v-list-item-title>
        {{schema.title}}
      </v-list-item-title>
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
    computed:{
      //active(){
      //  return this.schema.id == this.$store.state.activedMenuItem
      //}
    },
    methods: {
      onClick(){
        //$bus.$emit('VularAction', this.schema.action)
        //this.$store.commit('activeMenuItem', this.schema.id)
      }
    },
  }
</script>

<style>
</style>