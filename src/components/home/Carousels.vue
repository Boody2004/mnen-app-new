<template>
  <v-carousel cycle height="700" hide-delimiters show-arrows-on-hover>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <v-row class="fill-height" align="center" justify="center">
        <div class="" style="width: 80%">
          <div class="text-h4 white--text">{{ item.title }}</div>
          <div class="text-h3 amber--text">{{ item.subTitle }}</div>
          <div
            :class="{ invisible: !item.product }"
            class="d-flex py-2"
            style="flex-wrap: wrap"
          >
            <div
              class="text-h6 white--text pr-2"
              style="text-transform: uppercase"
            >
              product:
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
          src: "https://res.cloudinary.com/dirbnpgsp/image/upload/v1641866813/Mnen%20App/map_1920_ikovt1.jpg",
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
