<p align="center">
<img src="https://ik.imagekit.io/x4ikoq975/a_Y-f9K3ndJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652533857295" alt="EncurtURL Logo">
</p>

<p align="center">
<img src="https://img.shields.io/github/license/juniawinner/encurtURL?style=plastic" alt="Badge License MIT">
<img src="https://img.shields.io/github/stars/juniawinner/encurtURL?style=plastic" alt="Badge Stars on GitHub">
</p>

# *EncurtURL* - O encurtamento dos seus links favoritos é útil, rápido e leve!

vídeo

<h3 align="center">
<a href="https://red-island-0c877810f.1.azurestaticapps.net" title="EncurtURL">Acessar a demonstração</a>
</h3>

# 📜 Índice

1. [Sobre o projeto](#📜-sobre-o-projeto)
1. [Funcionalidades](#🛠️-funcionalidades)
1. [Design Responsivo](#💻📱-design-responsivo)
1. [Tecnologias utilizadas](#🛠️-tecnologias-utilizadas)
1. [Como executar o projeto](#🗂️-como-executar-o-projeto)
1. [Autora](#👩🏾‍💻-autora)

# 🔖 Sobre o projeto

Com design interativo, os objetivos do site são encurtar URLs e cativar os usuários pelas funcionalidades do projeto, a exemplo do contador de visitas às URLs favoritas.

O front-end é organizado em componentes do Vue.JS, que apresentam as informações na tela de acordo com a reatividade desencadeada pelas respostas do servidor Web às interações do cliente. Nesse sentido, o servidor foi desenvolvido no formato de API/REST, com base na Arquitetura em Camadas.

Para exemplificar através da funcionalidade de encurtamento, o componente pai (UrlRoleShorten.vue) é responsável apenas por fazer a requisição ao servidor, enquanto o componente filho (UrlRoleShortenDashboard.vue) exibe a resposta da requisição.

Essa divisão de tarefas é possível devido a Injeção de Dependências do Vue.JS, chamadas de "Provide" e "Inject". Ou seja, o componente pai fornece (*provide*) a resposta do servidor para ser injetada (*inject*) no componente filho. A ilustração abaixo demonstra o processo de comunicação entre cliente e servidor:

![Comunicação entre cliente e servidor](https://ik.imagekit.io/x4ikoq975/C-S_Xgp6lFYft.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652712941406)

No lado do servidor Web, os *Services* responsáveis por criar as URLs curtas possuem um *Decorator* chamado “@generateEncurtUrl”. O *Decorator* contribuiu para isolar e reutilizar o código que gera, randomicamente, as chaves identificadoras da URL curta. Essas chaves são únicas para cada URL criada, pois são o *path* do recurso no servidor.

Quando o usuário exclui a URL curta, todas as informações desse recurso são apagadas da *collection* “url” do *database*. Neste processo, a chave identificadora é reciclada, porque é salva em outra *collection*, chamada de “chave”. Tal mecanismo tem o objetivo de conservar as possibilidades de combinar sete caracteres alfanuméricos (A-Z, a-z e 0-9) para gerar novas chaves pelo servidor, caso não existam mais chaves recicladas disponíveis.

As URLs curtas relacionam-se as URLs originais mediante o redirecionamento, tendo em vista que cada *document* da *collection* “url” contém os dados necessários para esse processo, como mostra a ilustração a seguir:

# 🛠️ Funcionalidades

- `Encurtar URLs:` Principal objetivo do projeto.

- `Design Responsivo:` Técnica do *CSS Grid Layout*.

- `Interações:` Facilidade para compartilhar URLs favoritas pelo Twitter.

- `Top10 URLs:` Ranking das dez URLs curtas mais visitadas pelos usuários.

- `Histórico de Informações das URLs:` Resgatar dados relacionados ao total de visitas e a chave identificadora da URL curta, mais o título da URL longa original.

- `Reciclagem de recursos:` Reutilização das chaves identificadoras (*path* das URLs), após a exclusão das URLs curtas pelos usuários. Tais chaves são usadas para gerar novas URLs curtas.

- `Decorators:` Função que facilita a manutenção dos *Services* responsáveis por criar as URLs curtas.

# 💻📱 Design Responsivo
 
## Layout mobile
 
![Top 10 de URLs mais visitadas](https://ik.imagekit.io/x4ikoq975/s1_xzpUAxSfu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652612269503)
 
![Encurtador e informações sobre a URL curta](https://ik.imagekit.io/x4ikoq975/s2__Gd_hV6iP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652612818845)
 
## Layout desktop
 
![Homepage do EncurtURL](https://ik.imagekit.io/x4ikoq975/c1_vT1L25oKi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652612489844)
 
![Top 10 e Encurtador de URLs](https://ik.imagekit.io/x4ikoq975/c2_up-URwYE9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652612571804)

# 🚀 Tecnologias utilizadas

BACK-END                                     |                      FRONT-END                     |       PRODUCTION DEPLOYMENT
---------------------------------------------|----------------------------------------------------|------------------------------------
[NodeJS](https://nodejs.org/en/)             |[VueJS](https://vuejs.org/)                         |[Azure Static Web Apps](https://azure.microsoft.com/pt-br/services/app-service/static/) (*Front-end*)
[Express](https://expressjs.com/pt-br/)      |[TypeScript](https://www.typescriptlang.org/)       |[Azure App Service](https://azure.microsoft.com/pt-br/services/app-service/) (*Back-end*)
[TypeScript](https://www.typescriptlang.org/)|[HTML and CSS](https://developer.mozilla.org/pt-BR/)|[Azure Cosmos DB](https://azure.microsoft.com/pt-br/services/cosmos-db/) (*Database*)
[TypeORM](https://typeorm.io/)               |[Axios](https://axios-http.com/ptbr/)               |
[MongoDB](https://www.mongodb.com/pt-br)     |                                                    |

# 🗂️ Como executar o projeto

## Front-end

Pré-requisitos: CLI do VueJS

```bash
# clonar repositório
git clone https://github.com/juniawinner/encurtURL

# entrar na pasta do projeto frontend
cd frontend/vue-project

# instalar dependências
npm install

# executar o projeto
npm run dev
```

## Back-end

Pré-requisitos: NodeJS e NPM

```bash
# clonar repositório
git clone https://github.com/juniawinner/encurtURL

# entrar na pasta do projeto backend
cd backend

# instalar dependências
npm install

# executar o projeto
npm run dev
```

# 👩🏾‍💻 Autora

Desenvolvido 💚 por Junia Winner

https://www.linkedin.com/in/junia-winner