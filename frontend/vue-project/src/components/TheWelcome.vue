<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Encurte as URLs favoritas aqui!</template>
    Em bate-papos online, em postagens nas redes sociais e até em referências de pesquisas escolares, 
    as URLs curtas são simples e eficientes!
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Histórico de URLs</template>
    Seja encurt friend e aproveite as funcionalidades de compartilhar, apagar e observar os detalhes das URLs encurtadas.
  </WelcomeItem>
</template>
