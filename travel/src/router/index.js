/**
 * Created by wx on 2017/10/17.
 */
import Vue from 'vue'
import Router from 'vue-router'

const volunteerPost = resolve => require(['components/volunteerPost/volunteerPost'], resolve)
const diary = resolve => require(['components/diary/diary'], resolve)
const voiceMap = resolve => require(['components/voiceMap/voiceMap'], resolve)
const personal = resolve => require(['components/personal/personal'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/volunteerPost'
    },
    {
      path: '/volunteerPost',
      component: volunteerPost
    },
    {
      path: '/diary',
      component: diary
    },
    {
      path: '/voiceMap',
      component: voiceMap
    },
    {
      path: '/personal',
      component: personal
    }
  ],
  mode: 'history'
})
