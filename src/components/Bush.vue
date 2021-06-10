<template>
  <body class="container mx-auto min-h-screen bg-opacity-50">
    <div class="flex flex-col flex-shrink" id="app">
      <!-- Image and Title -->
      <div class="mx-auto text-center md:p-2">
        <!-- FIXME: Insert proper logo -->
        <img
          class="mx-auto h-32 transform scale-75 md:scale-100"
          src="../assets/logo.png"
          alt="logo"
        />
        <h1 class="text-2xl md:text-4xl font-extrabold md:mt-2 -m-5 md:m-3">
          {{ title }}
        </h1>
        <h4 class="text-xl md:text-2xl mt-2 p-3 md:-mt-4 font-bold">
          {{ msg }}
        </h4>
      </div>
      <!-- Link Columns -->
      <div
        class="flex-col mx-auto w-3/4 flex-shrink m-1 p-1 w-240"
        id="linkCol"
        v-for="details in links"
        v-bind:key="details.message"
      >
        <a v-bind:href="links.Link" class="flex">
          <img class="h-auto" v-bind:src="Thumbnail" v-bind:alt="logo" />
          <!-- FIXME: Init Thumbnails -->
          <p class="my-auto text-xs md:text-xl ml-1 mr-10 flex md:px-1">
            {{ details.CTA }}
          </p>
        </a>
      </div>

      <!-- Social Media Favicons -->
      <div class="button group mx-auto items-center">
        <a href="https://www.facebook.com/"
          ><i class="fab fa-facebook-square fa-3x"></i
        ></a>
        <a href=""><i class="fab fa-snapchat-square fa-3x"></i></a>
        <a href="https://twitter.com/"
          ><i class="fab fa-twitter-square fa-3x"></i
        ></a>

        <a href="https://www.youtube.com/channel/"
          ><i class="fab fa-youtube-square fa-3x"></i
        ></a>
        <a href="https://www.google.com"
          ><i class="fas fa-envelope-square fa-3x"></i
        ></a>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";

export default {
  name: "Bush",
  async mounted() {
    // Fetch data on load
    this.links = await this.fetchLinks();
    console.log(await this.fetchLinks());
  },
  props: ["msg", "title"],
  data() {
    return {
      links: [],
    };
  },

  methods: {
    async fetchLinks() {
      return await axios
        .get(
          "https://api.airtable.com/v0/app8zAQYHubfvyPt6/connect?api_key=keyoz2hOe6j6VzUh6"
        )
        .then((response) => {
          return response.data.records.map((links) => {
            return links.fields;
          });
        });
    },
  },
};
</script>
