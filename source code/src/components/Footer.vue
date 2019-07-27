<template>
  <footer class="footer has-background-grey">
    <div class="container">
      <div class="columns">
        <div class="column is-half has-text-light">
          <div class="footer-logo is-128x128">
            <img src="../assets/logo.png" />
          </div>
          <ul class="link-list">
            <li>Jason Li's Personal Page</li>
            <li>
              Handcrafted with
              <span>
                <font-awesome-icon icon="heart" />
              </span>
              by myself
            </li>
            <li>
              Made with
              <a href="https://bulma.io/">Bulma</a> and
              <a href="https://vuejs.org/">Vue.js</a>
            </li>

            <li>
              Source available on
              <a href="https://github.com/lijaso15/personal_page">GitHub.</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <div class="footer-column">
            <div class="footer-header has-text-white">
              <h3>Links</h3>
            </div>
            <ul class="link-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="column">
          <div class="footer-column">
            <div class="footer-header has-text-white">
              <h3>Personal</h3>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item" href="https://github.com/lijaso15">
                    <font-awesome-icon :icon="['fab', 'github']" />
                  </a>
                  <a class="level-item" href="https://www.linkedin.com/in/jason-li-32652b162/">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                  </a>
                </div>
              </nav>
              <ul class="link-list">
                <li>jasonlimale.li@mail.utoronto.ca</li>
                <li>(647)-562 4730</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.column.is-half {
  text-align: center;
}
a {
  color: hsl(0, 0%, 71%);
}

span {
  color: #fd0e35;
}
</style>
