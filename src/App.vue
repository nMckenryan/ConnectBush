<template >
  <main id="bg" class="bg-black h-screen">
    <v-vanta effect="topology" >
    <MainView title="Company Co Ltd Pty" msg="Business Administration Solutions" /></v-vanta>
  </main>
</template>


<script>
import MainView from "./components/MainView.vue";
import VVanta from 'vue-vanta-revamp';

export default {
  name: "App",
  components: {
    VVanta,
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
  color: white;
  background: "#2c3e50"
}
#vanta-bg {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
}
</style>
