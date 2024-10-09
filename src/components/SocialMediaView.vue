<template>
  <div class="flex flex-row justify-center mx-auto w-1/4 p-1 rounded-lg shadow-md">
    <a
      v-for="(icon, index) in socialMediaIcons"
      :key="index"
      :href="icon.link"
      data-test="socialMediaIcons"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon :icon="`prime:${icon.icon}`" class="h-10 w-10"/>
  </a>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: "SocialMediaView",
  components: {
    Icon
  },
  data() {
    return {
      socialMediaIcons: [
        {
          link: "https://www.facebook.com",
          icon: "facebook",
        },
        {
          link: "https://www.github.com/",
          icon: "github",
        },
        {
          link: "https://www.instagram.com",
          icon: "instagram",
        },
        {
          link: "https://twitter.com/",
          icon: "twitter",
        },
        {
          link: "https://www.linkedin.com/",
          icon: "linkedin",
        },
        {
          link: "https://www.tiktok.com/",
          icon: "tiktok",
        },
        {
          link: "https://www.discord.com/",
          icon: "discord",
        },
        {
          link: "https://www.telegram.com/",
          icon: "telegram",
        },
      ],
    };
  },
};
</script>


