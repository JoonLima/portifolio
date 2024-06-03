<template>
  <v-row class="flex-grow-0">
    <v-switch :onchange="alterarTema" inset hide-details></v-switch>
  </v-row>
</template>

<script>
import { useTheme } from "vuetify";

export default {
  name: "SwitchTheme",
  data() {
    return {
      theme: useTheme(),
      tema: false,
    };
  },

  methods: {
    alterarTema() {
      this.theme.global.name = this.theme.current.dark
        ? "lightTheme"
        : "darkTheme";
    },
  },
};
</script>

<style scoped></style>
