<template>
  <div class="columns is-mobile is-multiline">
    <Card v-for="(project, index) in projects" :id="index" v-bind:key="index"/>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Card
  },
  computed: {
    ...mapGetters(["projects"])
  }
};
</script>

<style></style>
