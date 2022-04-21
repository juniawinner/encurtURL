<script setup lang="ts">
import api from '@/services/api';
import { ref } from 'vue';

let encurt_url = ref()

const axiosUrlGet = async (e: Event) => {

    e.preventDefault();

    await api.get("/urls", {
        data: {
            encurt_url: encurt_url.value
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
}
</script>

<template>
    <section>
        <input id="url-encurt-recover" class="url-get" placeholder="Cole a URL curta aqui" type="url"
            v-model="encurt_url">
        <button class="url-get-btn" @click="axiosUrlGet">Enviar</button>
    </section>
</template>

<style scoped>
.url-get {
    width: 70%;
    height: 2rem;
}

.url-get-btn {
    cursor: pointer;
    height: 2rem;
}
</style>
