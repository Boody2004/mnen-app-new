<template>
  <section class="white--text">
    <div
      class="title text-center"
      style="background-color: #344955; padding: 5% 20%"
    >
      <h1 class="text-h2 font-weight-regular">About us</h1>
      <p class="pt-8 font-weight-light font-italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        voluptatibus ex rem, libero voluptatum, ab quasi dolores neque, qui nemo
        dignissimos iure praesentium velit error cupiditate natus animi est in?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        voluptatibus ex rem, libero voluptatum, ab quasi dolores neque, qui nemo
        dignissimos iure praesentium velit error cupiditate natus animi est in?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        voluptatibus ex rem, libero voluptatum, ab quasi dolores neque, qui nemo
        dignissimos iure praesentium velit error cupiditate natus animi est in?
      </p>
    </div>

    <img
      style="background-color: #344955; width: 100%"
      src="https://irp.cdn-website.com/md/dmtmpl/e0c90ee0-3b9e-4c38-8400-9daf4f324bb7/dms3rep/multi/painting_border_hero_image2.svg"
    />

    <div class="voulunteering-banner d-flex align-center justify-center my-10">
      <div class="banner-left text-center mx-16">
        <img
          style="width: 100%"
          src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1641918128/Abdelrahman_h46ltt.jpg"
          alt="voulunteering banner image"
        />
      </div>
      <div class="banner-right mx-16 black--text">
        <h2 class="text-h4 font-weight-regular py-5">Abd Elrahman Atef</h2>
        <p class="font-weight-light font-italic">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit totam incidunt quisquam neque ducimus mollitia sapiente,
          obcaecati repudiandae. Aperiam nulla consequuntur odit sunt eveniet
          sequi accusamus sint libero maiores dicta?
        </p>
      </div>
    </div>

    <footer
      class="d-flex justify-space-between align-center py-3"
      style="background-color: #344955; color: #cfd8dc"
    >
      <span class="px-8">
        Copyright © {{ new Date().getFullYear() }}
        <span style="color: #f9aa33">Abd Elrahman Atef - BE</span>. All rights
        reserved
      </span>

      <div class="px-8">
        <v-btn icon color="grey" class="px-2">
          <v-icon> mdi-facebook </v-icon>
        </v-btn>
        <v-btn icon color="grey" class="px-2">
          <v-icon> mdi-instagram </v-icon>
        </v-btn>
        <v-btn icon color="grey" class="px-2">
          <v-icon> mdi-linkedin </v-icon>
        </v-btn>
        <v-btn icon color="grey" class="px-2">
          <v-icon> mdi-github </v-icon>
        </v-btn>
      </div>
    </footer>
  </section>
</template>

<style scoped>
@media (max-width: 768px) {
  .voulunteering-banner,
  footer {
    flex-wrap: wrap;
    flex-flow: column wrap;
  }
  .banner-right {
    margin: 0;
  }
}
</style>
