<template>
      <!--  HEADER IMAGE-->
      <div class="flex flex-col flex-shrink mx-auto bg-white w-1/4 rounded-xl my-5 shadow-md" style="font-family: 'Merriweather', serif">
        <img
          class="mx-auto h-32 transform scale-75 -mb-5"
          src="../assets/logoBlack.png"
          alt="logo"
        />
        <!-- TITLE -->
        <h1
          class="text-lg md:text-3xl font-extrabold text-shadow text-black"
          data-test="title"
        >
          {{ title }}
        </h1>
        <!-- SUBTITLE -->
        <h4 class="text-md md:text-lg text-shadow text-black" data-test="subtitle">
          {{ msg }}
        </h4>
      </div>
</template>


<script>
    export default {
    name: "Header",
    props: ["msg", "title"],
    data() {
        return {
        links: [],
        credentials: process.env.VUE_APP_AT_LINK,
        bgcolor: "",
        subcolor: "",
        iconcolor: "",
        textcolor: "",
        };
    },

    };
</script>
