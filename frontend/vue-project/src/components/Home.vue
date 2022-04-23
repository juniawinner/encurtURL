<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2>
      O encurtamento dos seus links favoritos é
      útil, rápido e leve!
    </h2>
  </div>
  <div class="github">
    <article>
      <h3>
        <a href="https://github.com/juniawinner" title="Mulher negra e autodidata na teoria-prática sobre Tecnologia">
          <img src="src/assets/github.svg" alt="GitHub de Junia Winner" /> Junia Winner
        </a>
      </h3>
      <br>
      <p>
        Site para encurtamento de URLs.
        <br>
        A interface de usuário, com design moderno e intuitivo,
        foi desenvolvido com Vue e TypeScript.
        <br>
        Ademais, a tipagem estática no backend maximiza a eficiência do Node/Express,
        através do API/REST que se comunica com a base de dados (TypeORM e MongoDB).
      </p>
    </article>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h2 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h2 {
  text-align: center;
}

article {
  background-color: #96ceb4ff;
  font-family: American Typewriter, serif;
  text-align: center;
  color: var(--vt-c-black);
  margin: 10% 0;
}

@media (min-width: 1024px) {
  .greetings h1 {
    text-align: left;
    font-size: 2rem;
  }

  .greetings h2 {
    text-align: left;
    font-size: 1rem;
  }
}
</style>
