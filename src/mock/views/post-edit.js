export default {
  "name" : "vular-edit-page",
  defaultModel:{
    id:"1",
  },
  props:{
    title : "文章编辑",
    breadcrumbs : [
      {
        title : "文章列表",
        action:{
          name:"openPage",
          api:"/api/view",
          view:'\\Water\\Vular\\View\\PostList',
        },
      }
    ],
  },
  children:[
  ],
}