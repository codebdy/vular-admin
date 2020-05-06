import Mock from 'mockjs'

import drawer from './actions/drawer'
import appbar from './views/appbar'

import postListView from './views/post/post-list'
import postEditView from './views/post/post-edit'
import articleList from './actions/article-list'
import productList from './actions/product-list'

import productListView from './views/product/product-list'
import dashboardView from './views/dashboard'
import mediasView from './views/medias'
import inquiresView from './views/inquires'
import ordersView from './views/orders'

import notificationListView from './views/notification/notification-list'


import postBlank from './actions/post-blank'
import post1 from './actions/post1'
import postXX from './actions/post-xx'
import notifications from './actions/notifications'
import oneNotification from './actions/one-notification'

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
  //console.log(opBody)
  if(opBody.pageId === 'water-vular-view-post_list'){
    return {pageData:postListView, globals:{inquires:4, newArticles:2, notifications:3}}
  }
  if(opBody.pageId ==='water-vualr-view-notification-list'){
    return {pageData:notificationListView, globals:{inquires:10, newArticles:2, notifications:3}}
  }
  
  if(opBody.pageId === '\\Water\\Vular\\View\\ProductList'){
    return {pageData:productListView, globals:{inquires:4, newArticles:2, notifications:3}}
  }

  if(opBody.pageId ==='water-vualr-view-post-edit'){
    return {pageData:postEditView, globals:{inquires:5, newArticles:3, notifications:2}}
  }

  if(opBody.pageId ==='\\Water\\Vular\\View\\Dashboard'){
    return {pageData:dashboardView, globals:{inquires:4, newArticles:2, notifications:3}}
  }

  if(opBody.pageId ==='\\Water\\Vular\\View\\Medias'){
    return {pageData:mediasView, globals:{inquires:4, newArticles:2, notifications:3}}
  }

  if(options.body ==='\\Water\\Vular\\View\\Inquires'){
    return {pageData:inquiresView, globals:{inquires:10, newArticles:2, notifications:3}}
  }
  if(options.body ==='\\Water\\Vular\\View\\Orders'){
    return {pageData:ordersView, globals:{inquires:10, newArticles:2, notifications:3}}
  }
})

Mock.setup({
    timeout: 400
})
//Mock.mock('/api/view/post-edit', 'post', postEditView)
