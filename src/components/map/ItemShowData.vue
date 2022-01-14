<template>
  <section>
    <div class="py-2" v-for="(dataInput, i) in inputData" :key="i">
      <v-card dark style="background-color: #344955">
        <v-card-title class="text-h5">
          {{ dataInput.sectionName }}
        </v-card-title>
        <v-card-subtitle> {{ dataInput.name }} </v-card-subtitle>
      </v-card>
    </div>
  </section>
</template>

<script>
export default {
  props: ["inputData"],
};
</script>
