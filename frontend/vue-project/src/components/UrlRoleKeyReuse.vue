<script setup lang="ts">
import api from '@/services/api';
import { ref } from 'vue';

let encurt_url = ref()

let message = ref("Você deseja excluir a URL curta?")

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
        <p>{{ message }}</p>
        <input id="url-encurt" class="url-delete" placeholder="Cole a URL curta aqui" type="url" v-model="encurt_url">
        <button class="url-delete-btn" @click="axiosUrlDelete">Excluir</button>
    </section>
</template>

<style scoped>
p {
    font-weight: bold;
    color: rgba(13, 71, 90, 0.959);
    margin: 0 0 1%;
}

.url-delete {
    width: 70%;
    height: 2rem;
    border: 2px solid rgb(238, 36, 36);
}

.url-delete-btn {
    background-color: transparent;
    cursor: pointer;
    transition-duration: 0.3s;
    height: 2rem;
    margin: 0 0 0 1%;
    padding: 0 2%;
    border-radius: 0 20px 0 20px;
    border: 2px outset rgb(238, 36, 36);
    color: rgb(177, 27, 27);
    font-weight: bold;
}

.url-delete-btn:hover {
    background-color: #96ceb4ff;
    font-weight: bold;
}
</style>
