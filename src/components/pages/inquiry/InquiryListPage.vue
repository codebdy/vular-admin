<template>
  <v-content 
    :style="{
      background: $store.state.vularApp.content.color + ' url(' + $store.state.vularApp.content.src +')',
      'font-family': $store.state.vularApp.content.fontFamily
    }"
  >
  <VularListPageHeader></VularListPageHeader>
    <v-container fluid style="margin-top: 190px; ">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12">
          <v-card flat style="height:1000px; border:#000 solid 1px;"  :color="$store.state.vularApp.content.card.color" :style="$store.state.vularApp.content.card.style"
            class="px-6"
          >
            12<br>
            3<br>
            4<br>
            5<br>
            6<br>
            7<br>
            8<br>
            9<br>
            10<br>
            11<br>
            12<br>
            13<br>
            14<br>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>

</template>

<script>
  //import VularBackgrounInput from "./VularBackgrounInput"

  export default {
    name: 'inquiry-list-page',
    components: {
    },
    props: {
    },
    data () {
      return {
      }
    },
    computed:{
    },

    methods: {
    },

  }
</script>

<style>
</style>