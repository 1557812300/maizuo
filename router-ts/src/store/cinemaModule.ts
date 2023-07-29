import axios from 'axios'
export default {
  namespaced: true, // 开启了命名空间
  state () {
    return {
      cinemas: [], // 存放影院的数据 
    }
  },
  mutations: {
    setCinemas (state:any,payload:any) {
      state.cinemas = payload
    },
  },
  actions: {
    async getCinemaData (context:any) {
      const res = await axios.get('https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=714224',{
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16804846362473716478902273","bc":"310100"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      })
      // console.log(res.data.data.cinemas)
      // 需要触发setCinemas方法
      context.commit('setCinemas',res.data.data.cinemas)
    }
  }
}