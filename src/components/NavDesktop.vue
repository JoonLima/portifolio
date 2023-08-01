<template>
  <div class="box-menu">
    <a @click="this.$router.push('/')" class="logo">John Ventura</a>
    <div :class="{ ativo: menuAtivo }" class="nav">
      <button @click="ativarMenu" class="btn-mobile">
        <i v-if="!menuAtivo" class="bx bx-menu"></i>
        <i v-else class="bx bx-x"></i>
      </button>
      <div class="links">
        <router-link
          @click.prevent="menuAtivo = false"
          active-class="active"
          exact
          to="/"
        >
          Sobre
        </router-link>
        <router-link
          @click.prevent="menuAtivo = false"
          active-class="active"
          to="/projetos-front"
          >Projetos Front</router-link
        >
        <router-link
          @click.prevent="menuAtivo = false"
          active-class="active"
          to="/projetos-back"
          >Projetos Back</router-link
        >
        <router-link
          @click.prevent="menuAtivo = false"
          active-class="active"
          exact
          to="/contatos"
          >Contatos</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuAtivo: false,
    };
  },
  methods: {
    ativarMenu() {
      this.menuAtivo = !this.menuAtivo;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800&family=Tektur:wght@400;600&display=swap");

.box-menu {
  display: flex;
  height: 65px;
  background-color: #231e20;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.btn-mobile {
  display: none;
  color: aliceblue;
}

.btn-mobile i {
  font-size: 30px;
  padding: 10px;
}

.logo {
  font-family: "Maven Pro", sans-serif;
  font-family: "Tektur", cursive;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0 15px;
  color: white;
}

.logo:hover {
  cursor: pointer;
}

.nav .links a {
  margin: 0 15px;
  text-decoration: none;
  padding: 10px;
  color: white;
  transition: 0.2s;
}

.nav .links a:hover {
  border-bottom: 2px solid #02b2e6;
}

.links .active {
  border-bottom: 2px solid #02b2e6;
}

@media (max-width: 800px) {
  .btn-mobile {
    display: block;
  }

  .links {
    display: none;
    position: absolute;
    width: 100%;
    top: 65px;
    gap: 15px;
    right: 0;
    background-color: #231e20;
    height: calc(100vh - 65px);
    z-index: 1000;
    flex-direction: column;
  }

  .links .active {
    border-bottom: none;
  }

  .nav .links a:hover {
    border-bottom: none;
    color: #858283;
  }

  .nav.ativo .links {
    display: flex;
  }
}
</style>