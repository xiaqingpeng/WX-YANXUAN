import   api  from  "../api"
export default {

  namespaced: true,
  state: {
    title: "商品"
  },
  actions:{
    getGoodsDetailAction(context,param){
      
      //发送请求，获得商品详情数据
      wx.showLoading({
        title:"商品加载中..." ,
        mask: true,
       
     
      });
       wx.request({
        url: api.HOST_DETAIL_LIST,
        data: {
          id:param.id
        },
     
        success: (result)=>{
          console.log(result)
        },
        complete(){
          wx.hideLoading()
        }
      
      });
    }
  }
}