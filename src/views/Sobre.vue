<template>
  <div class="container">
    <div class="textos">
      <span class="principal">Olá! Meu nome é Jonathan.</span>
      <span class="secundario">Desenvolvedor Web</span>
      <p>
        Há dois anos trabalho como Analista de Qualidade (QA) em uma empresa de
        software, só que descobri que minha paixão é a programação, e venho
        estudando bastante essa área. Tenho feito alguns projetos pessoais
        usando HTML, CSS, JavaScript, Vue.js para o front-end, e .NET, SQL
        Server e Postgres para o back-end e banco de dados.
      </p>

      <div class="botoes">
        <a
          href="https://www.linkedin.com/in/jonathanlventura/"
          target="_blank"
          class="btn"
          ><i class="bx bxl-linkedin"></i>| Linkedin</a
        >
        <a href="https://github.com/JoonLima" target="_blank" class="btn"
          ><i class="bx bxl-github"></i>| Github</a
        >
      </div>
    </div>
    <div class="imagem">
      <img src="\img-projetos\code-icon.png" alt="" />
    </div>
  </div>
  <div class="cards">
    <div class="titulo">
      <span>Habilidades</span>
    </div>
    <div class="linguagens">
      <card-linguagem titulo="HTML" imagem="\linguagens\html.png" />
      <card-linguagem titulo="CSS" imagem="\linguagens\css.png" />
      <card-linguagem titulo="JavaScript" imagem="\linguagens\javascript.png" />
      <card-linguagem
        titulo="Tailwind CSS"
        imagem="\linguagens\tailwindcss.png"
      />
      <card-linguagem titulo="Vue.js" imagem="\linguagens\vue.png" />
      <card-linguagem titulo="Vuetify" imagem="\linguagens\vuetify.png" />
      <card-linguagem titulo="Graphql" imagem="\linguagens\graphql.png" />
      <card-linguagem titulo="Postgres" imagem="\linguagens\postgres.png" />
      <card-linguagem titulo="Sql Server" imagem="\linguagens\sqlserver.png" />
      <card-linguagem titulo="C#" imagem="\linguagens\c.png" />
      <card-linguagem titulo="Java" imagem="\linguagens\java.png" />
      <card-linguagem titulo="Selenium" imagem="\linguagens\selenium.png" />
    </div>
  </div>
</template>

<script>
import CardLinguagem from "@/components/CardLinguagem.vue";

export default {
  components: { CardLinguagem },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.textos {
  display: flex;
  flex-direction: column;
  margin-top: 70px;
}

.textos p {
  font-weight: 300;
  color: white;
}

.textos .principal {
  font-size: 30px;
  font-weight: 500;
  color: white;
}

.textos .secundario {
  font-size: 20px;
  color: rgba(245, 245, 245, 0.795);
  margin-bottom: 10px;
}

.botoes {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
}

.btn {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border: 2px solid #01ec8f;
  border-radius: 5px;
  padding: 8px;
  transition: 0.5s;
  margin-right: 30px;
  height: 40px;
  width: 150px;
  text-decoration: none;
}

.btn:hover {
  border: 2px solid #02b2e6;
  cursor: pointer;
  transform: scale(1.05);
}

.imagem img {
  width: 500px;
}

.cards {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.cards .titulo {
  color: aliceblue;
  font-size: 25px;
}

.cards .linguagens {
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 100px;
  gap: 40px;
}

@media (max-width: 1050px) {
  .container {
    display: flex;
    flex-direction: column;
  }

  .container .textos {
    max-width: 70%;
    text-align: justify;
  }
}
</style>
