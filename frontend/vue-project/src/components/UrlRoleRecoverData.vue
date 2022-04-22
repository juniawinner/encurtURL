<script setup lang="ts">
import api from '@/services/api';
import { provide, ref } from 'vue';
import UrlRoleRecoverDataDashboard from './UrlRoleRecoverDataDashboard.vue';

let encurt_url = ref()

let dataTotalVisits = ref()

let dataKey = ref()

let dataOriginalUrl = ref()

const axiosUrlPost = async (e: Event) => {

    e.preventDefault();

    await api.post("/urls/recover-data", {
        encurt_url: encurt_url.value
    })
        .then(response => {
            dataTotalVisits.value = response.data.total_visits,
                dataKey.value = response.data.chave,
                dataOriginalUrl.value = response.data.original_url
        })
        .catch(function (error) {
            console.error(error);
        });
}

provide("dataTotalVisits", dataTotalVisits)
provide("dataKey", dataKey)
provide("dataOriginalUrl", dataOriginalUrl)
</script>

<template>
    <section>
        <input id="url-encurt-recover" class="url-post" placeholder="Cole a URL curta aqui" type="url"
            v-model="encurt_url">
        <button class="url-post-btn" @click="axiosUrlPost">Enviar</button>
    </section>
    <br>

    <UrlRoleRecoverDataDashboard />
</template>

<style scoped>
.url-post {
    width: 70%;
    height: 2rem;
}

.url-post-btn {
    cursor: pointer;
    transition-duration: 0.3s;
    height: 2rem;
    margin: 0 0 0 1%;
    border-radius: 8px;
}

.url-post-btn:hover {
    background-color: rgb(34, 145, 179);
    color: white;
}
</style>
