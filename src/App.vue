<template>
  <main :class="this.bgcolor">
    <Bush
      title="Jim's Frivilous Lawsuits"
      msg="Defendant pays legal fees or your money back!"
      subcolor="{this.subcolor}"
    />
  </main>
</template>

<script>
import Bush from "./components/Bush.vue";
import _ from "lodash";

export default {
  name: "App",
  components: {
    Bush,
  },
  async mounted() {
    this.backgroundRandom();
  },

  data: function() {
    return {
      bgcolor: "bg-red",
      subcolor: "bg-orange",
    };
  },

  methods: {
    backgroundRandom() {
      //Yield random fluro background color.
      let color = [
        //9 colors
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "indigo",
        "purple",
        "pink",
      ];
      this.bgcolor = "bg-" + color[_.random(0, 8)];
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
