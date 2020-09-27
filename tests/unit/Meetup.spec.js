import Meetup from "@/views/Meetup.vue";
import { shallowMount } from "@vue/test-utils";

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: [{ id: 1 }] }),
}));

describe("Meetup.vue", () => {
  it("getting the event", () => {
    var wrapper = shallowMount(Meetup);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.events.length).toBe(1);
    });
  });
});