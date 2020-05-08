import Mock from 'mockjs'

import drawer from './actions/drawer'
import appbar from './views/appbar'

import postListView from './views/post/post-list'
import postEditView from './views/post/post-edit'
import postCategoriesVeiw from './views/post/post-categories'
import postAttributesView from './views/post/post-attributes'
import postAttributeEditView from './views/post/post-attribute-edit'

import articleList from './actions/article-list'
import productList from './actions/product-list'
import postAttributes from './actions/post-attributes'

import productListView from './views/product/product-list'
import productEditView from './views/product/product-edit'
import productCategoriesVeiw from './views/product/product-categories'
import productAttributesView from './views/product/product-attributes'

import dashboardView from './views/dashboard'
import mediasView from './views/medias'
import inquiresView from './views/inquires'
import ordersView from './views/orders'

import adminsView from './views/user/admins'
import rolesView from './views/user/roles'
import adminEditView from './views/user/admin-edit'
import roleEditView from './views/user/role-edit'

import notificationListView from './views/notification/notification-list'
import notificationView from './views/notification/notification-view'

import postBlank from './actions/post-blank'
import post1 from './actions/post1'
import postXX from './actions/post-xx'
import notifications from './actions/notifications'
import notificationsList from './actions/notifications-list'
import oneNotification from './actions/one-notification'

import inquires from './actions/inquires'

Mock.mock('/api/drawer', 'get', drawer)
Mock.mock('/api/appbar', 'get', appbar)


Mock.mock('/api/action', 'post', (options)=>{
  let opBody = JSON.parse(options.body)
  //console.log(opBody)
  if(opBody.params.actionName=="/Water/Vular/Actions/Query" && opBody.params.modelName == "/Water/Vular/Model/Posts"){
    //console.log('request post list')
    return {pageData:JSON.parse(JSON.stringify(articleList)), globals:{inquires:9, newArticles:5, notifications:5}}
  }
  if(opBody.params.actionName=="/Water/Vular/Actions/Query" && opBody.params.modelName == "/Water/Vular/Model/Products"){
    //console.log('request product list')
    return {pageData:JSON.parse(JSON.stringify(productList)), globals:{inquires:12, newArticles:7, notifications:4}}
  }

  if(opBody.params.actionName=="/Water/Vular/Actions/Query" && opBody.params.modelName == "/Water/Vular/Model/Notifications"){
    //console.log('request product list')
    return {pageData:JSON.parse(JSON.stringify(notifications)), globals:{inquires:12, newArticles:4, notifications:2}}
  }

  if(opBody.params.actionName=="/Water/Vular/Actions/Query" && opBody.params.modelName == "/Water/Vular/Model/Notification"){
    //console.log('request product list')
    return {pageData:JSON.parse(JSON.stringify(notificationsList)), globals:{inquires:12, newArticles:4, notifications:2}}
  }

  if(opBody.params.actionName=="/Water/Vular/Actions/Query" && opBody.params.modelName == "/Water/Vular/Model/Inquiry"){
    //console.log('request product list')
    return {pageData:JSON.parse(JSON.stringify(inquires)), globals:{inquires:12, newArticles:4, notifications:2}}
  }

  if(opBody.params.actionName=="/Water/Vular/Actions/Query" && opBody.params.modelName == "/Water/Vular/Model/PostAttribute"){
    //console.log('request product list')
    return {pageData:JSON.parse(JSON.stringify(postAttributes)), globals:{inquires:12, newArticles:4, notifications:2}}
  }


  if(opBody.params.actionName=="/Water/Vular/Actions/View" && opBody.params.modelName == "/Water/Vular/Model/Notifications"){
    //console.log('request product list')
    return {pageData:JSON.parse(JSON.stringify(oneNotification)), globals:{inquires:12, newArticles:4, notifications:2}}
  }

  if(opBody.params.actionName == "/Water/Vular/Actions/Load" 
    && opBody.params.modelName == "/Water/Vular/Model/Posts"){
    if(!opBody.data){
      return {pageData:postBlank, globals:{inquires:7, newArticles:2, notifications:7}}
    }

    if(opBody.data == 1){
      return {pageData:post1, globals:{inquires:6, newArticles:4, notifications:12}}
    }

    return {pageData:postXX, globals:{inquires:8, newArticles:5, notifications:6}}
  }
})

Mock.mock('/api/view', 'post', (options)=>{
  let opBody = JSON.parse(options.body)
  if(opBody.pageId ==='water-vular-view-inquiry_list'){
    return {pageData:inquiresView, globals:{inquires:10, newArticles:2, notifications:3}}
  }

  if(opBody.pageId === 'water-vular-view-post_list'){
    return {pageData:postListView, globals:{inquires:4, newArticles:2, notifications:3}}
  }

  if(opBody.pageId === 'water-vular-view-post_category'){
    return {pageData:postCategoriesVeiw, globals:{inquires:4, newArticles:2, notifications:3}}
  }

  if(opBody.pageId === 'water-vular-view-post_attributes'){
    return {pageData:postAttributesView, globals:{inquires:4, newArticles:2, notifications:3}}
  }

  if(opBody.pageId === 'water-vular-view-product_category'){
    return {pageData:productCategoriesVeiw, globals:{inquires:4, newArticles:2, notifications:3}}
  }

  if(opBody.pageId === 'water-vular-view-product_attributes'){
    return {pageData:productAttributesView, globals:{inquires:4, newArticles:2, notifications:3}}
  }

  if(opBody.pageId === 'water-vualr-view-post-attribute-edit'){
    return {pageData:postAttributeEditView, globals:{inquires:4, newArticles:2, notifications:3}}
  }

  if(opBody.pageId ==='water-vualr-view-notification-list'){
    return {pageData:notificationListView, globals:{inquires:10, newArticles:2, notifications:3}}
  }
  
  if(opBody.pageId ==='water-vualr-view-notification'){
    return {pageData:notificationView, globals:{inquires:10, newArticles:2, notifications:3}}
  }
  
  if(opBody.pageId === 'water-vular-view-product_list'){
    return {pageData:productListView, globals:{inquires:4, newArticles:2, notifications:3}}
  }
  if(opBody.pageId === 'water-vualr-view-product-edit'){
    return {pageData:productEditView, globals:{inquires:4, newArticles:2, notifications:3}}
  }

  if(opBody.pageId ==='water-vualr-view-post-edit'){
    return {pageData:postEditView, globals:{inquires:5, newArticles:3, notifications:2}}
  }
  if(opBody.pageId ==='water-vular-view-admin_list'){
    return {pageData:adminsView, globals:{inquires:5, newArticles:3, notifications:2}}
  }
  if(opBody.pageId ==='water-vualr-view-post-admin-edit'){
    return {pageData:adminEditView, globals:{inquires:5, newArticles:3, notifications:2}}
  }
  if(opBody.pageId ==='water-vular-view-role_list'){
    return {pageData:rolesView, globals:{inquires:5, newArticles:3, notifications:2}}
  }
  if(opBody.pageId ==='water-vualr-view-post-role-edit'){
    return {pageData:roleEditView, globals:{inquires:5, newArticles:3, notifications:2}}
  }

  if(opBody.pageId ==='\\Water\\Vular\\View\\Dashboard'){
    return {pageData:dashboardView, globals:{inquires:4, newArticles:2, notifications:3}}
  }

  if(opBody.pageId ==='\\Water\\Vular\\View\\Medias'){
    return {pageData:mediasView, globals:{inquires:4, newArticles:2, notifications:3}}
  }

  if(options.body ==='\\Water\\Vular\\View\\Orders'){
    return {pageData:ordersView, globals:{inquires:10, newArticles:2, notifications:3}}
  }
})

Mock.setup({
    timeout: 400
})
//Mock.mock('/api/view/post-edit', 'post', postEditView)
