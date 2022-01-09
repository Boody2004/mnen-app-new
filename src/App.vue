<template>
  <v-app>
    <Sidebar />
  </v-app>
</template>

<script>
import Vue from "vue";
import Sidebar from "./components/app/SideBar.vue";

export default Vue.extend({
  components: { Sidebar },
  name: "App",
});
</script>
