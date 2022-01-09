<template>
  <div class="overflow-hidden">
    <v-app-bar
      absolute
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      color="#344955"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-btn fab class="mr-4 mt-5" color="#F9AA33" to="/">
        <v-icon color="#232F34" large> mdi-pound </v-icon>
      </v-btn>

      <v-toolbar-title>Mnen app</v-toolbar-title>
    </v-app-bar>

    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="955"
    >
      <v-container style="padding-top: 5rem">
        <router-view />
      </v-container>
    </v-sheet>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      dark
      color="#344955"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="amber--text text--darken-2
"
        >
          <div class="logo ma-3">
            <v-icon color="#F9AA33" x-large> mdi-hand-pointing-right </v-icon>
            <h3>Mnen app</h3>
          </div>

          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/map">
            <v-list-item-icon>
              <v-icon> mdi-map-marker-circle </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Map</v-list-item-title>
          </v-list-item>

          <v-list-item to="/aboutUs">
            <v-list-item-icon>
              <v-icon> mdi-attachment </v-icon>
            </v-list-item-icon>
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item>

          <v-list-item to="/contactUs">
            <v-list-item-icon>
              <v-icon> mdi-comment-text-outline </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contact Us</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn to="/admin" block color="#F9AA33"> Admen </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
