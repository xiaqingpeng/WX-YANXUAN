import api from "../api"
export default {

  namespaced: true,
  state: {
    cateMenu: [],
    cateList: [],
    cateBanner: "",
    cateMenuList:[]

  },
  mutations: {
    setCateMenu(state, params) {
      state.cateMenu = params
    },
    setCateList(state, params) {
      state.cateList = params
    },
    setBannerUrl(state, params) {
      state.cateBanner = params
    },
    setCateMenuList(state, params){
       state.cateMenuList = params
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
          categoryId: param ? param.id :""
        },
        success: (res) => {
          context.commit("setBannerUrl", res.data.data.currentCategory.wapBannerUrl);
          let newData = res.data.data.categoryGroupList;
          newData.map((item) => {
            return {
              id: item.id,
              name: item.name,
              categoryList: item.categoryList.map((item) => {
                return {
                  id: item.id,
                  name: item.name,
                  wapBannerUrl: item.wapBannerUrl
                }

              })
            }
          })
          console.log(newData)
  context.commit("setCateMenuList", newData);

        },
        fail: (err) => {
          console.log(err)
        }


      });
    }
  }
}
