<template>
  <div>
    <!-- <h2>电影</h2> -->
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item v-for="item in filmData" :key="item.filmId">
        <img :src="item.poster" alt="">
      </van-swipe-item>
    </van-swipe>
  
  
    <!-- 两种跳转路由的写法： -->
    <router-link :to="{name:'np'}">正在热映</router-link>
    <router-link to="/films/comingsoon">即将上映</router-link>
    <router-view></router-view>
  </div>
  </template>
  
  <script lang="ts" setup>
    import axios from 'axios';
    import {ref,onMounted} from 'vue'
    interface Item{
    filmId:string
    poster:string
  }
    const filmData=ref<Array<Item>>([]) 
    
    const requestData=async()=>{
      const res =await axios.get('https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=2909268',
      {
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16804846362473716478902273","bc":"310100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }) 
      console.log(res.data.data.films)
      filmData.value=res.data.data.films
    }
    onMounted(() => {
      requestData()
    })
    
  </script>
  
  <style lang="scss" scoped>
  .van-swipe{
    height:5rem;
  }
  img{
    width:100%;
    height:100%;
  }
  </style>