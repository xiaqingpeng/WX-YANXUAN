<template>
    <div class="top content"> 
       
        <swiper class="banner" :autoplay="true" :interval="2000" :circular="true">
          <swiper-item v-for="item in bannerList" :key="item.id">
            <image :src="item.picUrl" mode="widthFix"></image>

          </swiper-item>

        
        </swiper>
        <!-- 品牌制造商 -->
        <div class="tag-list">
        <div v-for="item  in tagList" :key="item.id" class="tag-item">
          <image :src="item.picUrl" mode="widthFix"></image>
        </div>
        </div>
      
      
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    created() {
        this.$store.dispatch("home/getBannerAction")
        //请求品牌制造商直供数据
        this.$store.dispatch("home/getTagAction")
    },
    computed: {
        ...mapState({
             bannerList:(state)=>{
            return  state.home.bannerList
        },
        
             tagList:(state)=>{
            return  state.home.tagList
        }
        
        })
      
    },
}
</script>
<style lang="less">
    .banner{
        height: 200px;
        image{
            width: 100%;
        }
    }
    .tag-item{
        width: 50%;
        padding: 5px;
        box-sizing: border-box;
        float: left;
        image{
            width: 100%;
        }
    }
</style>
