<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step color="#F9AA33" :complete="e1 > 1" step="1">
        Pharmacy
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step color="#F9AA33" :complete="e1 > 2" step="2">
        Atms
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step color="#F9AA33" step="3"> Supermarket </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" color="#4A6572" height="auto">
          <Input v-if="pharmacies" :locationData="pharmacies" />
        </v-card>

        <v-btn color="#F9AA33" @click="e1 = 2"> Continue </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="#4A6572" height="auto">
          <Input v-if="atms" :locationData="atms" />
        </v-card>

        <v-btn color="#F9AA33" @click="e1 = 3"> Continue </v-btn>

        <v-btn class="ml-2" @click="e1 = 1" text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="#4A6572" height="auto">
          <Input v-if="supermarkets" :locationData="supermarkets" />
        </v-card>

        <v-btn @click="save = !save" color="#F9AA33"> Save </v-btn>

        <v-btn class="ml-2" @click="e1 = 2" text> Cancel </v-btn>

        <v-bottom-sheet v-model="save">
          <v-sheet class="text-center" height="200px">
            <v-btn class="mt-6" color="grey" plain @click="save = !save">
              Cancel
            </v-btn>
            <div class="py-3">Saved successfully</div>
          </v-sheet>
        </v-bottom-sheet>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import axios from "axios";
import Input from "./Input.vue";
export default {
  name: "Admin",
  components: { Input },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      e1: 1,
      save: false,
      pharmacies: undefined,
      atms: undefined,
      supermarkets: undefined,
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    axios
      .get("https://mnen.herokuapp.com/api/getPharmacy")
      .then((response) => {
        this.pharmacies = response.data;
      })
      .catch((err) => console.error(err));

    axios
      .get("https://mnen.herokuapp.com/api/getAtm")
      .then((response) => {
        this.atms = response.data;
      })
      .catch((err) => console.error(err));

    axios
      .get("https://mnen.herokuapp.com/api/getSupermarket")
      .then((response) => {
        this.supermarkets = response.data;
      })
      .catch((err) => console.error(err));
  },
};
</script>
