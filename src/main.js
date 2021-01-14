import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    const newEvents = JSON.parse(localStorage.getItem("newEvents"));
    if (newEvents) {
      store.commit("ADD_NEW_EVENTS", newEvents);
    }
  },
  render: (h) => h(App),
}).$mount("#app");
