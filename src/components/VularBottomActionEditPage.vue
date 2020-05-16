<template>
  <v-container fluid style="padding-bottom: 100px;">
    <h2>{{title}}</h2>
    <slot></slot>
    <div class="bottom-nav" 
      :style="{
        left:($vuetify.application.left) + 'px', 
        width:'calc(100vw - '+ ($vuetify.application.left + $vuetify.application.right) + 'px)',
        background:$store.state.vularApp.content.card.color,
      }"
    >
      <v-spacer></v-spacer>
      <v-btn x-large color="primary" class="font-weight-bold" dark width="200">
        保存
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: "vular-bottom-action-edit-page",
    components: {
    },
    props: {
      title:{default:""}
    },

    data: () => ({
    }),

    methods: {
    }
  }
</script>

<style scoped>
  .bottom-nav{
    position: fixed;
    bottom: 0;
    border-top:rgba(0,0,0, 0.1) solid 1px; 
    box-shadow: 0px 0px 5px rgba(0,0,0,0.05);
    display: flex;
    flex-flow: row;
    padding:10px 30px;
    padding-left:0; 
  }
</style>