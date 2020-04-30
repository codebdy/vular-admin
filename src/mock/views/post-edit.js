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
    saveButton:{
        action:{
        "name" : "doAction",
        "api" : "/api/action",
        "belongsTo" : "post-edit-1",
        params : {
          actionName:"/Water/Vular/Actions/Save",
          modelName:"/Water/Vular/Model/Posts",
        },

        successAction:{
          name:"openPage",
          api:"/api/view",
          view:'\\Water\\Vular\\View\\PostList',
        },
      },
    },

    cancelButton:{
      action:{
        name:"openPage",
        api:"/api/view",
        view:'\\Water\\Vular\\View\\PostList',
      },
    },

    menuItems:[
      {
        icon:"mdi-shield-check",
        title:"审核",
        action:{
          name:"openPage",
          api:"/api/view",
          view:'\\Water\\Vular\\View\\PostList',
        },
      },     
      {
        icon:"mdi-publish",
        title:"发布",
        action:{
          //name:"openPage",
          //api:"/api/view",
          //view:'\\Water\\Vular\\View\\PostList',
        },
      }     
    ],
  },
  children:[
    {
      name:"v-row",
      children:[
        {
          name:"v-col",
          props:{
            cols:"12",
            md:"8",
          },

          children:[
            {
              name:"VularFormCard",
              props:{
                title:"基本信息",
              },
              children:[
                {
                  name:"vular-input",
                  props:{
                    rules:"required|max:10",
                    vInput:{
                      name:"v-text-field",
                      props:{
                        label:"标题",
                        "prepend-icon":"mdi-format-title",
                      },
                      field:"title",
                    },
                  },
                },
              ],
            },
          ],

        },
      ]
    },
  ],
}