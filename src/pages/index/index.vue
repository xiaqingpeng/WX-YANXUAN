<template>
  <div>
    <h1>我是首页头条</h1>
    <ul v-for="item in menuList" :key="item.id">
      <li>{{item.name}}</li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import store from "../../store";
export default {
  data: {
    menuList: []
  },
  created() {
    console.log(store);
    wx.request({
      url: "http://129.204.72.71:8000/api/catelist",
      success: res => {
        console.log(res.data.data);
        let sum = res.data.data.map(item => {
          return {
            id: item.id,
            name: item.name
          };
        });
        console.log(sum);
        this.menuList = sum;
      },
      fail(err) {
        console.log(err);
      }
    });
  }
};
</script>

<style >
</style>
