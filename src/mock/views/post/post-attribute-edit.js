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