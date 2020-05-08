import productBaseCard from "./product-base-card"
import contentCard from "./product-content-card"
import seoCard from "./product-seo-card"
import appearCard from "./product-appearance-card"
import categoryCard from "./product-category-card"
import additionCard from "./product-addition-card"

export default {
  "name" : "vular-edit-page",
  "vularId" : "product-edit-1",
  /*defaultModel:{
    id:"1",
    title:"有时像蒲公英，看似自由自在，实则身不由己",
    url:"https://vular.cn/test-sewfw",
    "seo.description":"描述Meta，has one 关联数据测试",
    medias:[],
  },*/
  props:{
    title : "商品编辑",
    breadcrumbs : [
      {
        title : "商品列表",
        action:{
          name:"openPage",
          to:{
            name: 'page', 
            params: { 
              pageId: 'water-vular-view-product_list',
            }
          },
        },
      }
    ],
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
        //"belongsTo" : "product-edit-1",
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
                pageId: 'water-vular-view-product_list',
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
            pageId: 'water-vular-view-product_list',
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
              md:"8",
            },

            children:[
              {
                name:'VularMediaSelectCard',
                props:{
                  field:"medias",
                },
              },
              productBaseCard,
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
              appearCard,
              categoryCard,
              additionCard
            ]
          }
        ]
      },
    ],
  },
}