import customerContract from "./customer-contract-card"
import factContract from "./factory-contract-layout"

export default {
  "name" : "vular-edit-page",
  "vularId" : "post-edit-1",
  /*defaultModel:{
    id:"1",
    title:"有时像蒲公英，看似自由自在，实则身不由己",
    url:"https://vular.cn/test-sewfw",
    "seo.description":"描述Meta，has one 关联数据测试",
    medias:[],
  },*/
  props:{
    title : "订单编辑",
    breadcrumbs : [
      {
        title : "订单列表",
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
              customerContract,
              {
                name:"VularHasManyPanel",
                props:{
                  title:"工厂合同",
                  layout:[
                    factContract
                  ]
                },
              },
              {
                name:'VularHasManyTableCard',
                props:{
                  title:'规格',
                }
              },
            ],

          },
        ]
      },
    ],
  },
}