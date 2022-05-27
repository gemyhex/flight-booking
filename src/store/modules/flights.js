import airports from "@/assets/data/airports.js";

const ADD_FLIGHT = "ADD_FLIGHT";
const REMOVE_FLIGHT = "REMOVE_FLIGHT";
const UPDATE_FLIGHT = "UPDATE_FLIGHT";

const state = {
  flights: null,
  airports: airports,
};

const mutations = {
  [ADD_FLIGHT](state, flight) {
    state.flights.push(flight);
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
};

const actions = {
  addflight({ commit, state }, flight) {
    flight.id = state.flights.length + 1;
    commit(ADD_FLIGHT, flight);
  },
  removeflight({ commit }, id) {
    commit(REMOVE_FLIGHT, id);
  },
};

const getters = {
  getFlights: (state) => {
    return state.flights;
  },
  getFlightById: (state) => (id) => {
    return state.flights.find((flight) => flight.id === id);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
