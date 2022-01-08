<template>
  <div>
    <div style="height: 100vh; width: 100%">
      <div v-if="!atms || !pharmacies || !supermarkets">
        <v-progress-linear
          buffer-value="65"
          stream
          color="cyan"
        ></v-progress-linear>
      </div>
      <l-map
        v-if="atms && pharmacies && supermarkets"
        :zoom="zoom"
        :center="center"
        style="height: 100%; z-index: 0"
      >
        <l-tile-layer :url="url" />
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
      </l-map>
    </div>
    <div style="margin: -50px 0 0 0">
      <v-btn
        @click="
          () => {
            showAtm = true;
            showPharmacy = false;
            showSupermarket = false;
          }
        "
        class="mx-2"
        fab
        dark
        small
        color="cyan"
      >
        <v-icon> mdi-credit-card </v-icon>
        <h1>hello</h1>
      </v-btn>
      <v-btn
        @click="
          () => {
            showAtm = false;
            showPharmacy = true;
            showSupermarket = false;
          }
        "
        class="mx-1"
        fab
        dark
        small
        color="cyan"
      >
        <v-icon dark> mdi-calendar-plus </v-icon>
      </v-btn>
      <v-btn
        @click="
          () => {
            showAtm = false;
            showPharmacy = false;
            showSupermarket = true;
          }
        "
        class="mx-2"
        fab
        dark
        small
        color="cyan"
      >
        <v-icon> mdi-cart-outline </v-icon>
      </v-btn>
    </div>
  </div>
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
      showAtm: true,
      showPharmacy: false,
      showSupermarket: false,
      zoom: 14,
      center: latLng(30.603, 32.27),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    axios.get("https://mnen.herokuapp.com/api/getAtm").then((response) => {
      this.atms = response.data;
    });
    axios.get("https://mnen.herokuapp.com/api/getPharmacy").then((response) => {
      this.pharmacies = response.data;
    });
    axios
      .get("https://mnen.herokuapp.com/api/getSupermarket")
      .then((response) => {
        this.supermarkets = response.data;
      });
  },
};
</script>
