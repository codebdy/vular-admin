export default {
  "name" : "vular-simple-page",
    props : {
      title:'编辑角色信息',
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
                pageId: 'water-vular-view-role_list',
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
                pageId: 'water-vular-view-role_list',
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
                label:"角色名",
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
              name:"v-text-area",
              props:{
                label:"描述",
              },
            },
          },
        },
        {
          name:'div',
          text:'权限：'
        },
        {
          name:"vular-input",
          props:{
            rules:"",
            field:"roles",
            vInput:{
              name:"v-treeview",
              props:{
                "selection-type":"leaf",
                selectable:true,
                'return-object':true,
                label:'权限',
                items: [
                  {
                    id: 1,
                    name: '男装',
                    children: [
                      { id: 2, name: '绅士' },
                      { id: 3, name: '休闲' },
                    ],
                  },
                  {
                    id: 4,
                    name: '女鞋',
                    children: [
                      { id: 5, name: '辣妹' },
                      { id: 6, name: '淑女' },
                    ],
                  },
                  {
                    id:7,
                    name:"运动",
                    children: [
                      { id: 8, name: '滑板' },
                      { id: 9, name: '拖鞋' },
                    ],
                  },
                ],          
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