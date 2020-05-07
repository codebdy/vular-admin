export default {
  name : "vular-list-page",
  props : {
    title:'询盘列表',
    titleIcon:'mdi-bell-outline',
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
    "canSelect" : true,
    "transshapeBreakPoint" : "sm",
    "batchActions" : [
      {
        "icon": "mdi-bell-sleep-outline",
        "title": "标为已读",
        "shortcut": true,
        "action": {
          "name" : "doAction",
          "api" : "/api/action",
          params : {
            actionName:"/Water/Vular/Actions/BatchDownload",
            modelName:"/Water/Vular/Model/Posts",
          }
        },
      },
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
        "icon": "mdi-eye-outline",
        "title": "查看",
        "shortcut": true,
        "action":"action_id1",
        "action": {
          name:"openPage",
          to:{
            name: 'page', 
            params: { 
              pageId: 'water-vualr-view-notification',
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
      {
        "title":"",
        "shortcut": true,
        "rules":{
          "read" : "未读",
          "unread" : "已读",
        },
        "blankTitle":"全部",
        "blankValue":"none",
        "field":"cagegory"
      },
    ],
    "columns":[
      {
        "field":"icon",
        "title": "",
        "width":"60px"
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
        "title": "公司",
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