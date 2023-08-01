<template>
  <a :href="href" target="_blank" class="btn"
    ><i :class="icone" class="bx"></i>{{ texto }}</a
  >
</template>

<script>
export default {
  props: {
    href: { type: String, required: false, default: "" },
    icone: { type: String, required: false, default: "" },
    texto: { type: String, required: false, default: "" },
  },
};
</script>

<style scoped>
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
  height: 40px;
  width: 130px;
  gap: 10px;
  text-decoration: none;
}

.btn:hover {
  border: 2px solid #02b2e6;
  cursor: pointer;
  transform: scale(1.05);
}
</style>