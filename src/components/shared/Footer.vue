<template>
  <footer
    class="d-flex justify-space-between align-center py-3"
    style="background-color: #344955; color: #cfd8dc"
  >
    <span class="px-8 text-center">
      Copyright © {{ new Date().getFullYear() }}
      <span style="color: #f9aa33">Abd Elrahman Atef - BE</span>. All rights
      reserved
    </span>

    <div class="px-8">
      <v-btn icon color="grey" class="mx-1">
        <v-icon> mdi-facebook </v-icon>
      </v-btn>
      <v-btn icon color="grey" class="mx-1">
        <v-icon> mdi-instagram </v-icon>
      </v-btn>
      <v-btn icon color="grey" class="mx-1">
        <v-icon> mdi-linkedin </v-icon>
      </v-btn>
      <v-btn icon color="grey" class="mx-1">
        <v-icon> mdi-github </v-icon>
      </v-btn>
      <div class="text-center">
        <v-btn outlined color="#F9AA33" class="mt-2" to="/contactUs">
          Contact Us
        </v-btn>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@media (max-width: 768px) {
  footer {
    flex-wrap: wrap;
    flex-flow: column wrap;
  }
}
</style>
