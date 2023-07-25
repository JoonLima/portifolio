<template>
  <div class="container">
    <div class="nav">
      <div class="logo">
        <span>John Ventura</span>
      </div>
      <div class="links">
        <router-link active-class="active" exact to="/">Sobre</router-link>
        <router-link active-class="active" to="/projetos-front"
          >Projetos Front</router-link
        >
        <router-link active-class="active" to="/projetos-back"
          >Projetos Back</router-link
        >
        <router-link active-class="active" exact to="/contatos"
          >Contatos</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800&family=Tektur:wght@400;600&display=swap");

.container .nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.logo span {
  font-family: "Maven Pro", sans-serif;
  font-family: "Tektur", cursive;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0 15px;
  color: white;
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
</style>