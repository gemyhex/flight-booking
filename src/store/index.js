import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Api_Key: '628caeb63b0f7fc382468bf7',
    flights: [{
        id: 0,
        to: 'UAE',
        from: 'EGY',
        oldPrice: 3000,
        newPrice: 2490,
        airport: 'Dubai Airport',
        gateNo: 1,
        flightDate: '01/06/2022',
        estimationTime: '2H 20M',
        departingTime: '03:00 PM',
        arrivalTime: '05:20 PM',
        class: 'Economy',
      },
      {
        id: 1,
        to: 'EGY',
        from: 'UAE',
        oldPrice: 4000,
        newPrice: 3590,
        airport: 'Cairo Airport',
        gateNo: 1,
        flightDate: '01/06/2022',
        estimationTime: '2H 20M',
        departingTime: '03:00 PM',
        arrivalTime: '05:20 PM',
        class: 'Economy',
      },
      {
        id: 2,
        to: 'KSA',
        from: 'EGY',
        oldPrice: 3000,
        newPrice: 2490,
        airport: 'King Fahd Airport',
        gateNo: 1,
        flightDate: '01/06/2022',
        estimationTime: '2H 20M',
        departingTime: '03:00 PM',
        arrivalTime: '05:20 PM',
        class: 'Economy',
      },
      {
        id: 2,
        to: 'EGY',
        from: 'KSA',
        oldPrice: 3000,
        newPrice: 2490,
        airport: 'Cairo Airport',
        gateNo: 1,
        flightDate: '01/06/2022',
        estimationTime: '2H 20M',
        departingTime: '03:00 PM',
        arrivalTime: '05:20 PM',
        class: 'Economy',
      },
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})