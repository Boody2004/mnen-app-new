<template>
  <section style="background: #344955">
    <div class="text-h3 white--text text-center py-5">Contact Us</div>

    <form
      style="padding: 0 20%"
      :action="`https://formsubmit.co/${contactUsEmail}`"
      method="POST"
    >
      <ContactFormField name="name" type="text" labelText="Fullname" />
      <ContactFormField name="email" type="email" labelText="Email" />
      <ContactFormField
        class="textarea"
        name="message"
        type="textarea"
        labelText="Message"
      />
      <div class="pb-5">
        <v-btn color="#F9AA33" type="submit"> Send </v-btn>
      </div>
    </form>

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
      contactUsEmail: process.env.VUE_APP_EMAIL,
    };
  },
  components: { ContactFormField, Footer },
};
</script>
