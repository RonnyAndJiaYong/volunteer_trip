// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router'

import './common/stylus/index.styl'
/* eslint no-multiple-empty-lines: "error" */
Vue.config.productionTip = false

Vue.use(Router)

/* eslint-disable no-new */
 new Vue({
   el: '#app',
   router,
   render: h => h(App)
})

