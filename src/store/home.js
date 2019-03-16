import api from '../api/index'
export default {

  namespaced: true,
  state: {
    title: "首页",
    menuList: [],
    bannerList: [],
    cateBannerUrl: "",
    cateList: [],
    tagList:[]


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
    },
    setTag(state,param){
      state.tagList=param
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
      //显示加载
      wx.showLoading({
        title: "正在加载中...",
        mask:true
     
      });
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
        },
        complete: () => {
          //影藏加载
          wx.hideLoading();
        }
      })

    },
    getTagAction(context){
      wx.request({
        url:api.HOST_TAG_LIST,
        success(result){
          console.log(result.data.data)
         let newData=result.data.data.map((item)=>{
             return {
               id:item.id,
               name:item.name,
               picUrl:item.picUrl,
               floorPrice:item.floorPrice,
               isNew:item.newOnShelf


             }
           })
           context.commit("setTag",newData)
        }
      })
    }

  }
}
