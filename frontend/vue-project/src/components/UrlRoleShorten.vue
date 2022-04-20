<script setup lang="ts">import api from '@/services/api';
import { ref } from 'vue';


let original_url: string;

let serverReponse = ref()

const axiosUrlForm = async (e: Event) => {

    e.preventDefault();

    await api.post("/urls", {
        original_url: original_url
    })
        .then(response => (serverReponse.value = response))
        .catch(function (err: Error) {
            console.error(err)
        })
}

</script>

<template>
    <form id="url-form" method="post" @submit="axiosUrlForm">
        <label for="url-original" class="url-rotulo">Cole sua URL favorita aqui: {{ original_url }} </label>
        <br />
        <input id="url-original" class="url-entrada" type="text" v-model.lazy="original_url" />
        <button class="url-form-btn" type="submit">Encurtar URL</button>
        <p>URLs Curtas: {{ serverReponse }}</p>
    </form>
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