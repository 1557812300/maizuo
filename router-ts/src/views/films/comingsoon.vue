<template>
  <div>
    <van-list class="nowplaying" 
    v-model:loading="loading" 
    :finished="finished" 
    finished-text="没有更多了" 
    @load="onLoad" 
    offset="60">
        <!-- 之前： -->
        <!-- <div class="film-item" v-for="item in filmData" :key="item.filmId" :title="item.name">
        <img :src="item.poster" alt="">
        <div class="content">
          <h4>{{ item.name }}</h4>
          <p>观众评分 {{ item.grade }}</p>
          <p class="actor">演员：{{ actorsName(item.actors) }}</p>
          <p>{{ item.nation }}|{{ item.runtime }}分钟</p>
        </div>
      </div> -->
      <!--  引入组件 film-item.vue -->
      <filmItem 
      v-for="item in filmData" 
      :key="item.filmId" 
      :item="item">
        
      </filmItem>
    
    </van-list>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getData } from '@/utils/request';
// 引入组件 film-item.vue
import filmItem from '@/components/film-item.vue';
const loading = ref(false);
const finished = ref(false);
const filmData = ref<Array<any>>([])
const total = ref(0)
const pageNum = ref(1)
const onLoad = async () => {
  // 更改接口
  const res = await getData({
    // https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5256294
    url: '/gateway?cityId=310100&pageNum=' + pageNum.value + '&pageSize=10&type=2&k=5256294',
  })
  console.log('res2:', res)
  filmData.value = [...filmData.value, ...res.data.data.films]
  // 加载状态结束
  loading.value = false; // 将loading变成false，代表本次请求已经结束了
  pageNum.value++
  total.value = res.data.data.total
  // 数据全部加载完成
  if (total.value === filmData.value.length) {
    finished.value = true;// 代表没有更多数据了
  }
};


</script>

<style lang="scss" scoped>
.nowplaying{
    padding-bottom: 1rem;  
    // 加上该样式，是为了向下滑动列表，到达最底部，最后最后一行列表，
    // 可以与底部tabber，有空隙。--能显示出：没有更多了。
  }
</style>