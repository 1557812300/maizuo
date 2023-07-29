import {createStore} from 'vuex'  
import tabbarModule from './tabbarModule'
import cinemaModule from './cinemaModule'
import countModule from './countModule'
const store = createStore({
  modules: {
    tabbarModule,
    cinemaModule,
    countModule
  },
  state () { 
    return {
      a: 1
    }    
  },
})

export default store

// import { createStore } from 'vuex'
// import axios from 'axios'
// const store=createStore({
//   state(){
//     return {
//       isShow:true,
//       cinemas:[],
//       count:1
//     }
//   },
//   mutations:{// 同步的更改vuex的state,方便vuex的devtools的工具调试|时间旅行  帮助开发者更好的追踪状态的改变
//     showTabbar(state:any){
//       state.isShow=true
//     },
//     hideTabbar(state:any){
//       state.isShow=false
//     },
//     setCinemas(state:any,playload:any){  //通过mutations往state中存储数据
//       state.cinemas=playload
//     },
//     setCount(state:any,count:any){ //设置同步更改
//       state.count=count
//     }
//   },
//   getters:{ // 类似于计算属性，当vuex的count改变的时候，就会进来重新计算。
//     doubleCount(state:any){
//       return (playload:number)=>{
//         return state.count*playload
//       }
//     }
//   },
//   actions:{
//     async getCinemaData(context:any){
//       const res=await axios.get('https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=714224',{
//         headers: {
//           'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16804846362473716478902273","bc":"310100"}',
//           'X-Host': 'mall.film-ticket.cinema.list'
//         }
//       })
//       // console.log('打印获取的',res.data.data.cinemas)
//       // /通过mutations往state中存储数据
//       context.commit('setCinemas',res.data.data.cinemas)
//     },
//     //Count的Action异步修改数据，两秒后修改
//     setCountAsync({commit}:any,playload:any){ //{commit}结构赋值了
//       setTimeout(()=> {
//         commit('setCount',playload)
//       },2000)
//     }
//   }
// })

// export default store