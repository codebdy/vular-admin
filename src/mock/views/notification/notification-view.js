export default {
  "name" : "vular-simple-page",
    props : {
      title:'查看通知',
      vularId : "notification-view-1",
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

      layout:[
        {
          name:"vular-input",
          props:{
            field:"title",
            vInput:{
              name:"vular-label",
              props:{
                label:"",
                styles:{
                  'font-weight':'bold',
                  'font-size':'16px',
                }
              },
            },
          },
        },

        {
          name:"vular-input",
          props:{
            field:"created_at",
            vInput:{
              name:"vular-label",
              props:{
                label:"",
                styles:{
                  "margin-top":"10px",
                }
              },
            },
          },
        },

        {
          name:"vular-input",
          props:{
            field:"content",
            vInput:{
              name:"vular-label",
              props:{
                label:"",
                styles:{
                  "margin-top":"10px",
                }
              },
            },
          },
        },
      ],
    }
}