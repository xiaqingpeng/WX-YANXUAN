<template>
    <div class="goods-detail">
       <h1>详情页面</h1>
    </div>
</template>

<script>
export default {
   onLoad(options){
       console.log(options)
   },
   mounted() {
       console.log(this.$root.$mp.query.id)
       let detailId=this.$root.$mp.query.id;
       this.$store.dispatch("goods/getGoodsDetailAction",{id:detailId})
   },
}
</script>

<style>

</style>
