export default {
  name : "vular-list-page",
  props : {
    title:'管理员列表',
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
          pageId: 'water-vualr-view-post-admin-edit',
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
        "action":"action_id1",
        "action": {
          name:"openPage",
          to:{
            name: 'page', 
            params: { 
              pageId: 'water-vualr-view-post-admin-edit',
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
        "title": "登录名",
        "flex": "2" 
      },
      {
        "field":"name",
        "title": "姓名",
        "flex": "2" 
      },
      {
        "field":"email",
        "title": "邮箱",
        "flex": "4" 
      },
      {
        "field":"company",
        "title": "状态",
        "flex": "4" 
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