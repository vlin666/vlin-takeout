import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home'
import Mine from  '../pages/Mine/Mine'
import Order from '../pages/Order/Order'
import Search from  '../pages/Search/Search'
import Login from '../pages/Login/Login'

Vue.use(Router)

export default new Router({
      routes:[
        {
          path:'/home',
          component:Home,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/mine',
          component:Mine,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/order',
          component:Order,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/search',
          component:Search,
          meta:{
            showFooter:true
          }
        },
        {
          path:'/login',
          component:Login
        },
        {
          path:'/',
          redirect:'/home',
          meta:{
            showFooter:true
          }
        }


      ]
})
