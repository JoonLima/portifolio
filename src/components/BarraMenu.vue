<template>
  <v-row class="pa-3 menu">
    <v-col cols="2" align-self="center">
      <menu-opcoes />
    </v-col>
    <v-col cols="8" align-self="center">
      <a @click="this.$router.push('/')" class="logo">John Ventura</a>
    </v-col>
    <v-col cols="2" class="d-flex justify-end pa-5">
      <alterar-tema />
    </v-col>
  </v-row>
</template>

<script>
import AlterarTema from "./AlterarTema.vue";
import MenuOpcoes from "@/components/MenuOpcoes.vue";

export default {
  data() {
    return {};
  },

  components: { AlterarTema, MenuOpcoes },

  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800&family=Tektur:wght@400;600&display=swap");

.logo {
  font-family: "Maven Pro", sans-serif;
  font-family: "Tektur", cursive;
  font-weight: 600;
  font-size: 1.5rem;
  display: flex;
  align-content: center;
  justify-content: center;
}

.logo:hover {
  cursor: pointer;
}

.btn-menu i {
  font-size: 35px;
}

.menu {
  max-height: 72px;
  margin-bottom: 30px;
}
</style>
