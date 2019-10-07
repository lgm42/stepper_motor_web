import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    positiveAngle: 90,
    negativeAngle: 90,
    position: 25,
    origin: 0,
    reductionRate: 6,
    stepResolution: 0.125
  },
  
  getters: {
    connectionUrl: () => {
      if (window['environment'] === 'production') {
        return 'http://' + location.host
      } else {
        return 'http://10.65.30.39'
      }
    }
  },
  
  mutations: {
    positiveAngle (state, angle) {
      console.log('positiveAngle déclenchée avec', angle)
      state.positiveAngle = parseInt(angle)
    },
    negativeAngle (state, angle) {
      state.negativeAngle = parseInt(angle)
    },
    position (state, angle) {
      state.position = parseInt(angle)
    },
    origin (state, angle) {
      state.origin = parseInt(angle)
    },
    reductionRate (state, angle) {
      state.reductionRate = parseFloat(angle)
    },
    stepResolution (state, angle) {
      state.stepResolution = parseFloat(angle)
    },
  },
  
  actions: {
  }
});
