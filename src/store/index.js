import Vue from "vue"
import Vuex from "vuex"

import home from "./home"
import goods from "./goods"
import cart from "./cart"
import user from "./user"
import category from "./category"

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
      home,
      user,
      cart,
      goods,
      category
    }
  }

);

export default store
