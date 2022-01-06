import { mount } from "@vue/test-utils";
import Bush from "@/components/Bush.vue";

describe("Bush.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Bush, {
      props: {
        msg: "subtitle",
        title: "Title",
      },
      data() {
        return {
          links: [
            {
              Thumbnails: [
                {
                  id: "attewoEpHrOK5lmxs",
                  width: 20,
                  height: 20,
                  url:
                    "https://dl.airtable.com/.attachments/735b489f92e9d51b91278a7068da9eed/d4f4e777/rocket.svg",
                  filename: "rocket.svg",
                  size: 2430,
                  type: "image/svg+xml",
                  
                },
              ],
              Link: "https://www.idontgoanywhere.com copy copy",
              CTA:
                "CALLTOACTION",
             },
          ],
          credentials: process.env.VUE_APP_AT_LINK,
        };
      },
    });
  });

  it("renders Title text", () => {
    const titleElement = wrapper.get('[data-test="title"]');
    expect(titleElement.text()).toBe("Title");
  });

  it("renders Subtitle text", () => {
    const titleElement = wrapper.get('[data-test="subtitle"]');
    expect(titleElement.text()).toBe("subtitle");
  });

  it("Checks if Link Column has been generated", () => {
    const links = wrapper.find("#linkCol");

    expect(links.exists()).toBe(true);
  });

  it("checks if link shows CTA text", async () => {
    const linktext = await wrapper.get('[data-test="cta"]');

    expect(linktext.exists()).toBe(true);

    expect(linktext.text()).toBe("CALLTOACTION");
  });

it("Checks Social Media Icons have rendered", async () => {
  const sm = await wrapper.get('[data-test="socialMediaIcons"]');

  expect(sm.findAll('[data-test="socialMediaIcons"]')).toHaveLength(5);
})

  // it("Populate Links Array", async () => {
  //   const cta = await wrapper.get('[data-test="cta"]');

  //   // Returns all elements that include arguments specified
  //   expect(cta.findAll('[data-test="cta"]')).toHaveLength(1);

  //   // Check 2 todos are availabl
  //   expect(cta.findAll('[data-test="cta"]')).toHaveLength(2);
  // }
  // );

  // it("Should render Tab text", async () => {
  //   let ctaElement = wrapper.vm.fetchLinks();
  //   ctaElement = await wrapper.find("#call");

  //   // ToBe is more strict than toContain
  //   expect(ctaElement.text()).toBe(
  //     "Optimise Mineral Logistics through Rapid Regime Change and Altruistic Political Donations"
  //   );
  // });

  // it("Checks CTA is loaded", async () => {

  //   const ctaElement = await wrapper.find("#call");
  //   expect(ctaElement.exists()).toBe(true);
  // });
});
