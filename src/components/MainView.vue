<template
  >
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap"
    rel="stylesheet"
  />

  <body>
    <div class="flex flex-col flex-shrink" id="app">
      <Header title="ConnectBush" msg="All your links. All in one." />
      <ColumnView />
      <SocialMediaView />
    </div>
  </body>
</template>

<script>
import ColumnView from "./Columns.vue";
import SocialMediaView from "./SocialMediaView.vue";
import Header from "./Header.vue";

export default {
  name: "MainView",
  components: {
    ColumnView,
    SocialMediaView,
    Header,
  },
};
</script>
