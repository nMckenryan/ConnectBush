<template>
  <div v-if="!loading" class="columnsView">

    <div v-if="links.length > 0">
      <div
        id="linkCol"
        v-for="details in links"
        v-bind:key="details.CTA"
        class="flex-shrink mx-auto w-full md:w-3/4 m-3 p-1 bg-white rounded-lg shadow-md"
      >
        <a
          class="flex"
          v-bind:href="details.Link"
          v-for="images in details.Thumbnails"
          v-bind:key="images.url"
          style="fill: green !important"
        >
          <img
            class="h-10 w-10 md:h-10 md:w-10 m-2 p-2 rounded-xl bg-white"
            v-lazy="images.url"
            alt="logo"
          />
          <p
            class="flex my-auto text-sm md:text-lg text-left ml-2 text-black"
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
  </div>
  <div class="flex justify-center" v-else>

    <intersecting-circles-spinner
      :size="100"
      color="#ffffff"
    />

  </div>
</template>

<script>
import { IntersectingCirclesSpinner } from 'epic-spinners'


export default {
  name: "ColumnView",
  components: { IntersectingCirclesSpinner },
  async mounted() {
    const url = import.meta.env.VITE_URL;
    const token = import.meta.env.VITE_PA_TOKEN;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      this.links = data.records.map(record => record.fields);
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  },
  data() {
    return {
      loading: true,
      links: [],
    };
  },
};
</script>



