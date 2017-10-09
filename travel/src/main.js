// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import volunteer from './components/volunteer/volunteer'
import onroad from './components/onroad/onroad'
import story from './components/story/story'

import './common/stylus/index.styl'
/* eslint no-multiple-empty-lines: "error" */
Vue.config.productionTip = false

Vue.use(Router)
Vue.use(vueResource)

const routes = [
  // { path: '/', component: App },
  { path: '/volunteer', component: volunteer },
  { path: '/onroad', component: onroad },
  { path: '/story', component: story }
]

const router = new Router({
  mode: 'hash',
  routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
})
  /* eslint-disable no-new */
 new Vue({
  router,
   render: h => h(App)
  // components: { App }
}).$mount('#app')

