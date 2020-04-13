<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    item-key="name"
    hide-default-footer
    :style="{backgroundColor:$store.state.vularApp.content.cardColor}"
  >
    <template v-slot:item.status="{ item }">
      <v-chip
        class="ma-2"
        v-if="item.status ==='正在处理'"
        color="green"
        text-color="white"
        small
      >
        {{item.status}}
      </v-chip>
      <v-chip
        class="ma-2"
        v-else-if="item.status ==='已发货'"
        color="primary"
        small
      >
        {{item.status}}
      </v-chip>
      <v-chip
        class="ma-2"
        v-else
        small
      >
        {{item.status}}
      </v-chip>
    </template>  
  </v-data-table>
</template>
<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: '#',
            align: 'start',
            sortable: false,
            value: 'number',
          },
          { text: '产品', value: 'name' },
          { text: '价格', value: 'price' },
          { text: '状态', value: 'status' },
        ],
        desserts: [
          {
            number:"123",
            name: 'iPhone',
            price: '￥99.9',
            status: '完成',
          },
          {
            number:"124",
            name: '荣耀100',
            price: '￥199.9',
            status: '已发货',
          },
          {
            number:"143",
            name: '外星人',
            price: '￥399.9',
            status: '正在处理',
          },
          {
            number:"168",
            name: '电视机',
            price: '￥499.9',
            status: '正在处理',
          },
          {
            number:"174",
            name: '小嘟嘟',
            price: '￥2199.9',
            status: '正在处理',
          },
        ],
      }
    },
  }
</script>
