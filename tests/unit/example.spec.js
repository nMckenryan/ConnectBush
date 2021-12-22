import { mount } from "@vue/test-utils";
import Bush from "@/components/Bush.vue";

describe("Bush.vue", () => {
  let wrapper;

  beforeEach(() => {
    const title = "Title";
    const msg = "msg";
    wrapper = mount(Bush, { props: { title, msg } });
  });

  it("renders Title text", () => {
    const titleElement = wrapper.get('[data-test="title"]');
    expect(titleElement.text()).toBe("Title");
  });
});
