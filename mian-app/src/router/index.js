import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   let islogin = localStorage.getItem("islogin");
//   islogin = Boolean(Number(islogin));

//   if (to.path == "/login") {
//     if (islogin) {
//       next("/about");
//     } else {
//       next();
//     }
//   } else {
//     // requireAuth:可以在路由元信息指定哪些页面需要登录权限
//     if (to.meta.requireAuth && islogin) {
//       next();
//     } else {
//       next("/login");
//     }
//   }
// })

export default router
