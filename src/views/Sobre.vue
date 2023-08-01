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
      <img src="\img-projetos\code-icon.png" alt="" />
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
        { titulo: "Tailwind CSS", imagem: "/linguagens/tailwindcss.png" },
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
  gap: 20px;
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

  .botoes {
    justify-content: center;
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
