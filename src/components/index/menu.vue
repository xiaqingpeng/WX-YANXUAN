<template>
  <scroll-view :scroll-x="true" class="scroll">
    <ul class="menu_ul">
      <li v-for="item in list" :key="item.id" class="menu_li">{{item.name}}</li>
    </ul>
    <div></div>
  </scroll-view>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      list: state => {
        return state.home.menuList;
      }
    })
  },
  created() {
    this.$store.dispatch("home/getMenuAction");
  },
  mounted() {}
};
</script>
