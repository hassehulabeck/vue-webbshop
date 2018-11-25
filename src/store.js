import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "Sten",
        price: 10
      },
      {
        id: 2,
        name: "Sax",
        price: 10
      },
      {
        id: 3,
        name: "Påse",
        price: 10
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
