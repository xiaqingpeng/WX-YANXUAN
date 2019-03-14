<template>
    <div class="top"> 
       
        <swiper class="banner">
          <swiper-item v-for="item in bannerList" :key="item.id">
            <image :src="item.picUrl" mode="widthFix"></image>

          </swiper-item>

        
        </swiper>
      
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    created() {
        this.$store.dispatch("home/getBannerAction")
    },
    computed: {
        ...mapState({
             bannerList:(state)=>{
            return  state.home.bannerList
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
</style>
