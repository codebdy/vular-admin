export default {
  name : "vular-list-page",
  props : {
    title:'文章属性列表',
    vularId : "inquires-list-1",
    defaultModel:{
      keywords:'',
      page:1,
      pagination:'',
      //fliters
      cagegory:'none',
      attribute:'none',
      readings:'none',
      status:'none',
    },
    "queryAction":{
      "name" : "doAction",
      "api" : "/api/action",
      params : {
        actionName:"/Water/Vular/Actions/Query",
        modelName:"/Water/Vular/Model/PostAttribute",
      }
    },
    "canSelect" : true,
    "transshapeBreakPoint" : "sm",
    "batchActions" : [
      {
        "icon": "mdi-delete-sweep-outline",
        "title": "删除",
        "shortcut": true,
        "action": {
          "name" : "doAction",
          "api" : "/api/action",
          params : {
            actionName:"/Water/Vular/Actions/BatchDelete",
            modelName:"/Water/Vular/Model/Posts",
          }
        },
      },
    ],
    "rowActions":[
      {
        "icon": "mdi-pencil",
        "title": "编辑",
        "shortcut": true,
        "action":"action_id1",
        "action": {
          name:"openPage",
          to:{
            name: 'page', 
            params: { 
              pageId: 'water-vualr-view-post-attribute',
            }
          },
        },
      },
      {
        "icon": "mdi-trash-can",
        "title": "删除",
        "shortcut": true,
        "action":"action_id4"
      }
    ],
    "filters":[
    ],
    "columns":[
      {
        "field":"slug",
        "title": "标识",
        "flex": "4" 
      },
      {
        "field":"name",
        "title": "名称",
        "flex": "4" 
      },
    ],
    "actionsColumn":{
      "width":"150px"
    }

  }
}