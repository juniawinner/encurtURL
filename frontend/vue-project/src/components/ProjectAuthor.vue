<template>
    <div class="author">
        <article>
            <p class="title">EncurtURL <em>- MIT License</em></p>
            <br>
            <p class="text">
                Site para encurtamento de URLs.
                <br>
                A interface de usuário, com design moderno e intuitivo,
                foi desenvolvida com Vue e TypeScript. Ademais, a tipagem estática no backend
                maximiza a eficiência do Node/Express, através do API/REST que se comunica
                com a base de dados (TypeORM e MongoDB).
            </p>
            <address class="contact">
                <a href="https://github.com/juniawinner"
                    title="Mulher negra e autodidata na teoria-prática sobre Tecnologia">
                    <img src="src/assets/github.svg" alt="GitHub de Junia Winner" /> Junia Winner
                </a>
            </address>
        </article>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');

article {
    display: grid;
    grid-template-areas:
        "title"
        "text"
        "contact";
    grid-auto-flow: row;
    grid-template-rows: auto;
    grid-gap: 2%;
    background-color: transparent;
    border: 2px dashed rgb(238, 36, 36);
    border-radius: 0 30px 0 30px;
    font-family: 'Acme', sans-serif;
    text-align: center;
    color: var(--vt-c-black);
    margin: 10% 1% 2% 1%;
    padding: 1%;
}

.title {
    grid-area: title;
    font-size: 18px;
}

.text {
    grid-area: text;
    font-size: 15px;
    margin: 1% 0;
}

.contact {
    grid-area: contact;
    font-size: 15px;
}

@media (min-width: 1024px) {
    article {
        grid-template-areas:
            "text title"
            "text contact";
        grid-template-columns: 3fr 1fr;
        grid-auto-flow: column;
        grid-gap: 3%;
        text-align: center;
        margin: 1% 1% 2% 1%;
    }

    .title {
        grid-area: title;
        font-size: 22px;
        margin: 2% 0;
    }

    .text {
        grid-area: text;
        font-size: 18px;
    }

    .contact {
        grid-area: contact;
        font-size: 18px;
    }
}
</style>
