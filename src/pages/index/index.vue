<template>
  <div class="home">
    <index-menu @selected="selectedAction"></index-menu>
    <top-content v-if="showIndex === 0"></top-content>
    <menu-content v-if="showIndex !== 0" :index="showIndex-1"></menu-content>
  </div>
</template>

<script>
import menu from "../../components/index/menu";
import topContent from "../../components/index/top-content";
import menuContent from "../../components/index/menu-content";

export default {
  data() {
    return {
      showIndex: 0
    };
  },
  components: {
    "index-menu": menu,
    "top-content": topContent,
    "menu-content": menuContent
  },
  methods: {
    selectedAction(index) {
      this.showIndex = index;
  
    }
  }
};
</script>
<style lang="less" >
 .content{
   padding-top:22px;

 }

</style>


 
 