<template>
  <!--  HEADER IMAGE-->
  <div class="flex flex-col flex-shrink mx-auto w-1/4 rounded-xl my-5" style="font-family: 'Merriweather', serif">
    <img class="mx-auto h-32" src="../assets/logoWhite.png" alt="logo" />
    <!-- TITLE -->
    <h1 class="text-lg md:text-3xl font-extrabold text-shadow text-white" data-test="title">{{ title }}</h1>
    <!-- SUBTITLE -->
    <h4 class="text-md md:text-lg text-shadow text-white" data-test="subtitle">{{ msg }}</h4>
  </div>
</template>

<script>
    export default {
    name: "Header",
    props: ["msg", "title"],
    };
</script>