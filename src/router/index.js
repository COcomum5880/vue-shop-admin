import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'
export const constantRoutes = [

  //登陆------------------
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  //404  ------------------
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  //首页根路由  ------------------
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  }
]

export const lastRoute = { path: '*', redirect: '/404', hidden: true }


//用于创建只注册常量路由的路由器的函数------------------
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

//https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
