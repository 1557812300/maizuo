import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 重置样式引入
import './style/base.scss'
// 手机端适配
import './utils/flexible'
// 引入iconfont
import '@/style/iconfont/iconfont.css'
// 引入Vuex的store
import store from '@/store'
// import store2 from '@/store2'
// 1. 引入需要的Vant组件
import { Button,Swipe, SwipeItem,List,Cell } from 'vant';
// 2. 引入组件Vant样式
import 'vant/lib/index.css'
const app=createApp(App)
app.use(router)
app.use(store) //使用store
// app.use(store2) //使用store
// 3. 注册你需要的组件
app.use(Button)
.use(Swipe)
.use(SwipeItem)
.use(List)
.use(Cell)
.mount('#app')
