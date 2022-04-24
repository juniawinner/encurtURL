<script setup lang="ts">
import { inject, ref } from 'vue';

let serverReponse = inject("serverReponse")

let info = ref(serverReponse)

let confirm = ref()

function copyServerResponse() {
    let text = `${info.value}`;
    navigator.clipboard.writeText(text);
}

function confirmCopy() {
    confirm.value = "Copiado com sucesso!";

    setTimeout(() => {
        confirm.value = "";
    }, 3000);
}
</script>

<template>
    <section>
        <p>Seja encurt friend e aproveite as funcionalidades de compartilhar,
            apagar e observar os detalhes das URLs encurtadas:
        </p>
        <br>
        <p class="title-table">Painel de URLs Favoritas</p>
        <table>
            <tr>
                <th>URL Curta</th>
                <th>Compartilhar</th>
            </tr>
            <tr>
                <td class="td-one">{{ serverReponse }}</td>

                <td class="td-two">
                    <button class="copy-btn" @click="copyServerResponse()" @mouseup="confirmCopy()">Copiar</button>

                    <!-- https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/parameter-reference1 -->
                    <a class="twitter-share-button" href="https://twitter.com/intent/tweet" data-size="large"
                        data-text="URL super interessante: " data-hashtags="EncurtURL,BlackLivesMatter">
                        Tweet
                    </a>
                </td>
            </tr>
        </table>
        <p class="confirm">{{ confirm }}</p>
    </section>
</template>

<style scoped>
.title-table {
    text-align: center;
    font-weight: bold;
    color: rgba(13, 71, 90, 0.959);
    margin: 1% 0;
}

table {
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 2px solid rgb(7, 87, 112);
    text-align: center;
    padding: 1%;
}

th {
    font-weight: bold;
    color: rgba(13, 71, 90, 0.959);
}

.td-one {
    width: 60%;
}

.td-two {
    width: 40%;
}

.confirm {
    text-align: right;
    font-weight: bold;
    color: darkgreen;
}

.copy-btn {
    background-color: transparent;
    cursor: pointer;
    transition-duration: 0.3s;
    height: 1.5rem;
    margin: 4% 3%;
    border-radius: 0 20px 0 20px;
    border: 2px outset rgb(238, 36, 36);
    color: rgb(177, 27, 27);
}

.copy-btn:hover {
    background-color: #96ceb4ff;
}

@media (min-width: 1024px) {
    .td-one {
        width: 70%;
    }

    .td-two {
        width: 30%;
    }
}
</style>
