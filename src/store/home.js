import api from '../api/index'
export default {

  namespaced: true,
  state: {
    title: "首页",
    menuList: [],
    bannerList: [],
    cateBannerUrl: "",
    cateList: []


  },
  mutations: {
    setBanner(state, param) {
      state.bannerList = param;
    },
    setMenu(state, param) {
      state.menuList = param;
    },
    setCategoryList(state, param) {
      state.cateBannerUrl = param.bannerUrl;
      state.cateList = param.data
    }
  },
  actions: {
    getBannerAction: function (context) {
      wx.request({
        url: api.HOST_BANNER_LIST,
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
        url: api.HOST_MENU_LIST,
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
    },
    getCategoryListAction: function (context, param) {

      wx.request({
        url: api.HOST_CATE_LIST,
        data: {
          id: param.id
        },
        success(result) {

          let bannerUrl = result.data.data.currentCategory.bannerUrl;
          let newData = result.data.data.categoryItemList.map((item) => {
            let newItem = {
              id: item.category.id,
              name: item.category.name,
              frontName: item.category.frontName
            }
            newItem.itemList = item.itemList.map((value) => {
              return {
                id: value.id,
                name: value.name,
                picUrl: value.primaryPicUrl,
                counterPrice: value.counterPrice,
                retailPrice: value.retailPrice,
                tags: value.itemTagList.map(({
                  name
                }) => ({
                  name
                })),
                colorNum: value.colorNum
              }
            })
            return newItem
          })
          context.commit("setCategoryList", {
            bannerUrl,
            data: newData

          })
          console.log(newData)
        }
      })

    }

  }
}
