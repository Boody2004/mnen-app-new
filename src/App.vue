<template>
  <v-app>
    <ToolBar />
    <Footer />
  </v-app>
</template>

<script>
import Vue from "vue";
import ToolBar from "./components/app/ToolBar.vue";
import Footer from "./components/app/Footer.vue";

export default Vue.extend({
  components: { ToolBar, Footer },
  name: "App",
});
</script>
