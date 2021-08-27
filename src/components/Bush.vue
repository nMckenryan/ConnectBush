<template
  >
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
    rel="stylesheet"
  />
  <body :class="this.bgcolor">
    <div class="flex flex-col flex-shrink" id="app">
      <!--  HEADER IMAGE-->
      <div
        :class="this.textcolor"
        style="
          -webkit-text-stroke-width: 0.5px;
          -webkit-text-stroke-color: black;
        "
      >
        <img
          class="
            mx-auto
            h-32
            transform
            scale-75
            md:scale-100
            rounded-3xl
            shadow-lg
            mt-2
          "
          src="../assets/logo.png"
          alt="logo"
        />
        <!-- TITLE -->
        <h1 class="text-2xl md:text-4xl font-extrabold md:mt-2 -m-5 md:m-3">
          {{ title }}
        </h1>
        <!-- SUBTITLE -->
        <h4
          class="text-xl md:text-2xl mt-2 p-3 md:-mt-4 font-bold"
          style="font-family: 'Permanent Marker', cursive"
        >
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
        <div :class="this.subcolor">
          <a
            class="flex"
            v-bind:href="details.Link"
            v-for="images in details.Thumbnails"
            v-bind:key="images.url"
          >
            <img class="h-20 w-20" v-bind:src="images.url" v-bind:alt="logo" />
            <p class="flex my-auto text-baseline md:text-lg font-bold ml-1">
              {{ details.CTA }}
            </p>
          </a>
        </div>
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
    <small
      >Icons made by
      <a
        href="https://www.flaticon.com/authors/dinosoftlabs"
        title="DinosoftLabs"
        >DinosoftLabs</a
      >
      from
      <a href="https://www.flaticon.com/" title="Flaticon"
        >www.flaticon.com</a
      ></small
    >
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
        ["red", "mauvre", "green", "black"],
        ["orange", "yellow", "blue", "white"],
        ["yellow", "gold", "indigo", "white"],
        ["green", "lime", "red", "white"],
        ["teal", "blue", "mauvre", "white"],
        ["blue", "indigo", "orange", "black"],
        ["indigo", "purple", "tan", "white"],
        ["purple", "pink", "yellow", "white"],
        ["pink", "offwhite", "lime", "black"],
      ];

      let gradDirections = ["t", "r", "b", "l"];

      // Selects a Color Scheme at random
      var scheme = colorArr[_.random(0, 8)];
      var gd = gradDirections[_.random(0, 3)];
      this.bgcolor =
        "bg-gradient-to-" +
        gd +
        " from-" +
        scheme[0] +
        " to-" +
        scheme[1] +
        " min-h-screen";
      this.subcolor =
        "bg-" + scheme[2] + " text-" + scheme[3] + " rounded-2xl shadow-lg";
      this.textcolor = "text-" + scheme[2];
    },
  },
};
</script>
