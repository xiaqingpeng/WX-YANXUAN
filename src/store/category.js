import api from "../api"
export default {

  namespaced: true,
  state: {
   cateMenu:[]
  },
  mutations:{
    setCateMenu(state,params){
        state.cateMenu=params
    }
  }
  ,
  actions: {
    getCategoryAction(context, param) {

      wx.request({
        url: api.CATE_MENU_LIST,
        success: (res) => {
          let newData = res.data.data.map(item => {
            return {
              id:item.id,
              name:item.name

            };

          });
          context.commit("setCateMenu", newData)
        },
        fail: (err) => {
          console.log(err)
        }


      });
    }
  }
}
