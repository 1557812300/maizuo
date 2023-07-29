export default {
  namespaced: true, // 开启了命名空间
  state () {
    return {
      count: 0
    }
  },
  getters: { // 类似于计算属性，当vuex的count改变的时候，就会进来重新计算。
    doubleCount (state:any) {
      return (payload:number)=>{
        return state.count * payload
      }
    }
  },
  mutations: {
    setCount (state:any,count:any) {
      state.count = count
    }
  },
  actions: {
    setCountAsync ({commit}:any,payload:any) {
      setTimeout(() => {
        commit('setCount',payload)
      }, 2000);
    }
  }
}