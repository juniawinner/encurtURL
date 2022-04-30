<script setup lang="ts">import api from '@/services/api';
import { ref } from 'vue';

let data = ref()

const axiosUrlGet = async (e: Event) => {

    e.preventDefault();

    await api.get("/urls")
        .then(response => (data.value = response.data))
        .catch(function (error) {
            console.error(error);
        });
}
</script>

<template>
    <section class="marketing">
        <p class="marketing-text">Conheça as URLs favoritas dos encurt friends:
            aqui é o Top10 de URLs mais visitadas!
        </p>

        <span> {{ data }} </span>

        <button class="url-get-btn" type="button" @click="axiosUrlGet">Top10 URLs</button>
    </section>
</template>

<style scoped>
.url-get-btn {
    background-color: transparent;
    cursor: pointer;
    transition-duration: 0.3s;
    height: 2rem;
    padding: 0 2%;
    border-radius: 0 20px 0 20px;
    border: 2px outset rgb(238, 36, 36);
    color: rgb(177, 27, 27);
    font-weight: bold;
}

.url-get-btn:hover {
    background-color: #96ceb4ff;
    font-weight: bold;
}
</style>
