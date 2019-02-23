// 仓库的 a 模块

export default {
  namespaced: true,
  state: {
    name: 'A模块'
  },
  getters: {},
  actions: {},
  mutations: {
    chgName (state, payload) {
      state.name = payload.name;
    }
  }
}
