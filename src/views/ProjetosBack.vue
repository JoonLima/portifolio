<template>
  <div class="container">
    <div class="aviso">
      <span>Página em construção</span>
      <img src="\img-projetos\contrucao.gif" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.aviso {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
}

.aviso span {
  color: aliceblue;
  font-size: 30px;
}

.aviso img {
  width: 500px;
}

@media (max-width: 600px) {
  .aviso img {
    width: 400px;
  }

  .aviso span {
    font-size: 25px;
  }
}
</style>