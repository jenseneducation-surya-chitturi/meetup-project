import Event from "@/views/Event.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    events: [],
    eventReviews: [],
  },
  getters: {
    showCurrentReview: (state) => (id) => {
      return state.eventReviews.filter((review) => review.id == id);
    },
  },
});

describe("Event.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Event, {
      localVue,
      store,
      setProps: {
        id: 5,
        location: "Berlin, GE",
        title: "Burger Festival",
        img: "https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1671&q=80",
        description: "Burger Festival in the Town!",
        date:"2020-08-16",
        attendees:11
      },
    });
  });
  test("should if working ", () => {
    expect(wrapper.findComponent(Event).exists()).toBe(true);
  });
});
