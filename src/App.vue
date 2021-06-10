<template>
  <main :class="this.bgcolor">
    <Bush title="This is a title" msg="Welcome to Your Vue.js App" />
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
      this.bgcolor = "bg-" + color[_.random(0, 9)];
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
