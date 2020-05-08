export default {
  "name" : "vular-simple-page",
    props : {
      title:'编辑文章属性',
      vularId : "notification-view-1",
      loadAction:{
        "name" : "doAction",
        "api" : "/api/action",
        params : {
          actionName:"/Water/Vular/Actions/View",
          modelName:"/Water/Vular/Model/Notifications",
        }
      },
      md:'5',
      operateButtons:[
        {
          props:{
            text:true,
            rounded:true,
          },
          text:"取消",
          action:{
            name : "openPage",
            to:{
              name: 'page', 
              params: { 
                pageId: 'water-vular-view-post_attributes',
                moduleId:'post-attributes', 
              }
            },
          }
        },
        {
          props:{
            rounded:true,
            color:"primary",
            dark:true,
          },
          text:"保存",
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

      layout:[
        {
          name:"vular-input",
          props:{
            rules:"required",
            field:"slug",
            vInput:{
              name:"v-text-field",
              props:{
                label:"标识",
                outlined:true,
              },
            },
          },
        },

        {
          name:"vular-input",
          props:{
            rules:"",
            field:"name",
            vInput:{
              name:"v-text-field",
              props:{
                label:"名称",
                outlined:true,
              },
            },
          },
        }
      ],
    }
}