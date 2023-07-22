<template>
  <nav-desktop />
  <router-view />
</template>

<script >
import NavDesktop from "./components/NavDesktop.vue";

export default {
  components: { NavDesktop },
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

body {
  background-color: #231e20;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
}
</style>
