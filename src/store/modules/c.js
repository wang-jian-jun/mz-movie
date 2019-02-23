// 这是 c 仓库模块  。 不适用命名空间

export default {
  state: {
    name: 'c模块'
  },
  getters: {

  },
  mutations: {
    updateName (state) {
      state.name = '李四'
    }
  }
}
