<template>
  <div class="columnsView">
    <!-- Link Columns -->
    <div v-if="links?.length > 0">
      <div

        id="linkCol"
        v-for="details in links"
        v-bind:key="details.message"
      >
        <div class="flex-shrink mx-auto w-full md:w-3/4 m-3 p-1  bg-white rounded-lg shadow-md">
          <a
            class="flex"
            v-bind:href="details.Link"
            v-for="images in details.Thumbnails"
            v-bind:key="images.url"
            style="fill: green !important"
          >
            <!-- Icon  & Message-->
            <img
              class="h-10 w-10 md:h-10 md:w-10 m-2 p-2 rounded-xl bg-white"
              v-bind:src="images.url"
              alt="logo"
            />
            <p
              class="flex my-auto text-sm md:text-lg text-left ml-2"
              data-test="cta"
              id="linkText"
            >
              {{ details.CTA }}
            </p>
          </a>
        </div>
      </div>
    </div>

    <!-- Fallback if no links available -->
    <div v-else>
      <div
        class="mx-auto w-full md:w-2/4 flex-shrink m-1 p-1 bg-white rounded-lg shadow-md"
        id="linkCol"
      >
        <div class="flex flex-row">
            <img
              class="h-10 w-10 md:h-10 md:w-10 m-2 p-2 rounded-xl bg-transparent"
              src="../assets/logoBlack.png"
              alt="logo"
            />
          <p
            class="flex my-auto text-sm md:text-baseline text-left ml-2"
            data-test="fallbackCta"
            id="fallbackText"
          >
            No links available at this time
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


const { VUE_APP_AIRTABLE_PA_TOKEN, VUE_APP_AIRTABLE_URL } = process.env;

export default {
  name: "ColumnView",
  async mounted() {

    fetch(VUE_APP_AIRTABLE_URL, {
      headers: {
        Authorization: `Bearer ${VUE_APP_AIRTABLE_PA_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => this.links = data.records.map(record => record.fields))
      .catch((error) => console.error(error));
  },
  data() {
    return {
      links: [],
    };
  },
};
</script>


