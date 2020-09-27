import { mount, shallowMount } from "@vue/test-utils";
import Signup from "@/components/Signup.vue";

describe("tests for submiting a form for ContactPage", () => {
  it("should reveal a notification when submitted", async () => {
    const wrapper = mount(Signup);

    await wrapper.find("[data-username]").setValue("lisa");
    await wrapper.find(".contact-form").trigger("submit.prevent");

    expect(wrapper.find(".msg").text()).toBe(
      "Thank you for your Message, lisa"
    );
  });

  it("should display the placeholder attribute for email", () => {
    const wrapper = mount(Signup);

    const place = wrapper.find("[data-useremail]");
    
    expect(place.attributes().placeholder).toBe("Email");
  });
});

describe(" tests for Signup.vue", () => {
  let wrapper;
  beforeEach(() => {
      wrapper = shallowMount(Signup);
  });

  it("should have the Signup component", () => {
    const contact = wrapper.findComponent(Signup);
    expect(contact.exists()).toBe(true)
});

it("should display h2", () => {
  const Signup = "Sign Up";
  const content = wrapper.find("h2").text();
  expect(content).toBe(Signup);
});
});