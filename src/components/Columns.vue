<template>
  <div class="columns">
    <!-- Link Columns -->
    <div v-if="links.length > 0">
      <div

        id="linkCol"
        v-for="details in links"
        v-bind:key="details.message"
      >
        <div class="flex-col mx-auto w-full md:w-2/4 flex-shrink m-1 p-1 w-240 bg-stone">
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
              class="flex my-auto text-sm md:text-baseline text-left ml-2"
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
// import Airtable from 'airtable';
// const airtable = new Airtable({ apiKey: process.env.AIRTABLE_PA_TOKEN});




export default {
  name: "ColumnView",
  async mounted() {

        // Fetch data from Airtable and update the records array
    //     airtable.table('connectbush').select().all().then(records => {
    //   this.records = records;
    // });
    this.links
  },
  data() {
    return {
      links: [],
      credentials: process.env.VUE_APP_AT_LINK,
    };
  },
};
</script>


