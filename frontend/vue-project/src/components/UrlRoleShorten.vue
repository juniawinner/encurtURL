<script setup lang="ts">
import api from "@/services/api";
import { ref } from "vue";
import UrlRoleDashboard from "./UrlRoleDashboard.vue";

let original_url: string;

let serverReponse = ref()

async function axiosUrlForm() {
    let reponse = await api.post("/urls", {
        original_url: original_url
    })
        .then(response => (serverReponse.value = response))
        .catch(function (error) {
            console.error(error);
        });
}
</script>

<template>
    <form id="url-form" method="post" @submit="axiosUrlForm">
        <label for="url-original" class="url-rotulo">Cole sua URL favorita aqui</label>
        <br />
        <input id="url-original" class="url-entrada" type="url" v-model="original_url" />
        <button class="url-form-btn" type="submit">Encurtar URL</button>
    </form>

    <UrlRoleDashboard id="url-table">URLs Curtas: {{ serverReponse }}</UrlRoleDashboard>
</template>

<style scoped>
.url-form {
    margin: 1rem 1rem;
}

.url-entrada {
    width: 100%;
    height: 2rem;
}

.url-form-btn {
    margin: 0.4rem 0 1.5rem 0;
}
</style>
