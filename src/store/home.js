import  api  from  '../api/index'
export default {

  namespaced: true,
  state: {
    title: "首页",
    MenuList: [],
    BannerList: []
  },
  mutations: {
    setBanner(state, param) {
      state.BannerList = param;
    },
   setMenu(state, param) {
      state.MenuList= param;
    }
  },
  actions: {
    getBannerAction: function (context) {
      wx.request({
        url:api.HOST_BANNER_LIST,
        success: res => {

          let newData = res.data.data.map(item => {
            return {
              id: item.id,
              picUrl: item.picUrl
            }; 
         
          });
          console.log(newData)

        
          //提交给仓库中的本模块
          context.commit("setBanner", newData)
        },
        fail(err) {
          console.log(err);
        }
      });
    },
    getMenuAction: function (context) {
     
      wx.request({
        url:api.HOST_MENU_LIST,
        success: res => {
        
          let newData = res.data.data.map(item => {
            return {
              id: item.id,
              name: item.name
            }; 
         
          });
          console.log(newData)

        
          //提交给仓库中的本模块
          context.commit("setMenu", newData)
        },
        fail(err) {
          console.log(err);
        }
      });
    }
  }
}
