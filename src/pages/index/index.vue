<template>
  <div>
    <h1>我是首页头条</h1>
  
    <ul v-for="item in menuList" :key="item.id">
     
      <li>{{item.name}}</li>
    </ul>
    <swiper>
      <swiper-item v-for="item in bannerList" :key="item.id">
        <image :src="item.picUrl"></image>
      </swiper-item>
    </swiper>
  </div>
  
</template>

<script>
import store from "../../store";

export default {
  created() {
    store.dispatch("home/getMenuAction");
    store.dispatch("home/getBannerAction");
  },
  computed: {
    menuList: () => {
     
      return store.state.home.MenuList;
    },
    bannerList: () => {
    
      return store.state.home.BannerList;
    }
  }
};
</script>

<style >
</style>
