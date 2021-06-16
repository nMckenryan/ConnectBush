<template>
  <main>
    <Bush title="Larry's Bargain Litigation" msg="Win the life you deserve!" />
  </main>
</template>

<script>
import Bush from "./components/Bush.vue";

export default {
  name: "App",
  components: {
    Bush,
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
