<template
  >
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap"
    rel="stylesheet"
  />

  <body>
    <particles-bg type="thick" :bg="true" />
    <div class="flex flex-col flex-shrink" id="app">
      <Header title="ConnectBush" msg="All your links. All in one."/>
      <ColumnView />
      <SocialMediaView />
    </div>
  </body>
</template>

<script>
import ColumnView from "./Columns.vue";
import SocialMediaView from "./SocialMediaView.vue";
import Header from "./Header.vue";
import { ParticlesBg } from "particles-bg-vue";


export default {
  name: "MainView",
  components: {
    ParticlesBg,
    ColumnView,
    SocialMediaView,
    Header,
  },

  async mounted() {
    this.backgroundRandom();
  },

  data() {
    return {
      bgcolor: "",
      subcolor: "",
      iconcolor: "",
    };
  },

  methods: {
    backgroundRandom() {
      let colorArr = [
        //10 colors
        // 0 = main color, 1 contrasting window color. 2 = text
        ["trollOrange", "sonsBlue", "white"],
        ["sonsBlue", "adMech", "white"],
        ["adMech", "black", "white"],
        ["nightLord", "black", "white"],
      ];

      // Selects a Color Scheme at random
      var scheme = colorArr[Math.floor(Math.random() * colorArr.length)];

      this.iconcolor =
        "flex mx-auto items-center rounded-lg p-1 bg-" +
        scheme[1] +
        " text-" +
        scheme[2];
      this.bgcolor =
        "bg-" +
        scheme[0] +
        " min-h-screen";
      this.subcolor =
        "bg-" + scheme[1] + " text-" + scheme[2] + " rounded-2xl shadow-lg";
      this.stroke =
        "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: " +
        scheme[1];
    },
  },
};
</script>
