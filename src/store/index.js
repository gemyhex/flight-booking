import Vue from "vue";
import Vuex from "vuex";

const ADD_FLIGHT = "ADD_FLIGHT";
const ADD_BOOKING = "ADD_BOOKING";
const REMOVE_FLIGHT = "REMOVE_FLIGHT";
const UPDATE_FLIGHT = "UPDATE_FLIGHT";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flights: [],
    booking: null,
  },
  getters: {
    getFlights: (state) => {
      return state.flights;
    },
    getFlightById: (state) => (id) => {
      return state.flights.find((flight) => flight.id === id);
    },
  },
  mutations: {
    [ADD_FLIGHT](state, flight) {
      state.flights.push(flight);
    },
    [ADD_BOOKING](state, booking) {
      state.booking = booking;
    },
    [REMOVE_FLIGHT](state, id) {
      state.flights.splice(
        state.flights.findIndex((flight) => flight.id === id),
        1
      );
    },
    [UPDATE_FLIGHT](state, flight) {
      state.flights = state.flights.map((oldflight) => {
        if (flight.id === oldflight.id) {
          return flight;
        }
        return oldflight;
      });
    },
  },
  actions: {
    addFlight({ commit }, flight) {
      // flight.id = state.flights.length + 1;
      commit(ADD_FLIGHT, flight);
    },
    addBooking({ commit, state }, flight) {
      flight.id = state.flights.length + 1;
      commit(ADD_FLIGHT, flight);
    },
    removeFlight({ commit }, id) {
      commit(REMOVE_FLIGHT, id);
    },
  },
  modules: {},
});
