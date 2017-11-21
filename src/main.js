// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<div id="app"><transition name="fade" mode="out-in"><router-view class="view"></router-view></transition></div>',
  // template: '<App/>',
  components: { App }
})
