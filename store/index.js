import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'

const store = () => new Vuex.Store({
  state: {
    city: defaultCity
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  },
  getters: {
    city: state => state.city
  }
})

export default store
