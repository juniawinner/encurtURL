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

@media (min-width: 1024px) {
  .greetings h1 {
    font-size: 2rem;
  }

  .greetings h2 {
    font-size: 1rem;
  }
}
</style>
