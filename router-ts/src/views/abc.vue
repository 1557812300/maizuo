<template>
  <div>
    <ul @click="change(e)">
      <li v-for="item in arr" :key="item.id" :data-name="item.id"> <img></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr:[{path:"x1,y1",id:0},{path:"x2,y1",id:0}],
      newArr:[]
    }
  },
  methods: {
    change(e){
      // if()
      console.log(e.target())
    // if（e.target()）{
    // 获取当前的元素id，使用事件委托获取当前li,获取data-name后的id，
    // 将arr【id】push到newArr中，新数组就是要选座的电影票，点击提交新数组axios到后端去 
    }
  }
}
</script>

<style lang="scss" scoped></style>




<script>
