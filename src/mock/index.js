import Mock from 'mockjs'

import postListView from './views/post-list'
import postEditView from './views/post-edit'
import listAction from './actions/list'

Mock.mock('/api/action/list', 'post', listAction)
Mock.mock('/api/view/post-list', 'post', postListView)
Mock.mock('/api/view/post-edit', 'post', postEditView)
