<template>
  <div>
    <Map />
  </div>
</template>

<script>
import Map from "@/components/map/Map.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  components: {
    Map,
  },
});
</script>
