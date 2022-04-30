<script setup lang="ts">
import Home from './components/Home.vue';
import HomeTop10Url from './components/HomeTop10Url.vue';
import TheUrl from './components/TheUrl.vue';
import ProjectAuthor from './components/ProjectAuthor.vue';
</script>

<template>
  <header>
    <img class="logo" alt="EncurtURL logo" src="./assets/logo.svg" width="125" />

    <div class="wrapper">
      <Home msg="EncurtURL" />
    </div>

    <div class="top10URL">
      <HomeTop10Url />
    </div>
  </header>

  <main>
    <TheUrl />
  </main>

  <footer>
    <ProjectAuthor />
  </footer>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.green {
  text-decoration: none;
  color: rgb(177, 27, 27);
}

@media (min-width: 1024px) {
  body {
    display: grid;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-areas:
      "header main"
      "footer footer";
    grid-template-columns: 1fr 3fr;
    padding: 0 1rem;
  }

  header {
    grid-area: header;
    display: grid;
    grid-template-areas:
      "logo"
      "wrapper"
      "top10URL";
    grid-auto-flow: row;
    grid-template-rows: auto;
    grid-gap: 2%;
    border-right: 2px dashed rgb(238, 36, 36);
  }

  .logo {
    grid-area: logo;
    text-align: center;
    margin: 2rem 2rem;
  }

  header .wrapper {
    grid-area: wrapper;
    text-align: left;
    margin: 0 30px 0 0;
  }

  .top10URL {
    grid-area: top10URL;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }
}
</style>
