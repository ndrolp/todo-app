import { mount } from "@vue/test-utils";
import CustomInput from "@/components/CustomInput.vue";

describe("CustomInput component", () => {
  it("Emmit events", () => {
    const wrapper = mount(CustomInput, {
      propsData: {
        value: "Hello",
        placeholder: "Input",
      },
    });

    const input = wrapper.find("input");
    input.trigger("keyup.enter");

    expect(wrapper.emitted()).toHaveProperty("return");
  });
});
