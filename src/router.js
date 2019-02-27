import Vue from 'vue'
import VueRouter from 'vue-router'
import Center from './views/center.vue'
import cinemas from './views/cinemas.vue'
import city from './views/city.vue'
import home from './views/home.vue'
import Films from './views/films.vue'
import detail from './views/detail.vue'
import login from './views/login.vue'
import card from './views/card.vue'
import shezhi from './views/shezhi.vue'
import money from './views/money.vue'
import zhengzai from './views/zhengzai.vue'
import daili from './views/daili.vue'
import jijiang from './views/jijiang.vue'
// 引入进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// import home from './views/home.vue'
// import pingtuan from './views/pingtuan.vue'
Vue.use(VueRouter)
var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: home,
      children: [
        {
          path: 'daili',
          component: daili
        },
        {
          path: 'films',
          component: Films,
          children: [
            {
              path: 'jijiang',
              component: jijiang
            },
            {
              path: 'zhengzai',
              component: zhengzai
            },
            {
              path: '',
              redirect: '/films/zhengzai'
            }
          ]
        },
        {
          path: 'cinemas',
          component: cinemas
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: '',
          // component: Film
          redirect: '/films'
        }
      ]
    },
    {
      path: '/city',
      component: city
    },
    // 详情页
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail,
      props: true
    },
    {
      path: '*',
      redirect: '/films'
    },
    {
      path: '/card',
      component: card
    },
    {
      path: '/money',
      component: money
    },
    {
      path: '/system',
      component: shezhi
    },
    {
      path: '/login',
      component: login
    }
  ]
})

// a页面 - >b页面
// to 将要去的路由的路由对于像  b
// from 从哪里去的路由的路由对象 a
// next是否允许去
// a - >b 如果不允许 则，next(false)，如果允许则设置为next(),如果不设置next（），那么路由代码会崩溃
// 如果不允许，想跳转到其他页面，则执行 next（‘.login’）
nprogress.configure({ showSpinner: false });
router.beforeEach((to, from, next) => {
  nprogress.start()
  // 满足了路由地址中的一个，并且要是由登陆用户
  if ((to.path === '/card' || to.path === '/money' || to.path === '/system') && !sessionStorage.getItem('nickname')) {
    next({
      path: '/login',
      query: {
        id: to.fullPath
      }
    })
  } else {
    next()
  }
  // next();
})
// 全局后置守卫
router.afterEach((to, from) => {
  nprogress.done()
})
export default router;
