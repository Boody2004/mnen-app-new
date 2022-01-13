<template>
  <section>
    <div id="title" style="background-color: #344955; padding-top: 10rem">
      <div class="text-h2 white--text text-center font-weight-regular">
        Contact Us
      </div>

      <form
        class="from"
        :action="`https://formsubmit.co/${contactUsEmail}`"
        method="POST"
      >
        <v-row>
          <v-col>
            <ContactFormField
              name="First Name"
              type="text"
              labelText="First Name"
            />
          </v-col>
          <v-col>
            <ContactFormField
              name="Last Name"
              type="text"
              labelText="Last Name"
            />
          </v-col>
        </v-row>
        <ContactFormField name="Email" type="email" labelText="Email" />
        <ContactFormField
          class="textarea"
          name="Message"
          type="textarea"
          labelText="Message"
        />
        <v-btn color="#F9AA33" type="submit"> Send Message </v-btn>
      </form>
    </div>

    <img
      style="background-color: #344955; width: 100%"
      src="https://irp.cdn-website.com/md/dmtmpl/e0c90ee0-3b9e-4c38-8400-9daf4f324bb7/dms3rep/multi/painting_border_hero_image2.svg"
    />

    <div
      class="d-flex align-center justify-center my-16"
      style="flex-wrap: wrap"
    >
      <div class="banner-left d-flex">
        <v-card class="mx-auto">
          <div class="ma-8">
            <h1 class="pl-6">Contact Information</h1>
          </div>

          <v-divider class="mx-4"></v-divider>

          <div class="ma-8">
            <div class="contact d-flex pa-5">
              <v-icon class="pr-5" color="amber darken-2">
                mdi-map-marker-multiple
              </v-icon>
              <div class="font-weight-large" style="color: #7f7f7f">
                Egypt
                <br />
                Ismailia, Sheikh Zayed District 1, Building 1
              </div>
            </div>

            <div class="contact d-flex pa-5">
              <v-icon class="pr-5" color="amber darken-2"> mdi-phone </v-icon>
              <div class="font-weight-large" style="color: #7f7f7f">
                +20 127 0951 250
              </div>
            </div>

            <div class="contact d-flex pa-5">
              <v-icon class="pr-5" color="amber darken-2"> mdi-gmail </v-icon>
              <div class="mail font-weight-large">
                <a href="mailto:abdelrahmanatefalibe@gmail.com" target="_blank">
                  abdelrahmanatefalibe@gmail.com
                </a>
              </div>
            </div>
          </div>
        </v-card>
      </div>

      <div class="banner-right d-flex">
        <div class="section-heading">
          <div class="ma-8">
            <h1 class="pb-4" style="font-size: 1.3rem">How Can We Help?</h1>
            <p
              class="font-weight-regular"
              style="color: #7f7f7f; font-size: 1rem"
            >
              Please select a topic below related to your inquiry. If you don't
              find what you need, don't send a message
            </p>
          </div>

          <v-divider class="mx-8"></v-divider>

          <div class="ma-8">
            <h3 class="pb-4"><a href="#">Get Inspired</a></h3>
            <p
              class="font-weight-regular"
              style="color: #7f7f7f; font-size: 1rem"
            >
              Discover the many ways in which our customers use Mnen App.
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </section>
</template>

<script>
import ContactFormField from "@/components/admin/inputData/ContactFormField.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  name: "ContactUs",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      show: false,

      contactUsEmail: process.env.VUE_APP_EMAIL,
    };
  },
  components: { ContactFormField, Footer },
};
</script>

<style scoped>
#title {
  height: 90vh;
}
.from {
  padding: 32px 20%;
}
@media (max-width: 768px) {
  #title {
    height: 105vh;
  }
  .from {
    padding: 5%;
  }
  .contact {
    flex-wrap: wrap;
  }
  .mail {
    font-size: 0.6rem;
  }
}

.banner-right {
  width: 40%;
  height: auto;
}
@media screen and (max-width: 992px) {
  .banner-left,
  .banner-right {
    width: 100%;
    padding: 5%;
  }
}
</style>
