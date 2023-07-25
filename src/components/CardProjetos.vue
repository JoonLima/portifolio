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
        <a :href="linkCodigo" target="_blank">
          <i class="bx bx-code-alt"></i>
          Codigo
        </a>
        <a :href="linkSite" target="_blank">
          <i class="bx bx-show"></i>
          Site
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "titulo",
    "descricao",
    "tecnologiasUtilizadas",
    "imagem",
    "linkCodigo",
    "linkSite",
  ],
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
  gap: 20px;
  margin-top: 20px;
}

.botoes a {
  text-decoration: none;
  color: aliceblue;
  border: 2px solid #01ec8f;
  border-radius: 5px;
  padding: 8px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: 3px 2px 2px black;
  transition: 0.3s;
}

.botoes a:hover {
  border: 2px solid #02b2e6;
  cursor: pointer;
  transform: scale(1.05);
}

.botoes a i {
  font-size: 20px;
}

@media (max-width: 1050px) {
  .projeto {
    flex-direction: column;
    width: 450px;
  }
}
</style>