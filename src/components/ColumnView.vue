<template>
    <div v-if="links.length > 0">
      <div
        id="linkCol"
        v-for="details in links"
        :key="details.CTA"
        class="flex-shrink mx-auto  m-3  w-full md:w-11/12 p-1 md:p-3 lg:w-2/4 bg-white rounded-lg shadow-md"
      >
        <a
          class="flex"
          :href="details.Link"
          v-for="images in details.Thumbnails"
          :key="images.url"
          style="fill: green !important"
        >
          <img
            class="h-10 w-10 md:h-10 md:w-10 lg:h-14 lg:w-14 m-2 p-2 rounded-xl bg-white"
            :src="images.url"
            alt="logo"
          />
          <p
            class="flex my-auto text-sm md:text-xl text-left ml-2 text-black"
            data-test="cta"
            id="linkText"
          >
            {{ details.CTA }}
          </p>
        </a>
      </div>
    </div>
    <div v-else>
      <div
        class="mx-auto w-full md:w-2/4 flex-shrink m-1 p-1 bg-white rounded-lg shadow-md"
        id="linkCol"
      >
        <div class="flex flex-row">
          <img
            class="h-10 w-10 md:h-10 md:w-10 m-2 p-2 rounded-xl bg-transparent"
            v-lazy="'../assets/logoBlack.png'"
            alt="logo"
          />
          <p
            class="flex my-auto text-sm md:text-baseline text-left ml-2 text-black"
            data-test="fallbackCta"
            id="fallbackText"
          >
            No links available at this time
          </p>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "ColumnView",
  props: ["links"],
  
};
</script>



