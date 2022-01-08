<template>
  <div>
    <Map />
  </div>
</template>

<script>
import Map from "@/components/home/Map.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  components: {
    Map,
  },
});
</script>
