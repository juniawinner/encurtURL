<script setup lang="ts">
import api from '@/services/api';
import { onMounted, ref } from 'vue';


let dashboard = ref("#url-table")

onMounted(() => {
    dashboard.value
})

let url_curta = ref()
let numero_visita = ref()
let data_criacao = ref()

onMounted(() => {
    api.get("/urls")
        .then(responseUrl => (url_curta.value = responseUrl))
        .catch(function (error) {
            console.error(error);
        })
        .then(responseVisita => (numero_visita.value = responseVisita))
        .catch(function (error) {
            console.error(error);
        })
        .then(responseData => (data_criacao.value = responseData))
        .catch(function (error) {
            console.error(error);
        });
})
</script>

<template>
    <section>
        <p>
            Seja encurt friend e aproveite as funcionalidades de compartilhar,
            apagar e observar os detalhes das URLs encurtadas:
        </p>
        <br />
        <hr />
        <p class="title-table">Painel de URLs Curtas</p>
        <table>
            <tr>
                <th>URLs Curtas</th>
                <th>Número de Visitas</th>
                <th>Data de Criação</th>
            </tr>
            <tr>
                <td ref="urlCurta">{{ url_curta }}</td>
                <td ref="numeroVisita">{{ numero_visita }}</td>
                <td ref="dataCriacao">{{ data_criacao }}</td>
            </tr>
        </table>
    </section>
</template>

<style scoped>
.title-table {
    text-align: center;
    font-weight: bold;
}
</style>
