<template>
  <div class="container">
    <div class="cards">
      <card-projetos
        imagem="src\assets\img-projetos\MovieLib.png"
        titulo="MovieLib"
        descricao="Uma biblioteca de filmes onde você terá acesso a uma vasta seleção de filmes dos mais variados gêneros, desde clássicos intemporais até os mais recentes lançamentos de sucesso."
        tecnologiasUtilizadas="Vue.js"
      />
      <card-projetos-inverso
        imagem="src\assets\img-projetos\burger.png"
        titulo="Make Your Burger"
        descricao="Um site onde pode montar seu pedido de hamburger, escolhendo o pão, a carne e os opcionais. Na área de pedidos podemos gerencias os pedidos realizados e alterar o status de preparação."
        tecnologiasUtilizadas="Vue.js | JSON Server"
      />
    </div>
  </div>
</template>

<script>
import CardProjetos from "@/components/CardProjetos.vue";
import CardProjetosInverso from "@/components/CardProjetosInverso.vue";

export default {
  components: { CardProjetos, CardProjetosInverso },
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