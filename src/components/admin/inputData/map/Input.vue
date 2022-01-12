<template>
  <div class="container" style="padding: 0 10%">
    <div class="py-14">
      <ContactFormField name="title" type="text" labelText="Name" />
      <ContactFormField name="title" type="text" labelText="Section Name" />
      <v-row>
        <v-col>
          <ContactFormField name="number" type="number" labelText="Lon" />
        </v-col>
        <v-col>
          <ContactFormField name="number" type="number" labelText="Lat" />
        </v-col>
      </v-row>
    </div>

    <div class="py-1" v-for="(dataInput, i) in locationData" :key="i">
      <v-card color="grey lighten-3">
        <v-card-title class="text-h5">
          {{ dataInput.sectionName }}
        </v-card-title>
        <v-card-subtitle> {{ dataInput.name }} </v-card-subtitle>

        <v-row class="pa-2 ma-1">
          <div class="d-flex">
            <span class="mr-3">Lon</span>
            <h3>{{ dataInput.lon }}</h3>
          </div>
          <v-spacer></v-spacer>

          <div class="d-flex align-center">
            <span>Lat</span>
            <h3 class="mx-3">{{ dataInput.lat }}</h3>
            <v-btn @click="sheet = !sheet" small fab color="#F9AA33">
              <v-icon> mdi-delete</v-icon>
            </v-btn>
          </div>
        </v-row>
      </v-card>
    </div>
    <div class="text-center">
      <v-bottom-sheet v-model="sheet">
        <v-sheet class="text-center" height="200px">
          <v-btn
            class="mt-6 mr-6 px-9"
            outlined
            color="grey"
            @click="sheet = !sheet"
          >
            close
          </v-btn>
          <v-btn
            :loading="loading"
            class="mt-6 px-9"
            color="error"
            @click="timeout"
          >
            Delete
          </v-btn>
          <div class="py-3">Are you sure you want to delete this location?</div>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<script>
import ContactFormField from "../ContactFormField.vue";
export default {
  props: ["locationData"],
  components: { ContactFormField },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      sheet: false,
      loading: false,
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async timeout() {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.loading = false;

      this.sheet = true;
      await new Promise((resolve) => setTimeout(resolve, 500));
      this.sheet = false;
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 425px) {
  .container {
    padding: 0 5%;
  }
}
</style>
