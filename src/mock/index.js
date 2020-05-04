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


Mock.mock('/api/action', 'post', (options)=>{
  let opBody = JSON.parse(options.body)
  //console.log(opBody)
  if(opBody.params.modelName == "/Water/Vular/Model/Posts"){
    //console.log('request post list')
    return  JSON.parse(JSON.stringify(articleList))
  }
  if(opBody.params.modelName == "/Water/Vular/Model/Products"){
    //console.log('request product list')
    return  JSON.parse(JSON.stringify(productList))
  }
})
Mock.mock('/api/view', 'post', (options)=>{
  if(options.body === '\\Water\\Vular\\View\\PostList'){
    return Object.assign({}, postListView) 
  }
  if(options.body === '\\Water\\Vular\\View\\ProductList'){
    return Object.assign({}, productListView) 
  }

  if(options.body ==='\\Water\\Vular\\View\\PostEdit'){
    return postEditView
  }

  if(options.body ==='\\Water\\Vular\\View\\Dashboard'){
    return dashboardView
  }

  if(options.body ==='\\Water\\Vular\\View\\Medias'){
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
