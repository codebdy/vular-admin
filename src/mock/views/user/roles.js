export default {
  name : "vular-list-page",
  props : {
    title:'角色列表',
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
        modelName:"/Water/Vular/Model/Inquiry",
      }
    },
    "addNewAction":{
      name:"openPage",
      to:{
        name: 'page', 
        params: { 
          pageId: 'water-vualr-view-post-role-edit',
        }
      },
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
            modelName:"/Water/Vular/Model/Admins",
          }
        },
      },
    ],
    "rowActions":[
      {
        "icon": "mdi-pencil",
        "title": "编辑",
        "shortcut": true,
        "action": {
          name:"openPage",
          to:{
            name: 'page', 
            params: { 
              pageId: 'water-vualr-view-post-role-edit',
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
        "field":"loginid",
        "title": "角色名",
        "flex": "2" 
      },
      {
        "field":"name",
        "title": "描述",
        "flex": "4" 
      },
      {
        "field":"email",
        "title": "状态",
        "flex": "2" 
      },
      {
        "field":"created_at",
        "title": "时间",
        "flex": "3"
      },
    ],
    "actionsColumn":{
      "width":"150px"
    }

  }
}