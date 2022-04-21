<script setup lang="ts">
import UrlItem from './UrlItem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import DocumentationIcon from './icons/IconDocumentation.vue';
import EcosystemIcon from './icons/IconEcosystem.vue';
import UrlRoleShorten from './UrlRoleShorten.vue';
import UrlRoleRecoverData from './UrlRoleRecoverData.vue';
import UrlRoleKeyReuse from './UrlRoleKeyReuse.vue';
</script>

<template>
  <UrlItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Encurte as URLs favoritas aqui!</template>
    Em bate-papos online ou em postagens nas redes sociais, e até em referências de pesquisas escolares,
    as URLs curtas são simples e eficientes!
    <br />
    <br />
    <UrlRoleShorten />
  </UrlItem>

  <UrlItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Resgatar informações das URLs favoritas</template>
    Quer descobrir o número de visitas à URL curta? Não se preocupe, aqui os encurts friends
    conseguem resgatar informações sobre as URLs favoritas.
    <br>
    <br>
    <UrlRoleRecoverData />
  </UrlItem>

  <UrlItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Excluir informações das URLs curtas</template>
    Aqui os encurts friends conseguem apagar todas as informações sobre as URLs curtas.
    <br>
    <br>
    <UrlRoleKeyReuse />
  </UrlItem>
</template>
