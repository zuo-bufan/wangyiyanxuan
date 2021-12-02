import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {Toast} from "vant";


Vue.use(VueRouter)
Vue.use(Toast)

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:true,
    children:[
      {
      //  搜索弹出框
        path:'/home/popup',
        //魔法注释 压缩时生成文件夹
        component:() => import('@/views/Popup.vue')
      }
    ]
  },
  {
    // 专题
    path:'/topic',
    name:'Topic',
    meta:true,
    component:() => import('@/views/Topic.vue')
  },
  {
  //  分类
    path:'/category',
    name:'Category',
    meta:true,
    component:() => import('@/views/Category.vue')
  },
  {
    //购物车
    path:'/cart',
    name:'Cart',
    meta:true,
    component:() => import('@/views/Cart.vue')
  },
  {
    //用户登录页
    path:'/user',
    name:'User',
    meta:true,
    component:() => import('@/views/User.vue')
  },
  {
  //  详情页
    path:'/details/:id',
    name:'Details',
    component:() => import('@/views/Details.vue')
  },
  {
    // 顶部导航页
    path:'/channel',
    name:'Channel',
    component:() => import('@/views/Channel.vue')
  },
  {
  //  品牌制造
    path:'/brand',
    name:'Brand',
    component:() => import('@/views/Brand.vue')
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局路由守卫  （前置路由拦截）
router.beforeEach((to,from,next) => {
  // console.log(to)
  if (to.fullPath == '/cart'){
    //接收
    let token = localStorage.getItem("token")
    if (token){
      next()
    } else {
      Toast.loading({
        message:'请先登录',
        forbidClick:true,
      })
     setTimeout(() =>{
       next('/user')
     },1000);
    }
  } else {
    next()
  }
})

export default router
