<template>
  <div class="container">
    <div class="cards">
      <card-projetos v-for="projeto in projetos" :key="projeto"
        :imagem="projeto.imagem"
        :titulo="projeto.titulo"
        :descricao="projeto.descricao"
        :tecnologiasUtilizadas="projeto.tecnologiasUtilizadas"
        :linkCodigo="projeto.linkCodigo"
        :linkSite="projeto.linkSite"
      />
    </div>
  </div>
</template>

<script>
import CardProjetos from "@/components/CardProjetos.vue";

export default {
  data(){
    return {
      projetos: [
        {
          imagem:"/img-projetos/MovieLib.png",
          titulo:"MovieLib",
          descricao:"Uma biblioteca de filmes onde você terá acesso a uma vasta seleção de filmes dos mais variados gêneros, desde clássicos intemporais até os mais recentes lançamentos de sucesso.",
          tecnologiasUtilizadas:"Vue.js",
          linkCodigo:"https://github.com/JoonLima/movie-lib",
          linkSite:"https://filmes-azure.vercel.app/",
        },
        {
          imagem:"/img-projetos/organize.png",
          titulo:"Organize",
          descricao:"Um site responsivo onde você pode organizar seu dia com tarefas. É possível criar, favoritar, concluir e excluir tarefas.",
          tecnologiasUtilizadas:"Vue.js | JSON Server",
          linkCodigo:"https://github.com/JoonLima/organize",
          linkSite:"https://organize-wheat.vercel.app/",
        },
        {
          imagem:"/img-projetos/burger.png",
          titulo:"Make Your Burger",
          descricao:"Um site onde pode montar seu pedido de hamburger, escolhendo o pão, a carne e os opcionais. Na área de pedidos podemos gerencias os pedidos realizados e alterar o status de preparação.",
          tecnologiasUtilizadas:"Vue.js | JSON Server",
          linkCodigo:"https://github.com/JoonLima/MakeYourBurger",
          linkSite:"https://make-your-burger-self-rho.vercel.app/",
        },

      ]
    }
  },
  components: { CardProjetos },
  
};
</script>

<style scoped>
.titulo h3 {
  color: aliceblue;
  margin: 40px 0;
  font-weight: 500;
  text-align: center;
  font-size: 30px;
}

.cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: space-around;
  gap: 20px;
}
</style>