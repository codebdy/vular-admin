import postBaseCard from "./post-base-card"
import contentCard from "./post-content-card"
import seoCard from "./post-seo-card"
import appearCard from "./post-appearance-card"
import categoryCard from "./post-category-card"
import additionCard from "./post-addition-card"

export default {
  "name" : "vular-edit-page",
  "vularId" : "post-edit-1",
  defaultModel:{
    id:"1",
    title:"有时像蒲公英，看似自由自在，实则身不由己",
    url:"https://vular.cn/test-sewfw",
    "seo.description":"描述Meta，has one 关联数据测试",
    medias:[],
  },
  props:{
    title : "文章编辑",
    breadcrumbs : [
      {
        title : "文章列表",
        action:{
          name:"openPage",
          to:{
            name: 'page', 
            params: { 
              pageId: 'water-vular-view-post_list',
            }
          },
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
          action:{
            name:"openPage",
            to:{
              name: 'page', 
              params: { 
                pageId: 'water-vular-view-post_list',
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
            pageId: 'water-vular-view-post_list',
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
            postBaseCard,
            seoCard,
            contentCard
          ],

        },
        {
          name:"v-col",
          props:{
            cols:"12",
            md:"4",
          },
          children:[
            {
              name:'VularMediaSelectCard',
              props:{
                cols:"3",
                field:"medias",
              },
            },
            appearCard,
            categoryCard,
            additionCard
          ]
        }
      ]
    },
  ],
}