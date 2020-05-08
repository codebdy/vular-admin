export default {
  name:"VularFormCard",
  props:{
    title:"基本信息",
  },
  children:[
    {
      name:"vular-input",
      props:{
        rules:"required|max:50",
        field:"title",
        vInput:{
          name:"v-text-field",
          props:{
            label:"商品名",
            "prepend-icon":"mdi-format-title",
          },
        },
      },
    },
    {
      name:"vular-input",
      props:{
        rules:"required",
        field:"slug",
        vInput:{
          name:"v-text-field",
          props:{
            label:"Slug",
            "prepend-icon":"mdi-identifier",
          },
        },
      },
    },

    {
      name:"vular-input",
      props:{
        rules:"required",
        field:"summary",
        vInput:{
          name:"v-textarea",
          props:{
            label:"简介",
            "prepend-icon":"mdi-card-text-outline",
          },
        },
      },
    },

    {
      name:"vular-input",
      props:{
        rules:"required",
        field:"tags",
        vInput:{
          name:"v-combobox",
          props:{
            label:"标签",
            "prepend-icon":"mdi-tag-multiple-outline",
            multiple: true,
            hint:"可添加多个标签，回车分割",
            attach: true,
            chips: true,
            items:['foo', 'bar', 'fizz', 'buzz'],
          },
        },
      },
    },
  ],
}
