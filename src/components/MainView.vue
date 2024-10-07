<template
  >
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap"
    rel="stylesheet"
  />

  <body>
    <particles-bg type="cobweb" :canvas="{backgroundColor:'#313639'}" color='#39FF14' :config="config" :bg="true"/>
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
  data: function() {
    return {
      config: {
        // number of particles
        num: [2, 3],
        // rate of particles per second
        rps: 0.001,
        // radius of particles
        radius: [600, 1200],
        // life of particles
        life: [15, 30],
        // velocity of particles
        v: [0.00001],
        // angle of particles in degrees (between -30 and 30)
        tha: [-30, 30],
        // transparency of particles (between 0.6 and 0)
        alpha: [0.6, 0],
        // scale of particles
        scale: [0.1, 0.4],
        // position of particles
        position: "",
        // behavior of particles when they cross each other
        cross: "dead",
        // randomness of particles
        random: 30
      }
    };
  }
};
</script>
