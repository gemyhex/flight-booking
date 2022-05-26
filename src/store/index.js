import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flights: null,
  },
  getters: {
    getFlights(state) {
      return state.flights
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})