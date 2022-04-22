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
.url-delete {
    width: 70%;
    height: 2rem;
}

.url-delete-btn {
    cursor: pointer;
    transition-duration: 0.3s;
    height: 2rem;
    margin: 0 0 0 1%;
    border-radius: 8px;
}

.url-delete-btn:hover {
    background-color: rgb(34, 145, 179);
    color: white;
}
</style>
