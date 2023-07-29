// import {defineStore} from 'pinia'
// // 组合式写法
// import {computed,reactive, ref} from 'vue'
// // 引入持久化插件
// import piniaPersistConfig from '@/utils/persist'

// interface IUser{  // 书写接口
//   name:string
//   age:number
// }
// export const useCounterStore=defineStore('counter',()=>{
//   // 相当于state
//   const count=ref(1)
//   const user:IUser=reactive({
//     name:'张三',
//     age:28,
//   })
//   // 相当于getter
//   const double=computed(()=>count.value*2)
//   // 相当于Mutation
//   // const changeCountAndUser=(countNum:number)=>{
//   //   count.value=countNum
//   //   user.age=28rr
//   //   user.name='李四'
//   // }
//   // 相当于Action
//   const changeCountAndUser=(countNum:number)=>{
//     setTimeout(()=>{
//       count.value=countNum
//       user.age=28
//       user.name='李四'
//     },2000)
//   }
//   return{
//     count,
//     user,
//     double,
//     changeCountAndUser,
//   }
// },{
//   persist: true, // 对于所有的状态都进行持久化了
//   // persist:piniaPersistConfig('counter',['count','user.name']) // 对特定的值，设置持久化
// })








// ------------------------------------------------
// 选项式写法
import {defineStore} from 'pinia'
// 引入持久化插件
import piniaPersistConfig from '@/utils/persist'
export const useCounterStore=defineStore('count',{
  state(){  // 存放公共state状态
    return{
      count:123,
      user:{
        name:'张三',
        age:18
      }
    }
  },
  getters:{  // pinia中getters写法
    double(state):number{
      return state.count*2
    }
  },
  actions:{ // 在paina中Action中可以写同步，也可以写异步的方法，两者不再有区别
    changeCountAndUser(count:number){
      this.count=count
      this.user.age=28
      // setTimeout(() => {
      //   this.count=count
      //   this.user.age=28
      // }, 2000);
    }
  },
  // persist: true
  persist: piniaPersistConfig('counter',['count','user.name'])
})