import Mock from 'mockjs'

import postListView from './views/post-list'
import postEditView from './views/post-edit'
import listAction from './actions/list'

import productListView from './views/product-list'


Mock.mock('/api/action', 'post', (options)=>{
  //console.log(options.body)
  return listAction
})
Mock.mock('/api/view', 'post', (options)=>{
  if(options.body === '\\Water\\Vular\\View\\PostList'){
    return postListView
  }
  if(options.body === '\\Water\\Vular\\View\\ProductList'){
    return productListView
  }

  if(options.body ==='\\Water\\Vular\\View\\PostEdit'){
    return postEditView
  }
})
//Mock.mock('/api/view/post-edit', 'post', postEditView)
