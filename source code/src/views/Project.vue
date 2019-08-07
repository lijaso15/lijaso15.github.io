<template>
  <div>
    <Navbar/>
    <section class="section">
      <div class="container">
        <h1 class="title">{{ project_name }}</h1>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="content">
          <p v-if="typeof(summary[0]) === 'string'">{{ summary[0] }}</p>
          <p v-else>  {{ summary[2]}}  
            <ul> 
              <li v-for="desc in summary[0]" v-bind:key="desc">  {{desc}}   </li>
            </ul>
              </p>
          <div class="columns" >
            <div class="column" v-for="demo in demos" v-bind:key="demo"> 
              <embed v-if="demo.split('.')[1] === 'pdf'" :src="demo + '#view=FitH'" type="application/pdf">
              <img v-if="demo.split('.')[1] === 'gif' || demo.split('.')[1] === 'png'" :src="demo" :title="demo" />
            </div>
          </div>
          <p>{{ summary[1] }}</p>
          <ul style="list-style: none;">
            <li v-for="link in source" v-bind:key="link">
              <a :href="link">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from '@/components/Footer.vue';

export default {
  props: ["id", "project_name"],
  components: {
    Navbar,
    Footer
  },
  computed: {
    summary() {
      return this.$store.getters.summary(this.id);
    },
    demos() {
      return this.$store.getters.demos(this.id);
    },
    source() {
      return this.$store.getters.source(this.id);
    }
  }
};
</script>

<style scoped>

embed {
  height: 50vh;
  width: 100%;
}

.column {

  text-align: center;

}





</style>
