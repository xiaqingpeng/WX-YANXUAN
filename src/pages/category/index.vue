<template>
  <div id="category">
    <scroll-view class="menu" :scroll-y="true">
      <li v-for="(item ,index) in cateMenu" :key="item.id" :class="{active:index===selectIndex}"
      @click=selectMenu(index)>{{item.name}}</li>
    </scroll-view>
    <scroll-view class="list" :scroll-y="true">
      <image :src="cateBanner" class="banner" mode="widthFix" ></image>
    </scroll-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data(){
    return {
      selectIndex:0
    }
  },
  computed: {
    ...mapState({
      cateMenu: state => {
        return state.category.cateMenu;
      },
      cateList: state => {
        return state.category.cateList;
      },
      cateBanner: state => {
        return state.category.cateBanner;
      }
    })
  },
  methods: {
   selectMenu(index){
     this.selectIndex=index
     console.log(this.cateMenu[index].id)
   }
  },
  created() {
    this.$store.dispatch("category/getCategoryMenuAction");
    this.$store.dispatch("category/getCategoryListAction");
  }
};
</script>

<style lang="less">
#category {
  display: flex;
  height: 100%;
  .menu {
    width: 100px;
    height: 100%;
    li {
      padding: 10px 15px;
      line-height: 30px;
      color: #999;
      font-size: 14px;
    }
    .active {
      color: red;
    }
  }
  .list {
    flex: 1;
     padding: 10px;
    height: 100%;
    .banner{
     width: 100%;
    }
  }
}
</style>
