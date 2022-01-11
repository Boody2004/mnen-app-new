<template>
  <v-carousel cycle height="700" hide-delimiters show-arrows-on-hover>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <v-row
        class="flex-column mb-6 fill-height"
        align="center"
        justify="center"
      >
        <div>
          <div class="text-h4 white--text">{{ item.title }}</div>
          <div class="text-h2 amber--text">{{ item.subTitle }}</div>
          <div :class="{ invisible: !item.product }" class="d-flex py-2">
            <div
              class="text-h6 white--text pr-2"
              style="text-transform: uppercase"
            >
              product :
            </div>
            <div
              v-for="productItem in item.product"
              :key="productItem.productTitle"
            >
              <div class="text-h6 amber--text pr-2">
                {{ productItem.productTitle }}
              </div>
            </div>
          </div>
          <v-btn
            outlined
            dark
            :class="{ invisible: !item.btn }"
            class="mt-2"
            :to="item.url"
          >
            {{ item.btnName }}
          </v-btn>
        </div>
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
          src: "https://res.cloudinary.com/dirbnpgsp/image/upload/v1641866703/world-140304_1920_eddb29.jpg",
          title: "First App",
          subTitle: "Map Location",
          product: [
            true,
            { productTitle: "Pharmacys" },
            { productTitle: "Atms" },
            { productTitle: "Supermarkets" },
          ],
          btn: true,
          btnName: "Map",
          url: "/map",
        },
      ],
    };
  },
};
</script>

<style scoped>
.invisible {
  visibility: hidden;
}
</style>
