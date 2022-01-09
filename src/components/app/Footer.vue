<template>
  <v-footer fixed padless>
    <v-card width="100%" class="text-center" color="#344955">
      <v-card-text>
        <v-btn class="mx-4" color="#F9AA33" icon>
          <v-icon> mdi-facebook </v-icon>
        </v-btn>

        <v-btn class="mx-4" color="#F9AA33" icon>
          <v-icon> mdi-twitter </v-icon>
        </v-btn>

        <v-btn class="mx-4" color="#F9AA33" icon>
          <v-icon> mdi-linkedin </v-icon>
        </v-btn>

        <v-btn class="mx-4" color="#F9AA33" icon>
          <v-icon> mdi-instagram </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <strong>
          Copyright © {{ new Date().getFullYear() }} Abd Elrahman Atef -
          <span style="color: #f9aa33">BE</span>. All rights reserved
        </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
