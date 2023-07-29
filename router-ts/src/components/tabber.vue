<template>
  <div>
    <!-- <router-link to="/films">电影</router-link>
    <router-link to="/center">我的</router-link>
    <router-link to="/cinema">影院</router-link> -->
    
    <ul class="tabbar">
      <li 
      v-for="nav,index in navs" 
      :key="nav.id" 
      :class="'a-'+index">
        <!-- active-class="active"给激活的a添加class，增加颜色 -->
        <router-link :to="nav.path" active-class="active">
          <!-- 放入iconfont测试  -->
          <i class="iconfont" :class="nav.icon"></i>
          {{ nav.title }}
        </router-link>
      </li>
      <li class="a-3">
        <a href="https://m.maizuo.com/mz-act/active/ElzMZU125260">
          <i class="iconfont icon-zixun"></i>咨询
        </a>
      </li>
    </ul>
  </div>
  </template>
  
  <script lang="ts" setup>
    import {ref} from 'vue'

    const navs=ref([
      {id:'1',path:'/films',title:'电影',icon:'icon-dianying'},
      {id:'2',path:'/cinema',title:'影院',icon:'icon-yingyuan'},
      {id:'3',path:'/center',title:'我的',icon:'icon-wode'},
    ])
  </script>
  
  <style lang="scss" scoped>
  .tabbar{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white; //打开底色
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1rem;  //50px-->1rem
    // 新增，让小图与文字，垂直居中
    li{
      a{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
  .active{
    color:orange;
  }

  // 排序
  li.a-0{
    order: 1;
  }
  li.a-1{
    order: 2;
  }

  li.a-2{
    order: 4;
  } 

  li.a-3{
    order: 3;
  } 
  </style>