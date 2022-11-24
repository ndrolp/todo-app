import { mount } from "@vue/test-utils";
import MainTemplate from "@/layouts/MainTemplate.vue";

describe("MainTemplate.vue", () => {
  it("show todos text on the component", () => {
    const wrapper = mount(MainTemplate);
    const h1 = wrapper.get("h1");
    expect(h1.text()).toMatch("todos");
  });
});
