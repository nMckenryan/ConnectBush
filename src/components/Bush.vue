<template
  >
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap"
    rel="stylesheet"
  />

  <body :class="this.bgcolor">
    <div class="flex flex-col flex-shrink" id="app">
      <!--  HEADER IMAGE-->
      <div :class="this.textcolor" style="font-family: 'Merriweather', serif">
        <!-- TODO: Port logo to SVG for color changability  -->
        <img
          class="mx-auto h-32 transform scale-75 -mb-5"
          src="../assets/logo.png"
          alt="logo"
        />
        <!-- TITLE -->
        <h1
          class="text-lg md:text-3xl font-extrabold"
          data-test="title"
        >
          {{ title }}
        </h1>
        <!-- SUBTITLE -->
        <h4 class="text- md:text-lg" data-test="subtitle">
          {{ msg }}
        </h4>
      </div>

      <!-- Link Columns -->
      <div
        class="flex-col mx-auto w-full md:w-2/4 flex-shrink m-1 p-1 w-240"
        id="linkCol"
        v-for="details in links"
        v-bind:key="details.message"
      >
        <div :class="this.subcolor">
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

      <!-- Social Media Favicons -->

      <div :class="iconcolor">
        <!-- FACEBOOK -->
        <a href="https://www.facebook.com" data-test="socialMediaIcons">
          <svg
            class="h-8 w-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            />
          </svg>
        </a>

        <!-- GITHUB -->
        <a href="https://www.github.com/" data-test="socialMediaIcons"
          ><svg
            class="h-8 w-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            /></svg
        ></a>

        <!-- INSTAGRAM -->

        <a href="https://www.instagram.com" data-test="socialMediaIcons">
          <svg
            class="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg
        ></a>

        <!-- TWITTER -->
        <a href="https://twitter.com/" data-test="socialMediaIcons">
          <svg
            class="h-8 w-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            /></svg
        ></a>

        <!-- LINKEDIN  -->
        <a href="https://www.linkedin.com/" data-test="socialMediaIcons">
          <svg
            class="h-8 w-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" /></svg
        ></a>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  name: "Bush",
  async mounted() {
    // Fetch data on load
    this.links = await this.fetchLinks();
    console.log(await this.fetchLinks());
    this.backgroundRandom();
  },
  props: ["msg", "title"],
  data() {
    return {
      links: [],
      credentials: process.env.VUE_APP_AT_LINK,
      bgcolor: "",
      subcolor: "",
      iconcolor: "",
      textcolor: "",
    };
  },

  methods: {
    async fetchLinks() {
      return await axios.get(this.credentials).then((response) => {
        return response.data.records.map((links) => {
          return links.fields;
        });
      });
    },
    backgroundRandom() {
      let colorArr = [
        //10 colors
        // 0 = main color, 1 = gradient end, 2 = contrasting window color. 3 = text
        ["trollOrange", "trollOrange", "sonsBlue", "white"],
        ["adMech", "white", "screamGrey", "black"],
        ["screamGrey", "adMech", "nightLord", "white"],
        ["nightLord", "sonsBlue", "black", "white"],
      ];

      // Selects a Color Scheme at random
      var scheme = colorArr[_.random(0, 3)];
      this.iconcolor =
        "flex mx-auto items-center rounded-lg p-1 bg-" +
        scheme[2] +
        " text-" +
        scheme[3];
      this.bgcolor =
        "bg-gradient-to-t from-" +
        scheme[0] +
        " to-" +
        scheme[1] +
        " min-h-screen";
      this.subcolor =
        "bg-" + scheme[2] + " text-" + scheme[3] + " rounded-2xl shadow-lg";
      this.textcolor = "text-" + scheme[3];
      this.stroke =
        "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: " +
        scheme[2];
    },
  },
};
</script>
