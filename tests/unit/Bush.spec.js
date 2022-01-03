import { mount } from "@vue/test-utils";
import Bush from "@/components/Bush.vue";

describe("Bush.vue", () => {
  let wrapper;

  beforeEach(() => {
    const title = "Title";
    const msg = "subtitle";
    wrapper = mount(Bush, { props: { title, msg } });
  });

  it("renders Title text", () => {
    const titleElement = wrapper.get('[data-test="title"]');
    expect(titleElement.text()).toBe("Title");
  });

  it("renders Subtitle text", () => {
    const titleElement = wrapper.get('[data-test="subtitle"]');
    expect(titleElement.text()).toBe("subtitle");
  });

  it("Checks proper number of Tabs are loaded", async () => {
    const ctaElement = await wrapper.get('[data-test="cta"]');
    expect(ctaElement.text()).toBe("Optimise");
  });
});
