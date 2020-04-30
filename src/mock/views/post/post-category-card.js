export default {
  name:"VularFormCard",
  props:{
    title:"分类",
  },
  children:[
    {
      name:"vular-input",
      props:{
        rules:"",
        field:"category",
        vInput:{
          name:"v-treeview",
          props:{
            "selection-type":"leaf",
            selectable:true,
            'return-object':true,
            items: [
              {
                id: 1,
                name: '男装',
                children: [
                  { id: 2, name: '绅士' },
                  { id: 3, name: '休闲' },
                ],
              },
              {
                id: 4,
                name: '女鞋',
                children: [
                  { id: 5, name: '辣妹' },
                  { id: 6, name: '淑女' },
                ],
              },
              {
                id:7,
                name:"运动",
                children: [
                  { id: 8, name: '滑板' },
                  { id: 9, name: '拖鞋' },
                ],
              },
            ],          
          },
        },
      },
    },
  ]

}
