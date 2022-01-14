<template>
  <section>
    <div style="height: 60vh; width: 90%; margin: 2% 5%">
      <!-- <div v-if="!pharmacies || !atms || !supermarkets || !cinemas">
        <v-progress-circular
          :size="150"
          :width="10"
          color="amber"
          indeterminate
        >
        </v-progress-circular>
      </div> -->

      <l-map
        v-if="pharmacies && atms && supermarkets && cinemas"
        :zoom="zoom"
        :center="center"
        style="height: 100%; z-index: 0"
      >
        <l-tile-layer :url="url" />
        <div v-for="pharmacy in pharmacies" :key="pharmacy._id">
          <l-marker
            v-if="showPharmacy == true"
            :lat-lng="[pharmacy.lon, pharmacy.lat]"
          >
            <l-popup>
              <div>
                <p>{{ pharmacy.sectionName }}</p>
                <p>{{ pharmacy.name }}</p>
              </div>
            </l-popup>
          </l-marker>
        </div>

        <div v-for="atm in atms" :key="atm._id">
          <l-marker v-if="showAtm == true" :lat-lng="[atm.lon, atm.lat]">
            <l-popup>
              <div>
                <p>{{ atm.sectionName }}</p>
                <p>{{ atm.name }}</p>
              </div>
            </l-popup>
          </l-marker>
        </div>

        <div v-for="supermarket in supermarkets" :key="supermarket._id">
          <l-marker
            v-if="showSupermarket == true"
            :lat-lng="[supermarket.lon, supermarket.lat]"
          >
            <l-popup>
              <div>
                <p>{{ supermarket.sectionName }}</p>
                <p>{{ supermarket.name }}</p>
              </div>
            </l-popup>
          </l-marker>
        </div>

        <div v-for="cinema in cinemas" :key="cinema._id">
          <l-marker
            v-if="showCinema == true"
            :lat-lng="[cinema.lon, cinema.lat]"
          >
            <l-popup>
              <div>
                <p>{{ cinema.sectionName }}</p>
                <p>{{ cinema.name }}</p>
              </div>
            </l-popup>
          </l-marker>
        </div>
      </l-map>
    </div>

    <div style="margin: 0 5%">
      <v-row justify="center">
        <v-btn
          @click="
            () => {
              showAtm = false;
              showPharmacy = true;
              showSupermarket = false;
              showCinema = false;
            }
          "
          class="my-3 mx-2"
          color="#F9AA33"
        >
          <v-icon class="pr-2" color="#232F34"> mdi-calendar-plus </v-icon>
          Pharmacy
        </v-btn>

        <v-btn
          @click="
            () => {
              showAtm = true;
              showPharmacy = false;
              showSupermarket = false;
              showCinema = false;
            }
          "
          class="my-3 mx-2"
          color="#F9AA33"
        >
          <v-icon class="pr-2" color="#232F34"> mdi-credit-card </v-icon>
          Atms
        </v-btn>

        <v-btn
          @click="
            () => {
              showAtm = false;
              showPharmacy = false;
              showSupermarket = true;
              showCinema = false;
            }
          "
          class="my-3 mx-2"
          color="#F9AA33"
        >
          <v-icon class="pr-2" color="#232F34"> mdi-cart-outline </v-icon>
          Supermarket
        </v-btn>

        <v-btn
          @click="
            () => {
              showAtm = false;
              showPharmacy = false;
              showSupermarket = false;
              showCinema = true;
            }
          "
          class="my-3 mx-2"
          color="#F9AA33"
        >
          <v-icon class="pr-2" color="#232F34"> mdi-filmstrip </v-icon>
          Cinemas
        </v-btn>
      </v-row>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      atms: undefined,
      pharmacies: undefined,
      supermarkets: undefined,
      cinemas: undefined,

      showPharmacy: true,
      showAtm: false,
      showSupermarket: false,
      showCinema: false,

      zoom: 14,
      center: latLng(30.603, 32.27),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    axios.get("https://mnen.herokuapp.com/api/getPharmacy").then((response) => {
      this.pharmacies = response.data;
    });

    axios.get("https://mnen.herokuapp.com/api/getAtm").then((response) => {
      this.atms = response.data;
    });

    axios
      .get("https://mnen.herokuapp.com/api/getSupermarket")
      .then((response) => {
        this.supermarkets = response.data;
      });

    axios
      .get("https://mnen-app.herokuapp.com/api/getCinema")
      .then((response) => {
        this.cinemas = response.data;
      });
  },
};
</script>
