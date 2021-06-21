import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import A from './pages/a.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/index/a',
    component: A
  },
  {
    path: '/index/login',
    component: Login
  },
  {
    path:'/register',
    component: Register
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history',
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router