export default {
  "name" : "vular-simple-page",
    props : {
      title:'编辑用户信息',
      vularId : "notification-view-1",
      loadAction:{
        "name" : "doAction",
        "api" : "/api/action",
        params : {
          actionName:"/Water/Vular/Actions/View",
          modelName:"/Water/Vular/Model/Notifications",
        }
      },
      md:'7',
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
                pageId: 'water-vular-view-admin_list',
                moduleId:'admins', 
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
                pageId: 'water-vular-view-admin_list',
                moduleId:'admins', 
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
                label:"登录名",
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
                label:"姓名",
              },
            },
          },
        },
        {
          name:"vular-input",
          props:{
            rules:"",
            field:"email",
            vInput:{
              name:"v-text-field",
              props:{
                label:"邮箱",
              },
            },
          },
        },
        {
          name:"vular-input",
          props:{
            rules:"",
            field:"email",
            vInput:{
              name:"VularSingleImageInput",
              props:{
                label:"头像",
              },
            },
          },
        },
        {
          name:"vular-input",
          props:{
            rules:"",
            field:"password",
            vInput:{
              name:"v-text-field",
              props:{
                label:"密码",
              },
            },
          },
        },
        {
          name:"vular-input",
          props:{
            rules:"",
            field:"roles",
            vInput:{
              name:"v-select",
              props:{
                label:"角色",
                items:['普通人','超级管理员'],
              },
            },
          },
        },
        {
          name:"vular-input",
          props:{
            rules:"",
            field:"forbid",
            vInput:{
              name:"v-switch",
              props:{
                label:"禁用",
              },
            },
          },
        },
      ],
    }
}