import { createRouter, createWebHistory } from 'vue-router'
// 还有 createWebHashHistory 和 createMemoryHistory
import Films from '@/views/films.vue'
// import Center from '@/views/center.vue' //改成路由懒加载的模式
// import Cinema from '@/views/cinema.vue' //改成路由懒加载的模式
import Nowplaying from '@/views/films/nowplaying.vue'
import ComingSoon from '@/views/films/comingsoon.vue'
import Detail from '@/views/detail.vue'
import Login from '@/views/login.vue'
const routes: any = [
  {
    path: '/films', component: Films, name: 'fs',
    // 放子页面的路由
    children: [
      {
        path:'/films',
        redirect:'/films/nowplaying'
      },
      { 
        name: 'np',
        path: '/films/nowplaying', 
        component: Nowplaying 
      },
      { 
        path: '/films/comingsoon', 
        component: ComingSoon 
      },
    ]
  }, //引入电影页面
   { name:'center',path: '/center', component:()=>import('@/views/center.vue'),
    beforeEnter: (to:any, from:any, next:any) => {
      next()
    }
    ,meta:{isShowTabbar:true},
  },
  { name:'cinema',path: '/cinema', component: ()=>import('@/views/cinema.vue') },
  { name:'detail',path: '/detail/:id',component:Detail,meta:{isShowTabbar:true}}, // 不显示Tabber组件
  { name:'login',path: '/login', component: Login },
  { path: '/', redirect: { name: 'fs' } },
  { path: '/:catchAll(.*)', redirect: '/films' }
]

const router = createRouter({
  history: createWebHistory(),  //history
  routes
})

// 全局的前置路由守卫
// 全局的拦截路由的操作
// 应用场景：未登录的用户，点击用户页，自动跳转登录页
// router.beforeEach((to, from, next) => {
//   const isAuthenticated=localStorage.getItem('token')
//   if(!isAuthenticated && to.name!=='login' && to.name=='center'){
//      // 如果用户没有登录，并且跳转的不是登录页，才会进入登录页
//      console.log('进了center')
//      next({name:'login'})
//   }else{
//     next()
//   }
// })

// // 全局的后置路由守卫
// // 应用场景：统计进入页面的次数
//   router.afterEach((to,form)=>{
//     if(to.name==='center'){
//       console.log('路由后置守卫，进入')
//     }
//   })
export default router