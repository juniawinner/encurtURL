<script setup lang="ts">
import { inject } from 'vue';

let serverReponse = inject("serverReponse")
</script>

<template>
    <section>
        <p>Seja encurt friend e aproveite as funcionalidades de compartilhar,
            apagar e observar os detalhes das URLs encurtadas:
        </p>
        <br>
        <hr>
        <p class="title-table">Painel de URLs Favoritas</p>
        <table>
            <tr>
                <th>URL Curta</th>
                <th>Compartilhar</th>
            </tr>
            <tr>
                <td>{{ serverReponse }}</td>
                <td><button><a id="twitter-wjs" href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                            class="twitter-share-button" data-show-count="false">Tweet</a></button></td>
            </tr>
        </table>
    </section>
</template>

<style scoped>
.title-table {
    text-align: center;
    font-weight: bold;
    margin: 1% 0;
}

table {
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 2px solid black;
    text-align: center;
    padding: 1%;
}

hr {
    border: 1px solid black;
}
</style>
