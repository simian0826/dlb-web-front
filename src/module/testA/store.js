import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    a: 10
};

// 定义所需的 mutations
const mutations = {
  METHOD_A(state) {
      state.a++
  },
  METHOD_B(state) {
      state.a--
  },
  METHOD_C(state, payload){
    state.a += payload.num;
  },
};

// 创建 store 实例
export default {
  namespaced: true,
  state:{
    a: 10
  },
  actions,
  getters,
  mutations
};
