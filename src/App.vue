<template>
  <main>
    <Bush
      title="Jim's Frivilous Lawsuits"
      msg="Defendant pays legal fees or your money back!"
    />
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
