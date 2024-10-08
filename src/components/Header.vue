<template>
  <!--  HEADER IMAGE-->
  <div class="flex flex-col flex-shrink mx-auto w-full rounded-xl my-2 md:py-5 " style="font-family: 'Merriweather', serif">
    <img class="mx-auto h-16 md:h-32" src="../assets/logoWhite.png" alt="logo" />
    <!-- TITLE -->
    <h1 class="text-baseline md:text-3xl font-extrabold text-shadow text-white" data-test="title">{{ title }}</h1>
    <!-- SUBTITLE -->
    <h4 class="text-sm md:text-lg text-shadow text-white" data-test="subtitle">{{ msg }}</h4>
  </div>
</template>

<script>
    export default {
    name: "Header",
    props: ["msg", "title"],
    };
</script>