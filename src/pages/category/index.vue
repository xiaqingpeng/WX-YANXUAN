<template>
  <div id="category">
    <scroll-view class="menu scroll-view" :scroll-y = "true">
      <li v-for="(item ,index) in cateMenu" :key="item.id" :class="{active:index===selectIndex}"
      @click=selectMenu(index)>{{item.name}}</li>
    </scroll-view>
    <scroll-view class="list scroll-view" :scroll-y = "true">
     
      <image :src="cateBanner" class="banner" mode="widthFix" ></image>
       <div class="list-wrap"  v-for="(data, i) in cateMenuList" :key=data.id>
         <h3 v-if="data.name">{{data.name}}</h3>
         <ul>
           <li  v-for="(item, j) in data.categoryList" :key=item.id>
             <image :src="item.wapBannerUrl" mode="widthFix"></image>
             <p>{{item.name}}</p>
           </li>
         </ul>
       </div>

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
  watch: {
  selectIndex(newValue){
    console.log(newValue);
    let id=this.cateMenu[newValue].id;
    //重新请求右边栏数据
    this.$store.dispatch("category/getCategoryListAction",{id})
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
      },
      cateMenuList: state => {
        return state.category.cateMenuList;
      },
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
  .scroll-view {
 height: 100%;
  }
  .menu {
    width: 100px;
   
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
  
    .banner{
     width: 100%;
    }
    h3{
      padding: 10px  15px;
      font-weight: bold;
      font-size: 18px;
      border-bottom: 1px solid #999;
    }
    ul{
      overflow: hidden;
      li{
        width: 33.3%;
        float: left;
        image {
          width: 80%;
          margin: 0 auto;
        }
        p{
          color:#999;
          font-size: 12px
        }
      }
    }
  }
}
</style>
