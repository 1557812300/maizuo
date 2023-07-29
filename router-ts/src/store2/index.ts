import {createPinia} from 'pinia'
// 引入持久化插件
import piniaPlugin from 'pinia-plugin-persistedstate'

const store = createPinia()

// 解决如果setup这种组合式写法中，$reset的问题
// 报错： Store "counter" is built using the setup syntax and does not implement $reset()
store.use(({store})=>{
  const initialState = JSON.parse(JSON.stringify(store.$state));
  store.$reset = () => {
    store.$patch(initialState);
  }
});
// 使用持久化插件
store.use(piniaPlugin)

export default store