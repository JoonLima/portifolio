<template>
  <div class="box-icon">
    <span> {{ titulo }} </span>
    <img :src="imagem" alt="linguagem" />
  </div>
</template>

<script>
export default {
  props: {
    titulo: { type: String, required: false, default: "" },
    imagem: { type: String, required: false, default: "" },
  },
};
</script>

<style scoped>
.box-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383838;
  border-bottom: 2px solid #02b2e6;
  border-top-left-radius: 15px;
  min-width: 120px;
  min-height: 120px;
  gap: 10px;
  transition: 0.4s;
}

.box-icon:hover {
  transform: scale(1.1);
  box-shadow: #01ec8f 1px 4px 10px;
}

.box-icon span {
  font-size: 16px;
  color: aliceblue;
  transition: 0.3s;
}

.box-icon img {
  width: 45px;
  height: 45px;
}
</style>