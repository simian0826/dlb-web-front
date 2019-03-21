//test
export const methodA = ({ state, commit, rootState }) => {
  console.log(state);
  console.log(rootState);
  commit('METHOD_A')
};
export const methodB = ({ state, commit, rootState }) => {
    commit('METHOD_B')
};
export const methodC = ({ state, commit, rootState }, payload) => {
  console.log(state);
  console.log(rootState);
  commit('METHOD_C', payload)
};
