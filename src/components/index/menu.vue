<template>
  <scroll-view :scroll-x="true" class="menu-wrap">
    <ul class="menu-list" :style="{width:width+'px'}">
      <li
        v-for="item in list"
        :key="item.id"
        class="menu-item"
        :class="{active: index === selectIndex}"
        @click="selectMenu(index)"
      >{{item.name }}</li>
    </ul>
    <div></div>
  </scroll-view>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      selectIndex: 0
    };
  },
  computed: {
    ...mapState({
      list: state => {
        return state.home.menuList;
      }
    }),
    menuList() {
      return [{ id: 0, name: "推荐" }, ...this.list];
    },
    width() {
      return this.list.menuList * 80;
    }
  },
  created() {
    this.$store.dispatch("home/getMenuAction");
  },
  methods: {
    selectMenu(index) {
      this.selectIndex = index;
      this.$emit("selected",index)
    }
  }
};
</script>
<style lang="less" scoped>
.menu-list {
  width: 800px;
  display: flex;
  .menu-item {
    flex: 1;
    font-size: 14px;
    color: #333;
    text-align: center;
    height: 16px;
    padding: 3px 0;
  }
  .menu-item.active {
    color: red;
    border-bottom: 2px solid red;
  }
}
</style>
