import * as types from './mutation-types'
//  volunteer_page 传入一个对象 增强扩展性
const mutations = {
  [types.ADD_VOLUNTEER_PAGE](state, volunteerPage) {
    state.volunteer_page = volunteerPage
  }
}
/* eslint-disable no-new */
export default mutations
