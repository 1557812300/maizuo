<template>
  <div class="film-item">
    <img :src="item.poster" alt="">
    <div class="content">
      <h4>{{ item.name }}</h4>
      <p v-show="item.grade">观众评分: {{ item.grade }}</p>
      <p v-show="!item.grade && type==='nowplaying'" style="height:.4rem"></p>
      <p class="actor">主演：{{ actorsName(item.actors) }}</p>
      <p v-if="type==='nowplaying'">{{ item.nation }} | {{ item.runtime }}分钟</p>
      <p v-else>上映日期: {{ time(item.premiereAt) }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import moment from 'moment';  // 引入时间格式化插件
// 引入中文包 
import 'moment/dist/locale/zh-cn'
// 获取到演员
const actorsName = computed(() => {
  return (actors: any) => {
    if (actors) {
      return actors.map((item: any) => item.name).join(' ')
    } else {
      return '暂无主演'
    }
  }
})
interface IData{
    poster:string
    name:string
    [key:string]:any
  }
  interface IProps{
    item:IData // 需要接收父组件传递来的属性  item
    type?:string
  }
  // 处理时间
  const time=computed(()=>{
    return((premiereAt:any)=>{
      // 使用时间格式化插件
      // moment().format('MMMM Do YYYY, h:mm:ss a'); // 七月 29日 2023, 2:52:03 下午
      // 写完后，星期是英文，还需要引入中文组件
      return moment(premiereAt*1000).format('ddd M月D日')  // 类似时间戳，但是还有点区别，位数少
    })
  })
defineProps<IProps>()
</script>

<style lang="scss" scoped>
.film-item {
  display: flex;
  margin-left: .3rem;
  margin-top: .3rem;
  img {
    height: 1.98rem;
    width: 1.32rem;
  }

  .content {
    width: 80%;
    padding-left: .4rem;
    padding-top: .2rem;
    // background-color: cadetblue;
  }

  .actor {
    overflow: hidden;
    width: 70%;
    white-space: nowrap;
    text-overflow: ellipsis;
    // background-color: pink;
  }
}</style>