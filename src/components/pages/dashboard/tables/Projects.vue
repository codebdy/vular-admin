<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    item-key="name"
    hide-default-footer
    :style="{backgroundColor:$store.state.vularApp.content.card.color}"
  >
    <template v-slot:item.user="{ item }">
      <v-avatar>
        <img
          :src="item.user"
        >
      </v-avatar>
    </template>  
    <template v-slot:item.progress="{ item }">
      <v-progress-linear
        :background-color="item.bgColor"
        :color="item.color"
        :value="item.progress"
      ></v-progress-linear>
    </template>  
  </v-data-table>
</template>
<script>
  export default {
    data () {
      return {
        headers: [
          { text: '名称', value: 'name' },
          { text: '工期', value: 'deadline' },
          { text: '负责人', value: 'user' },
          { text: '进度', value: 'progress' },
        ],
        desserts: [
          {
            name: '熄灭月亮',
            deadline: '1天',
            user: '/images/1.jpg',
            progress: '10%',
            bgColor:'success',
            color:'error',
          },
          {
            name: '重启太阳',
            deadline: '5天',
            user: '/images/2.jpg',
            progress: '30%',
            bgColor:'pink lighten-3',
            color:'pink lighten-1',
          },
          {
            name: '统计星星',
            deadline: '7天',
            user: '/images/3.jpg',
            progress: '90%',
            bgColor:'pink lighten-3',
            color:'pink lighten-1',
          },
          {
            name: '抽干太平洋',
            deadline: '1小时',
            user: '/images/4.jpg',
            progress: '80%',
            bgColor:'blue-grey',
            color:'lime',
          },
          {
            name: '休息',
            deadline: '1月',
            user: '/images/5.jpg',
            progress: '40%',
            bgColor:'pink lighten-3',
            color:'indigo',
          },
        ],
      }
    },
  }
</script>
