export default {
  "name" : "vular-edit-page",
  "vularId" : "post-edit-1",
  defaultModel:{
    id:"1",
    title:"有时像蒲公英，看似自由自在，实则身不由己",
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
    titleField:'title',
  },
  children:[
  ],
}