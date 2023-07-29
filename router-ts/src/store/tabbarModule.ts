export default {
  namespaced: true, // 开启了命名空间
  state () {
    return {
      isShow: true, // 控制tabbar显示隐藏的
    }
  },
  mutations: {
    showTabbar (state:any) {
      state.isShow = true  
    },
    hideTabbar (state:any) {
      state.isShow = false  
    },
  }
}