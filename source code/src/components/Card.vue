<template>
  <div class="column is-half-tablet is-one-third-desktop">
    <div class="parent">
      <div class="child">
        <img :src="require('../assets/' + image)">

        <router-link
          :to="{
            name: 'project',
            params: { project_name: title, id }
          }"
        >
          <div class="text">
            <h3 class="title has-text-white">{{ title }}</h3>
            <h5 class="subtitle has-text-white">{{ subtitle }}</h5>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    title() {
      return this.$store.getters.title(this.id);
    },
    subtitle() {
      return this.$store.getters.subtitle(this.id);
    },
    image() {
      return this.$store.getters.image(this.id);
    }
  }
};
</script>

<style scoped>
/* Image zoom on hover + Overlay colour */

.parent {
  cursor: pointer;
  width: 100%;
  overflow: hidden;
}

.child {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.text {
  display: none;
  text-align: center;
  margin: 0 10%;
  position: absolute;
  top: 20%;
  left: 0;
  bottom: 0;
  right: 0;
  height: 20vh;

  /*text-decoration: none;*/
}

.parent:hover .child,
.parent:focus .child {
  -ms-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
}

.parent:hover .child:before,
.parent:focus .child:before {
  display: block;
}

.parent:hover .text,
.parent:focus .text {
  display: block;
}

.child:before {
  content: "";
  display: none;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(25, 34, 44, 0.89);
}
</style>
