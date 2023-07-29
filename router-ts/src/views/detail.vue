<template>
  <div>
    <h2>内容页</h2>
    <!-- 放回首页的2种方法 -->
    <!-- 方法1： -->
    <!-- <router-link to="/">返回首页</router-link> -->
    <!-- 方法2： -->
    <!-- <button @click="backHome">返回首页</button> -->
    <router-link to="/detail/23114515151">显示其他电影详情页信息</router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data(){
    return{

    }
  },
  created() {
    // this.$store.state.isShow=false //直接修改，vuetools不会实时自动更新检测到的数据
    // this.mutations.hideTabbar()
    this.$store.commit('tabbarModule/hideTabbar')
  },
  beforeUnmount(){
    // this.$store.state.isShow=true
    this.$store.commit('tabbarModule/showTabbar')
  }
})

</script>
<!-- 组合式写法： -->
<!-- <script lang="ts">
  import {defineComponent} from 'vue'
  export default defineComponent({
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用    
      // 举例来说，对于一个带有动态参数的路径 /detail/:id，在 /detail/1 和 /detail/2 之间跳转的时候，
      // 由于会渲染同样的 Detail 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log('detail---beforeRouteUpdate...',to.params.id)
    },
  })
</script>  -->
<!-- <script>
import {defineComponent} from 'vue'

export default defineComponent({
  data(){

  },
  created() {
    console.log('id:',this.$route.params) //获取传过来的id
    console.log('title:',this.$route.query.title) //获取传过来的title
  },
  methods: {
    backHome(){
      const flag=window.confirm('确定要返回吗？')
      if(flag){
        this.$router.push('/films') // 通过$router实现编程式导航路由跳转
      }
    }
  },
})
</script> -->
<!-- 选项式 -->
<!-- <script lang="ts" setup>
  import { useRoute,useRouter,onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
  const route=useRoute()
  const router=useRouter() //
  // console.log(route.params.id,route.query.title)//获取传过来的id和title
  const backHome=()=>{
    const flag=window.confirm('确定要返回吗？')
      if(flag){
        router.push('/films') // 通过$router实现编程式导航路由跳转
      }
  }

  // 
  onBeforeRouteUpdate((to,from,next) => {
    console.log('detail---beforeRouteUpdate...',to.params.id)
  })
  // 离开本页面前执行
  onBeforeRouteLeave((to,from,next)=>{
    const flag=window.confirm('确定要离开本页面吗？')
    if(flag){
      next()
    }
  })
</script> -->
<style lang="scss" scoped>

</style>