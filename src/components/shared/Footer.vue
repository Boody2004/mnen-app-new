<template>
  <footer
    class="d-flex justify-space-between align-center py-6"
    style="background-color: #344955; color: #cfd8dc"
  >
    <span class="px-8 text-center">
      Copyright © {{ new Date().getFullYear() }}
      <span style="color: #f9aa33">Abd Elrahman Atef</span>. All rights reserved
    </span>
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
