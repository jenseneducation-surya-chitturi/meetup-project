import Vuex from "vuex";
import { shallowMount, createLocalVue} from "@vue/test-utils";
import Nav from "@/components/Nav.vue";
import VueRouter from "vue-router";

describe("Nav", () => {
  test("Show if router is '/' url ", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const $route = {
      path: "/",
    };

    const wrapper = shallowMount(Nav, {
      localVue,
      mocks: {
        $route,
      },
      stubs: ["router-link", "router-view"],
    });
    expect(wrapper.vm.$route.path).toBe("/");
  });

  it("should take you to the Home", async () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    const routes = [{ path: "/", name: "Home" }];

    const router = new VueRouter({
      routes,
    });

  });
});