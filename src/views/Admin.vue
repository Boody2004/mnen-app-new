<template>
  <section>
    <div class="Map Input Data">
      <h2
        class="text-center rounded-t-lg pa-3"
        style="color: #232f34; background-color: #f9aa33"
      >
        Map Input Data
      </h2>
      <MapInputData />
    </div>
  </section>
</template>

<script>
import MapInputData from "@/components/admin/inputData/map/MapInputData.vue";
export default {
  name: "Admin",
  components: { MapInputData },
};
</script>

<style scoped>
section {
  margin: 1.5%;
}
</style>
