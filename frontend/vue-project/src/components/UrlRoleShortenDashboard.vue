<script setup lang="ts">
import api from '@/services/api';
import { inject, ref } from 'vue';

let serverReponse = inject("serverReponse")

let encurt_url = ref(serverReponse)

let message = ref("Apagar")

const axiosUrlDelete = async (e: Event) => {

    e.preventDefault();

    await api.delete("/urls", {
        data: {
            encurt_url: encurt_url.value
        }
    })
        .then(response => (message.value = response.data))
        .catch(function (error) {
            console.error(error);
        });
}
</script>

<template>
    <section>
        <p>Seja encurt friend e aproveite as funcionalidades de compartilhar,
            apagar e observar os detalhes das URLs encurtadas:
        </p>
        <br>
        <hr>
        <p class="title-table">Painel de URLs Favoritas</p>
        <table>
            <tr>
                <th>URL Curta</th>
                <th>Excluir URL Curta</th>
            </tr>
            <tr>
                <td>{{ serverReponse }}</td>
                <td><button class="url-delete-btn" @click="axiosUrlDelete">{{ message }}</button></td>
            </tr>
        </table>
    </section>
</template>

<style scoped>
.title-table {
    text-align: center;
    font-weight: bold;
    margin: 1% 0;
}

table {
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 2px solid black;
    text-align: center;
    padding: 1%;
}

hr {
    border: 1px solid black;
}

.url-delete-btn {
    cursor: pointer;
}
</style>
