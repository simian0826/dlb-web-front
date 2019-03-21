//test

export async function increment({commit}) {
  commit('INCREMENT')
};
export async function decrement({commit}) {
  commit('DECREMENT')
  };
export async function incrementByNum ({commit}, payload){
  commit('INCREMENT_NUM', payload)
};


