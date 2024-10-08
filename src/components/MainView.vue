<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap"
    rel="stylesheet"
  />

  <body>
    <div class="h-screen flex items-center justify-center" v-if="loading">
      <intersecting-circles-spinner
        :size="100"
        color="#ffffff"
      />
    </div>
      
    <div v-else>
      <div class="flex flex-col flex-shrink" id="app">
        <Header title="ConnectBush" msg="All your links. All in one." />
        <ColumnView :links="links" />
        <SocialMediaView />
      </div>
    </div>
  </body>
</template>

<script>
import ColumnView from "./ColumnView.vue";
import SocialMediaView from "./SocialMediaView.vue";
import Header from "./Header.vue";
import {store} from "../store.js";
import { IntersectingCirclesSpinner } from 'epic-spinners'

export default {
  name: "MainView",
  components: {
    ColumnView,
    SocialMediaView,
    Header,
    IntersectingCirclesSpinner
  },
  data() {
    return {
      loading: true,
      links: [],
    };
  },
  async mounted() {
    const url = import.meta.env.VITE_URL;
    const token = import.meta.env.VITE_PA_TOKEN;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      this.links = data.records.map(record => record.fields);
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

