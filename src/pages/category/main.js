import Vue from 'vue'
import App from './index'
import store from '../../store'

//混入
Vue.mixin({
  created() {
    this.$store = store
  },
})

const app = new Vue(App)
app.$mount()
