import Vue from 'vue'
import Vuex, { mapGetters } from 'vuex'
import fetchData from '../assets/events.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addEvent: [],
    events: [],
    eventReviews: [],
    search: "",
    isLoading: false,
    isLoginFormOpen: false,
  },
  mutations: {
    showData(state, events) {
      state.events = events;
    },
    TOGGLE_LOGIN_FORM(state) {
      state.isLoginFormOpen = !state.isLoginFormOpen;
    },
    SET_LOADING(state) {
      state.isLoading = !state.isLoading;
    },
    SET_EVENT_DATA(state, event) {
      const eventExists = state.events.some((item) => item.id === event.id);
      if (eventExists) {
        state.eventList = state.events.filter((e) => e.id !== event.id);
      } else {
        state.events.push(event);
      }
    },
    SET_EVENT_REVIEW(state, eventReview) {
      state.eventReviews.push(eventReview);
    },
    CREATE_EVENT(state, newEvent) {
      state.addEvent.push(newEvent);
      localStorage.setItem("newEvents", JSON.stringify(state.addEvent));
    },
    ADD_NEW_EVENTS(state, newEvents) {
      state.addEvent = newEvents;
    },
  },
  actions: {
   
    async getData(context) {
     context.commit('showData',fetchData.events)
    },
   

  },
  modules: {
  },
  getters:{
    loggedIn() {
      const isLoggedIn = JSON.parse(localStorage.getItem("user"));
      return !!isLoggedIn;
    },
    showCurrentReview: (state) => (id) => {
      return state.eventReviews.filter((review) => review.id == id);
    },
  }
})
