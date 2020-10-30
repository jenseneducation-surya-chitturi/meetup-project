import Vue from 'vue'
import Vuex from 'vuex'
import fetchData from '../assets/events.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    search: "",
  },
  mutations: {
    showData(state, events) {
      state.events = events;
    },
  },
  actions: {
   
    async getData(context) {
     context.commit('showData',fetchData.events)
    },
   

  },
  modules: {
  }
})
