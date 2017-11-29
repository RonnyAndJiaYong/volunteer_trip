// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import './common/stylus/index.styl'
/* eslint no-multiple-empty-lines: "error" */
Vue.config.productionTip = false

Vue.use(axios)

/* eslint-disable no-new */
 new Vue({
   el: '#app',
   router,
   store,
   render: h => h(App)
})

