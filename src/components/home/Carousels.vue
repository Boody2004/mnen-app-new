<template>
  <v-carousel cycle height="700" hide-delimiters show-arrows-on-hover>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <v-row class="fill-height" align="center" justify="center">
        <div class="text-h2">{{ item.title }}</div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          title: "First Project",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          title: "Second Project",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          title: "Third Project",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          title: "Forth Project",
        },
      ],
    };
  },
};
</script>
