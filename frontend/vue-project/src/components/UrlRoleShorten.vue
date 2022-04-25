<script setup lang="ts">
import api from '@/services/api';
import { provide, ref } from 'vue';
import UrlRoleShortenDashboard from './UrlRoleShortenDashboard.vue';

let original_url = ref()

let serverReponse = ref()

const axiosUrlForm = async (e: Event) => {

    e.preventDefault();

    await api.post("/urls", {
        original_url: original_url.value
    })
        .then(response => (serverReponse.value = response.data))
        .catch(function (error) {
            console.error(error)
        })
}

provide("serverReponse", serverReponse)
</script>

<template>
    <form class="url-form" method="post" @submit="axiosUrlForm">
        <label for="url-original" class="url-rotulo">Cole a URL longa aqui</label>
        <br />
        <input id="url-original" class="url-entrada" placeholder="https://www.exemplo.com.br/url-super-gigante"
            type="url" v-model="original_url" required>
        <button class="url-form-btn" type="submit">Encurtar URL</button>
    </form>

    <UrlRoleShortenDashboard />
</template>
 
<style scoped>
.url-form {
    margin: 1% 0 5% 0;
}

.url-rotulo {
    font-weight: bold;
    color: rgba(13, 71, 90, 0.959);
}

.url-entrada {
    width: 100%;
    margin: 1% 0 0;
    height: 2rem;
    border: 2px solid rgb(238, 36, 36);
}

.url-form-btn {
    background-color: transparent;
    cursor: pointer;
    transition-duration: 0.3s;
    height: 2rem;
    margin: 2% 0 0 0;
    padding: 0 2%;
    border-radius: 0 20px 0 20px;
    border: 2px outset rgb(238, 36, 36);
    color: rgb(177, 27, 27);
    font-weight: bold;
}

.url-form-btn:hover {
    background-color: #96ceb4ff;
    font-weight: bold;
}

@media (min-width: 1024px) {
    .url-form {
        margin: 1% 0 3% 0;
    }

    .url-form-btn {
        margin: 1% 0 0 0;
    }
}
</style>
