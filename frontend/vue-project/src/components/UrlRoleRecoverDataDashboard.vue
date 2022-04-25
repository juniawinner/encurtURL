<script setup lang="ts">
import { inject } from 'vue';

let dataTotalVisits = inject("dataTotalVisits")

let dataKey = inject("dataKey")

let dataOriginalUrl = inject("dataOriginalUrl")

let warning = inject("warning")
</script>

<template>
    <section v-show="dataKey">
        <p class="title-list">Lista de Informações</p>
        <ul class="dashboard-list">

            <li>
                <span class="title">Visitas:</span>
                <span>{{ dataTotalVisits }}</span>
            </li>
            <li>
                <span class="title">Chave:</span>
                <span>{{ dataKey }}</span>
            </li>
            <li>
                <span class="title">Url longa:</span>
                <span>{{ dataOriginalUrl }}</span>
            </li>

        </ul>
    </section>

    <p class="warning">{{ warning }}</p>
</template>

<style scoped>
.title-list {
    text-align: center;
    font-weight: bold;
    color: rgba(13, 71, 90, 0.959);
    margin: 1% 0;
}

.title {
    font-weight: bold;
    color: rgba(13, 71, 90, 0.959);
}

.dashboard-list {
    list-style: none;
    margin: 1% 0;
    padding: 0;
}

li {
    display: grid;
    grid-template-columns: 1fr 3fr;
    transition: all .1s;
    margin: 2% 0;
    padding: 2% 2%;
    border-radius: 4px;
    border: 2px solid rgb(7, 87, 112);
}

li>span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

li>span:last-child {
    text-align: right;
}

.warning {
    text-align: center;
    font-weight: bold;
    color: rgb(177, 27, 27);
}

@media (min-width: 1024px) {
    li {
        grid-template-columns: 1fr 6fr;
        margin: 1% 0;
    }

    li>span:last-child {
        text-align: left;
    }
}
</style>
