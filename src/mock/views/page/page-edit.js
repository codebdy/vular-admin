import baseCard from './page-base-card'
import seoCard from './page-seo-card'

export default{
  "name" : "vular-edit-page",
  "vularId" : "page-edit-1",
  props:{
    title : "页面编辑",
    breadcrumbs : [
      {
        title : "页面列表",
        action:{
          name:"openPage",
          to:{
            name: 'page', 
            params: { 
              pageId: 'water-vualr-view-orders',
            }
          },
        },
      }
    ],
    isSimpleHeader:true,
    titleField:'title',
    loadAction:{
      "name" : "doAction",
      "api" : "/api/action",
      params : {
        actionName:"/Water/Vular/Actions/Load",
        modelName:"/Water/Vular/Model/Posts",
      }
    },
    saveButton:{
        action:{
        "name" : "doAction",
        "api" : "/api/action",
        //"belongsTo" : "post-edit-1",
        params : {
          actionName:"/Water/Vular/Actions/Save",
          modelName:"/Water/Vular/Model/Posts",
        },

        successAction:{
          action:{
            name:"openPage",
            to:{
              name: 'page', 
              params: { 
                pageId: 'water-vualr-view-orders',
              }
            },
          },
        },

        validate:true,
      },
    },

    cancelButton:{
      action:{
        name:"openPage",
        to:{
          name: 'page', 
          params: { 
            pageId: 'water-vualr-view-orders',
          }
        },
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
    layout:[
      {
        name:"v-row",
        children:[
          {
            name:"v-col",
            props:{
              cols:"12",
              md:"12",
            },

            children:[
              baseCard,
              {
                name:"VularFormCard",
                props:{
                  title:"内容",
                },
                children:[
                  {
                    name:'v-textarea',
                    props:{
                      field:'page',
                    }
                  }
                ],
              },
              seoCard
            ],

          },
        ]
      },
    ],
  },
}