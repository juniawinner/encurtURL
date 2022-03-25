<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="EncurtURL logo" class="logo" src="./assets/logo.svg" width="125" />

    <div class="wrapper">
      <HelloWorld msg="EncurtURL" />
    </div>
    <div class="github">
      <article>
        <h3>
          <a
            href="https://github.com/juniawinner"
            title="Mulher negra e autodidata na teoria-prática sobre Tecnologia"
          > <img src="./assets/github.svg" alt="GitHub de Junia Winner"> Junia Winner</a>
        </h3>
        <p>
          Com Vue e TypeScript no frontend, a interface de usuário é moderna e funcional.
          Já o TypeScripit com Node e Express no backend apresentam eficiência,
          através do API/REST que se comunica com a base de dados (TypeORM e MongoDB).
        </p>
      </article>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
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

a,
.green {
  text-decoration: none;
  color: rgb(177, 27, 27);
  transition: 0.4s;
}

article {
  text-align: center;
  margin: 10% 0;
  background-color: rgba(255, 255, 255, 0.100);
  backdrop-filter: blur(15px);
  color: var(--vt-c-black);
}

@media (min-width: 1024px) {
  body {
    display: grid;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 0 1rem;
  }

  header {
    display: grid;
    grid-template-areas:
      "logo"
      "wrapper"
      "github";
    grid-auto-flow: row;
    grid-template-rows: auto;
    grid-gap: 2%;
  }

  .logo {
    grid-area: logo;
    text-align: center;
    margin: 2rem 2rem 2rem 2rem;
  }

  header .wrapper {
    grid-area: wrapper;
    text-align: left;
    margin: 0 30px 0 0;
  }

  .github {
    grid-area: github;
    text-align: left;
    margin: 50px 30px 0 0;
  }
}
</style>
