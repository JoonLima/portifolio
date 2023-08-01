<template>
  <div class="projeto" target="_blank" href="https://filmes-azure.vercel.app/">
    <div class="imagem">
      <img :src="imagem" alt="" />
    </div>
    <div class="texto">
      <div class="cabecalho-projeto">
        <div class="titulo-projeto">
          <i class="bx bx-bookmarks"></i>
          <h3>{{ titulo }}</h3>
        </div>
        <i id="icon-link" class="bx bx-link"></i>
      </div>
      <div class="descricao-projeto">
        <p>
          {{ descricao }}
        </p>
      </div>

      <div class="stacks">
        <span>{{ tecnologiasUtilizadas }}</span>
      </div>
      <div class="botoes">
        <botao :href="linkCodigo" icone="bx-code-alt" texto="Codigo" />
        <botao :href="linkSite" icone="bx-show" texto="Site" />
      </div>
    </div>
  </div>
</template>

<script>
import Botao from "./Botao.vue";

export default {
  components: { Botao },
  props: {
    titulo: { type: String, required: false, default: "" },
    descricao: { type: String, required: false, default: "" },
    tecnologiasUtilizadas: { type: String, required: false, default: "" },
    imagem: { type: String, required: false, default: "" },
    linkCodigo: { type: String, required: false, default: "" },
    linkSite: { type: String, required: false, default: "" },
  },
};
</script>

<style scoped>
.projeto {
  display: flex;
  justify-content: space-between;
  min-height: 230px;
  color: aliceblue;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 29px;
  text-decoration: none;
  width: 80%;
  gap: 30px;
  transition: 0.4s;
}

.projeto .cabecalho-projeto {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.projeto .cabecalho-projeto i {
  font-size: 25px;
}

.cabecalho-projeto .titulo-projeto {
  display: flex;
  align-items: center;
  gap: 10px;
}

.projeto .descricao-projeto {
  margin: 10px 0;
}

.projeto .stacks {
  margin: 10px 0;
}

.projeto .texto {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.imagem img {
  width: 450px;
  height: 100%;
  border: 2px solid whitesmoke;
  border-radius: 10px;
}

.botoes {
  display: flex;

  margin-top: 20px;
}

@media (max-width: 1050px) {
  .projeto {
    flex-direction: column;
    width: 450px;
  }
}
</style>