<template>
  <div class="pa-1">
    <v-btn @click="abrirMenu" variant="plain" color="primary" class="btn-menu">
      <v-icon v-if="!menuAtivo">mdi-menu</v-icon>
      <v-icon v-else>mdi-close</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" width="auto" class="menu">
      <a @click="navegar('/')">Sobre</a>
      <a @click="navegar('/projetos')">Projetos</a>
      <a @click="navegar('/contatos')">Contatos</a>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      menuAtivo: false,
    };
  },

  methods: {
    abrirMenu() {
      this.dialog = true;
      this.menuAtivo = !this.menuAtivo;
    },

    navegar(url) {
      this.$router.push(url);
      this.dialog = false;
    },
  },

  watch: {
    dialog() {
      if (this.dialog) {
        this.menuAtivo = true;
      } else {
        this.menuAtivo = false;
      }
    },
  },
};
</script>

<style scoped>
.menu a {
  padding: 30px;
  color: #fff;
  text-decoration: none;
  font-size: 30px;
  transition: 0.3s;
  text-align: center;
  cursor: pointer;
}

.btn-menu i {
  font-size: 30px;
}

.menu a:hover {
  transform: scale(1.2);
}
</style>
