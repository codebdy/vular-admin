export default {
  "name" : "vular-simple-page",
    props : {
      title:'查看通知',
      vularId : "notification-view-1",
      backAction:{
        name : "openPage",
        to:{
          name: 'page', 
          params: { 
            pageId: 'water-vualr-view-notification-list',
            moduleId:'notifications', 
          }
        },
      },
      loadAction:{
        "name" : "doAction",
        "api" : "/api/action",
        params : {
          actionName:"/Water/Vular/Actions/View",
          modelName:"/Water/Vular/Model/Notifications",
        }
      },
      operateButtons:[
        {
          props:{
            text:true,
            rounded:true,
            color:"primary",
          },
          text:"删除",
          action:{
            name:"doAction"
          }
        },
        {
          props:{
            rounded:true,
            color:"primary",
            dark:true,
          },
          text:"确定",
          action:{
            name : "openPage",
            to:{
              name: 'page', 
              params: { 
                pageId: 'water-vualr-view-notification-list',
                moduleId:'notifications', 
              }
            },
          }
        },
      ],
    }
}