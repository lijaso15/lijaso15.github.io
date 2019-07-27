<template>
  <div>
    <Navbar />
    <Intro />
    <Featured />
    <Footer />
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import Featured from "@/components/Featured.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Intro,
    Featured,
    Navbar,
    Footer
  }
};
</script>

<style></style>
