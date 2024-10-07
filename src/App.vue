<template>
  <main>
    <MainView title="Company Co Ltd Pty" msg="Business Administration Solutions" />
  </main>
</template>

<script>
import MainView from "./components/MainView.vue";

export default {
  name: "App",
  components: {
    MainView
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
  background: "#2c3e50"
}
</style>
