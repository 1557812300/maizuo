<template>
  <div>
    <!-- <h2>App</h2> -->
    <!-- 引入tabber组件 -->
    <Tabber v-if="!route.meta.isShowTabbar"/>
    <router-view></router-view>
  </div>
  </template>
  
  <script lang="ts" setup>
  import Tabber from '@/components/tabber.vue'
  import { useRoute } from 'vue-router';
  import {onUpdated} from 'vue'
  const route=useRoute()
  
  onUpdated(()=>{
    // console.log('route.meta.isShowTabbar',route.meta.isShowTabbar)
    // console.log(Boolean(route.meta.isShowTabbar))
  })
  </script>
  <style lang="scss" scoped>

  </style>