<template>
  <div class="bg-white">
    <a
      v-for="(icon, index) in socialMediaIcons"
      :key="index"
      :href="icon.link"
      data-test="socialMediaIcons"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div :class="iconcolor">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialMediaView",
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
      ],
    };
  },
};
</script>

