<template>
    <section class="project-author">
        <article class="project">
            <p class="title">EncurtURL <em>- MIT License</em></p>
            <p class="text">
                Site para encurtamento de URLs.
                <br>
                A interface de usuário, com design moderno e intuitivo,
                foi desenvolvida com Vue e TypeScript. Ademais, a tipagem estática no backend
                maximiza a eficiência do Node/Express, através do API/REST que se comunica
                com a base de dados (TypeORM e MongoDB).
            </p>
        </article>

        <address class="contact">
            <a class="contact-project" href="https://github.com/juniawinner/encurtURL"
                title="Repositório do EncurtURL no GitHub">
                <img src="src/assets/github.png" width="30px" height="30px" alt="GitHub do EncurtURL" /> /encurtURL
            </a>

            <a class="contact-author" href="https://www.linkedin.com/in/junia-winner/"
                title="Mulher negra e autodidata na teoria-prática sobre Tecnologia">
                <img src="src/assets/linkedin.png" width="30px" height="30px" alt="LinkedIn de Junia Winner" /> Junia
                Winner
            </a>
        </address>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');

.project-author {
    display: grid;
    grid-template-areas:
        "project"
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
    margin: 8% 1% 1%;
    padding: 1%;
}

.project {
    grid-area: project;
    display: grid;
    grid-template-areas:
        "title"
        "text";
    grid-auto-flow: row;
    grid-template-rows: auto;
    grid-gap: 2%;
    margin: 0 0 2%;
}

.title {
    grid-area: title;
    font-size: 18px;
}

.text {
    grid-area: text;
    font-size: 16px;
}

.contact {
    grid-area: contact;
    display: grid;
    grid-template-areas:
        "contact-project contact-author";
    grid-auto-flow: column;
    grid-template-columns: auto;
    grid-template-rows: auto;
    align-items: end;
}

.contact-project {
    grid-area: contact-project;
    font-size: 18px;
}

.contact-author {
    grid-area: contact-author;
    font-size: 18px;
}

@media (min-width: 1024px) {
    .project-author {
        margin: 4% 0 2% 4%;
    }
}
</style>
