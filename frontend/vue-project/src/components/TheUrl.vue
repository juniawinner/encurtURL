<script setup lang="ts">
import UrlItem from './UrlItem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import DocumentationIcon from './icons/IconDocumentation.vue';
import UrlRoleEncurtarLinks from './UrlRoleEncurtarLinks.vue';
</script>

<template>
  <UrlItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Encurte as URLs favoritas aqui!</template>
    Em bate-papos online ou em postagens nas redes sociais, e até em referências de pesquisas escolares,
    as URLs curtas são simples e eficientes!
    <template>
      <UrlRoleEncurtarLinks />
    </template>
  </UrlItem>

  <UrlItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Painel de URLs curtas</template>
    Seja encurt friend e aproveite as funcionalidades de compartilhar, apagar e observar os detalhes das URLs encurtadas.
  </UrlItem>

  <UrlItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Resgatar informações das URLs curtas</template>
    Caso você limpe o histórico do seu navegador Web, não se preocupe! Aqui os encurts friends
    conseguem resgatar informações sobre as URLs curtas.
    Por exemplo, resgatar o número de visitas aos seus links favoritos.
  </UrlItem>
</template>
