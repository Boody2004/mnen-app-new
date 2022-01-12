<template>
  <section>
    <div style="height: 90vh; background-color: #344955; padding-top: 10rem">
      <div class="text-h2 white--text text-center font-weight-regular">
        About Us
      </div>

      <p class="p white--text font-weight-light font-italic" style="margin: 0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure
        laudantium aut ut odit fuga ipsam reiciendis nisi quisquam placeat
        eligendi quibusdam, esse numquam veniam consectetur tempore aperiam
        ducimus? Sed. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ad iure laudantium aut ut odit fuga ipsam reiciendis nisi quisquam
        placeat eligendi quibusdam, esse numquam veniam consectetur tempore
        aperiam ducimus? Sed. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ad iure laudantium aut ut odit fuga ipsam reiciendis nisi quisquam
        placeat eligendi quibusdam, esse numquam veniam consectetur tempore
        aperiam ducimus? Sed. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ad iure laudantium aut ut odit fuga ipsam reiciendis nisi quisquam
        placeat eligendi quibusdam, esse numquam veniam consectetur tempore
        aperiam ducimus? Sed.
      </p>
    </div>

    <img
      style="background-color: #344955; width: 100%"
      src="https://irp.cdn-website.com/md/dmtmpl/e0c90ee0-3b9e-4c38-8400-9daf4f324bb7/dms3rep/multi/painting_border_hero_image2.svg"
    />

    <div class="voulunteering-banner d-flex align-center justify-center my-10">
      <div class="banner-left text-center mx-10">
        <img
          style="width: 100%"
          src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1641918128/Abdelrahman_h46ltt.jpg"
          alt="voulunteering banner image"
        />
      </div>
      <div class="banner-right mx-10 black--text">
        <h2 class="text-h4 font-weight-regular py-5">Abd Elrahman Atef</h2>
        <p class="font-weight-light font-italic">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit totam incidunt quisquam neque ducimus mollitia sapiente,
          obcaecati repudiandae. Aperiam nulla consequuntur odit sunt eveniet
          sequi accusamus sint libero maiores dicta?
        </p>
      </div>
    </div>

    <Footer />
  </section>
</template>

<script>
import Footer from "../components/shared/Footer.vue";
export default {
  name: "AboutUS",
  components: { Footer },
};
</script>

<style scoped>
.p {
  padding: 32px 20%;
}
@media (max-width: 768px) {
  .p {
    padding: 32px 0;
  }
  .voulunteering-banner {
    flex-wrap: wrap;
    flex-flow: column wrap;
  }
}
</style>
