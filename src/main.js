// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import VueResource from 'vue-resource'
import Focus from './directives/focus'
import VueEvents from './plugins/events'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Focus)
Vue.use(VueEvents)

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
