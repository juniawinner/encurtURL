<script setup lang="ts">
import { inject } from 'vue';

let dataTotalVisits = inject("dataTotalVisits")

let dataKey = inject("dataKey")

let dataOriginalUrl = inject("dataOriginalUrl")
</script>

<template>
    <section>
        <hr>
        <ul class="dashboard-list">

            <li>Total de Visitas: {{ dataTotalVisits }}</li>
            <li>Identificador da Url Curta: {{ dataKey }} </li>
            <li>Url longa: {{ dataOriginalUrl }} </li>

        </ul>
        <hr>
    </section>
</template>

<style scoped>
hr {
    border: 1px solid rgb(7, 87, 112);
}
</style>
