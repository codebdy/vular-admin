export default {
  name:"VularFormCard",
  props:{
    title:"显示",
  },
  children:[
    {
      name:"vular-input",
      props:{
        rules:"required|max:50",
        field:"order",
        vInput:{
          name:"v-text-field",
          props:{
            label:"显示顺序",
            "prepend-icon":"mdi-sort",
          },
        },
      },
    },
    {
      name:"vular-input",
      props:{
        rules:"",
        field:"additions",
        vInput:{
          name:"v-select",
          props:{
            label:"附加属性",
            "prepend-icon":"mdi-bookmark-plus-outline",
            multiple: true,
            chips : true,
            items : ['首页', '热门', '推荐', '置顶'],
          },
        },
      },
    },
  ]

}
