<template>
  <div style="padding-top: 90px;">
    <VularPageHeader>
      <template v-slot="{heightPercent}">
        <VularPageHeaderTitle
          :heightPercent="heightPercent"
        >
          <h1 class="page-title">
            <v-icon color="primary">mdi-speedometer</v-icon>
            仪表盘
          </h1>
        </VularPageHeaderTitle>
      </template>
    </VularPageHeader>
      <v-row
        justify="start"
      >
        <v-col cols="12" lg="8" md="6">
          <v-card :flat="$store.state.vularApp.content.flat" :color="$store.state.vularApp.content.card.color" :style="$store.state.vularApp.content.card.style">
              <v-card-title>
                <v-icon
                  large
                  left
                >
                  mdi-account-group-outline
                </v-icon>
                <span class="title font-weight-light">访客统计</span>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>             
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <!--HistogramChart></HistogramChart-->
              </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4" md="6">
          <v-card :flat="$store.state.vularApp.content.flat" :color="$store.state.vularApp.content.card.color" :style="$store.state.vularApp.content.card.style">
             <v-card-title>
                <v-icon
                  large
                  left
                >
                  mdi-map-marker
                </v-icon>
                <span class="title font-weight-light">区域占比</span>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>             
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <!--PieChart></PieChart-->
              </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row
        justify="start"
      >
        <v-col cols="12" md="5">
          <v-card :flat="$store.state.vularApp.content.flat" :color="$store.state.vularApp.content.card.color" :style="$store.state.vularApp.content.card.style">
             <v-card-title>
                <span class="title font-weight-light">订单</span>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>             
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <Orders></Orders>
              </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="7">
          <v-card :flat="$store.state.vularApp.content.flat" :color="$store.state.vularApp.content.card.color" :style="$store.state.vularApp.content.card.style">
             <v-card-title>
                <span class="title font-weight-light">项目</span>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>             
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <Projects></Projects>
              </v-card-text>
          </v-card>
        </v-col>
      </v-row>

  </div>
</template>

<script>
  //import HistogramChart from "./charts/HistogramChart"
  //import PieChart from "./charts/PieChart"
  import Orders from "./tables/Orders"
  import Projects from "./tables/Projects"
  export default {
    name: 'dashboard',
    components: {
      //HistogramChart,
      //PieChart,
      Orders,
      Projects,
    },
    props: {
    },
    data () {
      return {
        page:{
          header:{
            isStick: false,
            listHeaderHeight: '',
            heightPercent: 1,
          },
        },
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