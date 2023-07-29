<template>
  <div>
    <h2 @click="count++">获取pinia的count--{{ count }}</h2>
    <h2>获取pinia的user--{{ user }}--age:{{ user.age }}</h2>
    <h2>获取pinia的double--{{ double }}</h2>
    <button @click="updataState">批量更改状态</button>
    <button @click="reset()">重置状态</button>
  </div>
</template>

<script lang="ts" setup>
  import {useCounterStore} from '@/store2/counter'
  import {storeToRefs} from 'pinia' 
  //在 Pinia 中，storeToRefs 是一个实用工具函数，用于将 Vuex Store 的状态转换为可响应的 Ref 对象。

  const counterStore=useCounterStore()

  // const {count}=counterStore  //解构之后的count 不具有响应式
  // 引入double--getters在中的方法
   
  // 将 counterStore 中的状态转换为可响应的 Ref 对象
  const {changeCountAndUser} = counterStore // 可以解构出来changeCountAndUser等方法
  const {count,user,double}=storeToRefs(counterStore) 
  // 调用action的同步方法changeCountAndUser
  changeCountAndUser(500)
  const updataState=()=>{
    count.value=200
    user.value.age=28
  }
  const reset=()=>{
    counterStore.$reset() // 重置了
  }
</script>

<style lang="scss" scoped>

</style>



<!-- ---------------------------------------------------- -->

<!-- 
<template>
  <h2>登录页</h2>
  临时的登录按钮：
  <hr>
  <h2>{{ count }}</h2>
    <button @click="change">更改count</button>
</template> -->


<!-- <script lang="ts">
import {defineComponent} from 'vue'
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default defineComponent({
  computed:{
    ...mapState('countModule',['count']), //来自countModule模块里的,state的count
    ...mapGetters('countModule',['doubleCount']), //来自countModule模块里的,可以获取getter，将数据变为两倍
  },
  methods:{
    ...mapMutations('countModule',['setCount']),//来自countModule模块里的,可以获取同步方法，通过this.setCount去使用
    ...mapActions('countModule',['setCountAsync'])//来自countModule模块里的,可以获取异步的方法，通过this.setCountAsync去使用
  }
})
</script> -->

<!-- <script lang="ts" setup>
  import {computed} from 'vue'
  import {useStore} from 'vuex'

  const store= useStore()
  const count= computed(()=>store.state.countModule.count)
  const change=()=>{
    store.commit('countModule/setCount',200)
  }
 -->

<!-- </script> -->
