<template>
  <div class="container">
    <div class="textos">
      <span class="principal">Olá! Meu nome é Jonathan.</span>
      <span class="secundario">Desenvolvedor Web</span>
      <p>
        Iniciei na área de tecnologia há 2 anos, desde então trabalho como
        Analista de Qualidade (QA), e descobri que minha paixão é a programação.
        Por isso, estou sempre criando novos projetos pessoais para colocar em
        prática todo o meu conhecimento, me desafiar e sempre melhorar.
      </p>

      <div class="botoes">
        <botao
          href="https://www.linkedin.com/in/jonathanlventura/"
          icone="bxl-linkedin"
          texto="Linkedin"
        />
        <botao
          href="https://github.com/JoonLima"
          icone="bxl-github"
          texto="Github"
        />
      </div>
    </div>
    <div class="imagem">
      <img src="\foto\minha-foto.png" alt="" />
    </div>
  </div>
  <div class="cards">
    <div class="titulo">
      <span>Habilidades</span>
    </div>
    <div class="linguagens">
      <card-linguagem
        v-for="linguagem in linguagens"
        :key="linguagem"
        :titulo="linguagem.titulo"
        :imagem="linguagem.imagem"
      />
    </div>
  </div>
</template>

<script>
import CardLinguagem from "@/components/CardLinguagem.vue";
import Botao from "@/components/Botao.vue";

export default {
  components: { CardLinguagem, Botao },
  data() {
    return {
      linguagens: [
        { titulo: "HTML", imagem: "/linguagens/html.png" },
        { titulo: "CSS", imagem: "/linguagens/css.png" },
        { titulo: "JavaScript", imagem: "/linguagens/javascript.png" },
        { titulo: "Git", imagem: "/linguagens/git.png" },
        { titulo: "Vue", imagem: "/linguagens/vue.png" },
        { titulo: "Vuetify", imagem: "/linguagens/vuetify.png" },
        { titulo: "Graphql", imagem: "/linguagens/graphql.png" },
        { titulo: "Postgres", imagem: "/linguagens/postgres.png" },
        { titulo: "SQL Server", imagem: "/linguagens/sqlserver.png" },
        { titulo: "C#", imagem: "/linguagens/c.png" },
        { titulo: "Java", imagem: "/linguagens/java.png" },
        { titulo: "Selenium", imagem: "/linguagens/selenium.png" },
      ],
    };
  },
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
  width: 70%;
}

.textos p {
  font-weight: 300;
}

.textos .principal {
  font-size: 30px;
  font-weight: 500;
}

.textos .secundario {
  font-size: 20px;
  margin-bottom: 10px;
}

.botoes {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
}

.imagem {
  display: flex;
  justify-content: center;
  width: 70%;
}

.imagem img {
  width: 80%;
  border-radius: 10%;
}

.cards {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.cards .titulo {
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
    max-width: 90%;
  }

  .cards {
    align-items: center;
  }

  .cards .linguagens {
    justify-content: center;
  }
}
</style>
