import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        name: "Sten",
        age: 10
      },
      {
        id: 2,
        name: "Sara",
        age: 11
      },
      {
        id: 3,
        name: "Per",
        age: 12
      }
    ],
    varukorg: [],
    totalCost: 0
  },
  mutations: {
    atc(state, product) {
      state.varukorg.push(product)
    },
    rfc(state, index) {
      state.varukorg.splice(index, 1)
    }
  },
  actions: {

  }
})
