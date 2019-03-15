<template>
  <div>
    <image :src="bannerUrl"></image>
    <ul>
      <li v-for="item  in cateList" :key="item.id">
         {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import  {mapState} from  "vuex"
export default {
  props: {
    index: Number
  },
  watch: {
    index: {
      handler(newVal) {
        // console.log("newVal:", newVal);
        let pageId = this.$store.state.home.menuList[this.index].id;
        this.$store.dispatch("home/getCategoryListAction",{id:pageId})
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({
         bannerUrl:(state)=>state.home.cateBannerUrl,
         cateList:(state)=>state.home.cateList
    })
  },
  created() {
    // console.log(this.index);
  }
};
</script>

<style>
</style>
