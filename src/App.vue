<template>
  <v-app>
    <nav-desktop />
    <router-view />
  </v-app>
</template>

<script>
import NavDesktop from "./components/BarraMenu.vue";

export default {
  components: { NavDesktop },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,200;1,300&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 90%;
  margin: 0 auto;
}

.v-overlay--active {
  margin-top: 75px;
  backdrop-filter: blur(2px);
  background: rgb(0 0 0 / 0.8);
}

/* Barra de rolagem inteira */
::-webkit-scrollbar {
  width: 8px; /* Largura da barra de rolagem vertical */
  height: 8px; /* Altura da barra de rolagem horizontal */
}

/* Parte de fundo da barra de rolagem */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Parte da barra de rolagem que se move */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Parte da barra de rolagem que se move ao passar o mouse por cima */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
