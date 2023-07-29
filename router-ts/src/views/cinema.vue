<template>
  <div>
    <h2>cinema</h2>
    <h2>拿取state中的count数据：{{ count }}</h2>
    <button @click="change(200)">更改count中的数据</button>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {mapState,mapMutations,mapActions} from 'vuex'
export default defineComponent({
  computed:{
    ...mapState(['a']),
    ...mapState('cinemaModule',['cinemas']),
    ...mapState('countModule',['count']),
  },
  methods:{
    ...mapMutations('countModule',['setCount']),//Mutations同步函数
    ...mapActions('cinemaModule',['getCinemaData']),//Actions异步函数
    ...mapActions('countModule',['setCountAsync']),
    change(num) {
        // this.$store.commit('countModule/setCount',num) //通过按钮触发同步更改
        // this.$store.dispatch('countModule/setCountAsync',num) //通过按钮触发异步更改
        this.setCount(num) //Mutations同步函数触发
        // this.setCountAsync(num) ///Actions异步函数触发
      }
  },
  created() {
    //state后添加了模块的名cinemaModule
    // this.$store.state.cinemaModule.cinemas.length === 0
    if(this.cinemas.length === 0) {
        // /getCinemaData前面添加了模块的名cinemaModule
        // this.$store.dispatch('cinemaModule/getCinemaData')
        this.getCinemaData()
      }else{
        console.log('直接从vuex仓库中获取请求完毕的数据cinemas')
      }
  }
})
</script>

<style lang="scss" scoped></style>

<!-- <template>
  <div>
    <h2>cinema</h2>
    <h2>拿取state中的count数据：{{ $store.state.count }}</h2>
    <h2>getter--{{ $store.state.getters }}</h2>
    <button @click="change(200)">更改count中的数据</button>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  created() {
    //state后添加了模块的名cinemaModule
    if(this.$store.state.cinemas.length === 0) {
        // /getCinemaData前面添加了模块的名cinemaModule
        this.$store.dispatch('getCinemaData')
      }else{
        console.log('直接从vuex仓库中获取请求完毕的数据cinemas')
      }
  },
  methods:{
    change(num) {
        // this.$store.commit('countModule/setCount',num) //通过按钮触发同步更改
        this.$store.dispatch('setCountAsync',num) //通过按钮触发异步更改
      }
  }
})
</script>

<style lang="scss" scoped></style> -->