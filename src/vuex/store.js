import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import testA from  '../module/testA/store'
Vue.use(Vuex)

// 应用初始状态
const state = {
    count: 10
};

// 定义所需的 mutations
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    },
    INCREMENT_NUM(state, payload){
      state.count += payload.num;
    },
};

// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules:{
    testA
  }
})
