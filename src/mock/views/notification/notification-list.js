export default {
  name : "vular-list-page",
  props : {
  	title:'通知列表',
  	titleIcon:'mdi-bell-outline',
    vularId : "notifications-list-1",
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
      "belongsTo" : "post-list-1",
      params : {
        actionName:"/Water/Vular/Actions/Query",
        modelName:"/Water/Vular/Model/Notification",
      }
    },
    "canSelect" : true,
    "transshapeBreakPoint" : "sm",
    "batchActions" : [
      {
        "icon": "mdi-bookmark-check-outline",
        "title": "标为已读",
        "shortcut": true,
        "action": {
          "name" : "doAction",
          "api" : "/api/action",
          "belongsTo" : "post-list-1",
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
          "belongsTo" : "post-list-1",
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
          api:"/api/view",
          view:'\\Water\\Vular\\View\\PostEdit',
          params : {
            modelName:"/Water/Vular/Model/Posts",
          }
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
        "title":"分类",
        "shortcut": true,
        "rules":{
          "cat1" : "Category1",
          "cat2" : "Category2",
          "cat3" : "Category3",
          "cat4" : "Category4",
          "cat5" : "Category5",
          "cat6" : "Category6"
        },
        "blankTitle":"全部分类",
        "blankValue":"none",
        "field":"cagegory"
      },
      {
        "title":"属性",
        "shortcut": true,
        "rules":{
          "attr1" : "Attribute1",
          "attr2" : "Attribute2",
          "attr3" : "Attribute3",
          "attr4" : "Attribute4",
          "attr5" : "Attribute5",
          "attr6" : "Attribute6"
        },
        "blankTitle":"全部属性",
        "blankValue":"none",
        "field":"attribute"
      },
      {
        "title":"阅读量",
        "rules":{
          "sales1" : "最好",
          "sales2" : "最差",
          "sales3" : "一般"
        },
        "blankTitle":"全部",
        "blankValue":"none",
        "field":"readings"
      },
      {
        "title":"状态",
        "rules":{
          "ststus1" : "正在编辑",
          "ststus2" : "已经发布",
          "ststus3" : "未发布",
          "ststus4" : "被拒绝"
        },
        "blankTitle":"全部",
        "blankValue":"none",
        "field":"status"
      }
    ],
    "columns":[
      {
        "field":"icon",
        "title": "",
        "width":"60px"
      },
      {
        "field":"title",
        "title": "标题",
        "width":"",
        "flex": "4" 
      },
      {
        "field":"created_at",
        "title": "时间",
        "width":"",
        "flex": "2"
      },
    ],
    "actionsColumn":{
      "width":"150px"
    }

  }
}