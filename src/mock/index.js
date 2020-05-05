import Mock from 'mockjs'

import postListView from './views/post/post-list'
import postEditView from './views/post/post-edit'
import articleList from './actions/article-list'
import productList from './actions/product-list'

import productListView from './views/product/product-list'
import dashboardView from './views/dashboard'
import mediasView from './views/medias'
import inquiresView from './views/inquires'
import ordersView from './views/orders'

import postBlank from './actions/post-blank'
import post1 from './actions/post1'
import postXX from './actions/post-xx'


Mock.mock('/api/action', 'post', (options)=>{
  let opBody = JSON.parse(options.body)
  //console.log(opBody)
  if(opBody.params.actionName=="/Water/Vular/Actions/Query" && opBody.params.modelName == "/Water/Vular/Model/Posts"){
    //console.log('request post list')
    return  JSON.parse(JSON.stringify(articleList))
  }
  if(opBody.params.actionName=="/Water/Vular/Actions/Query" && opBody.params.modelName == "/Water/Vular/Model/Products"){
    //console.log('request product list')
    return  JSON.parse(JSON.stringify(productList))
  }

  if(opBody.params.actionName == "/Water/Vular/Actions/Load" 
    && opBody.params.modelName == "/Water/Vular/Model/Posts"){
    if(!opBody.data){
      return postBlank
    }

    if(opBody.data == 1){
      return post1
    }

    return postXX
  }
})

Mock.mock('/api/view', 'post', (options)=>{
  let opBody = JSON.parse(options.body)
  //console.log(opBody)
  if(opBody.pageId === 'water-vular-view-post_list'){
    return Object.assign({}, postListView) 
  }
  if(opBody.pageId === '\\Water\\Vular\\View\\ProductList'){
    return Object.assign({}, productListView) 
  }

  if(opBody.pageId ==='water-vualr-view-post-edit'){
    return postEditView
  }

  if(opBody.pageId ==='\\Water\\Vular\\View\\Dashboard'){
    return dashboardView
  }

  if(opBody.pageId ==='\\Water\\Vular\\View\\Medias'){
    return mediasView
  }

  if(options.body ==='\\Water\\Vular\\View\\Inquires'){
    return inquiresView
  }
  if(options.body ==='\\Water\\Vular\\View\\Orders'){
    return ordersView
  }
})

Mock.setup({
    timeout: 400
})
//Mock.mock('/api/view/post-edit', 'post', postEditView)
