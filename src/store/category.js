import api from "../api"
export default {

  namespaced: true,
  state: {
    cateMenu: [],
    cateList: [],
    cateBanner:""
  },
  mutations: {
    setCateMenu(state, params) {
      state.cateMenu = params
    },
    setCateList(state, params) {
      state.cateList = params
    },
   setCateBanner(state, params){
       state.cateBanner=params
   }
  },
  actions: {
    getCategoryMenuAction(context, param) {

      wx.request({
        url: api.CATE_MENU_LIST,
        success: (res) => {
          let newData = res.data.data.map(item => {
            return {
              id: item.id,
              name: item.name

            };

          });
          context.commit("setCateMenu", newData)
        },
        fail: (err) => {
          console.log(err)
        }


      });
    },
    getCategoryListAction(context, param) {

      wx.request({
        url: api.CATE_LIST_LIST,
        data: {
          categoryId: ""
        },
        success: (res) => {
          console.log(res.data.data)

          context.commit("setCateBanner", res.data.data.currentCategory
            .wapBannerUrl)
        },
        fail: (err) => {
          console.log(err)
        }


      });
    }
  }
}
