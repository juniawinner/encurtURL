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
        <a
          href="https://github.com/juniawinner"
          title="Mulher negra e autodidata na teoria-prática sobre Tecnologia"
        >
          <img src="src/assets/github.svg" alt="GitHub de Junia Winner" /> Junia Winner
        </a>
      </h3>
      <p>
        Com Vue e TypeScript no frontend, a interface de usuário é moderna e funcional.
        Já o TypeScripit com Node e Express no backend apresentam eficiência,
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
  text-align: center;
  margin: 10% 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  color: var(--vt-c-black);
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
