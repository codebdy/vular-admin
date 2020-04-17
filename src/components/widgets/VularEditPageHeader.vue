<template>
    <v-container fluid
      :style="{ 
        width:'calc(100% - ' + ($vuetify.application.left + $vuetify.application.right) + 'px)' ,
        top:$vuetify.application.top + 'px',
        //background: $store.state.vularApp.content.color,
        'box-shadow': isStick ? '2px 2px 5px rgba(0,0,0,0.1)' :'',
      }"
      v-scroll="onScroll"
      class="py-0 header-container"
      
    >
      <div
        v-if="heightPercent > 0"
        :color="$store.state.vularApp.content.color"
        :style="{
          height: (heightPercent*30 + 30) + 'px'
        }"
        class="d-flex flex-row align-center"
      >
        <v-btn text rounded dark class="ml-n4">文章列表</v-btn>
        <v-icon dark>mdi-chevron-right</v-icon>
        <v-chip rounded dark color="transparent">{{title}}</v-chip>
      </div>
      <div
        class="d-flex flex-row align-center"
        :style="{
          height: (heightPercent*30 + 30 + (heightPercent ===0 ? 30 : 0)) + 'px'
        }"
      >
        <v-btn text rounded dark class="ml-n4"
          v-if="heightPercent == 0"
        >文章列表</v-btn>
        <v-icon dark 
           v-if="heightPercent == 0"
        >mdi-chevron-right</v-icon>
        <v-chip rounded dark color="transparent"
          v-if="heightPercent == 0"
        >{{title}}</v-chip>
        <v-icon dark class="mr-4"
           v-if="heightPercent == 0"
        >mdi-chevron-right</v-icon>
        <v-text-field
          dark
          value="我是一阵风"
          :style="{'font-size': titleFontSize + 'px'}"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn outlined fab dark small>
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
        <v-btn outlined rounded dark large class="ml-6">
          取消
        </v-btn>

        <v-btn rounded text class="ml-6" large color="primary" 
          :style="{background: $store.state.vularApp.content.card.color}"
        >
          保存
        </v-btn>
      </div>
    </v-container>
</template>

<script>
import VularPageHeader from "./VularPageHeader"

export default {
  name: "vular-edit-page-header",
  extends:VularPageHeader,
  data: () => ({
  }),

  methods: {
  }
}
</script>

<style>
  .header-container{
    overflow: hidden;
  }

  .header-image{
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -o-filter: blur(20px);
    -ms-filter: blur(20px);
    filter: blur(20px);
  }
</style>
