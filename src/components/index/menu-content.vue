<template>
  <div>
    <h1>menu-content</h1>
    <div>{{pageId}}</div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number
  },
  watch: {
    index: {
      handler(newVal) {
        console.log("newVal:", newVal);
        let pageId = this.$store.state.home.menuList[this.index].id;
        this.$store.dispatch("home/getCategoryListAction",{id:pageId})
      },
      immediate: true
    }
  },

  created() {
    console.log(this.index);
  }
};
</script>

<style>
</style>
