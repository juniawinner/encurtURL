<script setup lang="ts">
import api from '@/services/api';
import { ref } from 'vue';

let data = ref<object[]>([])

const axiosUrlGet = async (e: Event) => {

    e.preventDefault();

    await api.get("/urls")
        .then(response => {
            data.value = response.data

            setTimeout(() => {
                data.value = [];
            }, 4000);
        })
        .catch(function (error) {
            console.error(error);
        });
}
</script>

<template>
    <div id="myModal" class="modal">

        <div class="modal-content">

            <div class="modal-header">
                <p>Conheça as URLs favoritas dos encurt friends.</p>
                <p>Aqui é o Top10 de URLs mais visitadas!</p>
            </div>

            <div class="modal-body">
                <span> {{ data.at(0) }} </span>
                <span> {{ data.at(1) }} </span>
                <span> {{ data.at(2) }} </span>
                <span> {{ data.at(3) }} </span>
                <span> {{ data.at(4) }} </span>
                <span> {{ data.at(5) }} </span>
                <span> {{ data.at(6) }} </span>
                <span> {{ data.at(7) }} </span>
                <span> {{ data.at(8) }} </span>
                <span> {{ data.at(9) }} </span>
            </div>

            <div class="modal-footer">
                <button class="url-get-btn" type="button" @click="axiosUrlGet">Top10 URLs</button>
            </div>

        </div>

    </div>
</template>

<style scoped>
.url-get-btn {
    background-color: transparent;
    cursor: pointer;
    transition-duration: 0.3s;
    height: 2rem;
    padding: 0 2%;
    border-radius: 0 20px 0 20px;
    border: 3px outset rgb(238, 36, 36);
    color: rgb(177, 27, 27);
    font-weight: bold;
}

.url-get-btn:hover {
    background-color: #96ceb4ff;
    font-weight: bold;
}

.modal {
    width: 100%;
    height: 100%;
    padding-top: 40px;
}

.modal-header {
    background-color: #5cb85c;
    color: white;
    padding: 8px 16px;
}

.modal-body {
    text-align: left;
    color: black;
    padding: 2px 12px;
}

.modal-footer {
    background-color: #5cb85c;
    padding: 8px 16px;
}

.modal-content {
    text-align: center;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    box-shadow: -8px 9px 10px 1px rgba(150, 2, 2, 0.75);
}

@media (min-width: 1024px) {
    .modal {
        padding-top: 0;
    }
}
</style>
