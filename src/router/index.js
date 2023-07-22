// Composables
import { createRouter, createWebHistory } from "vue-router";

import Sobre from "@/views/Sobre.vue";
import ProjetosBack from "@/views/ProjetosBack.vue";
import ProjetosFront from "@/views/ProjetosFront.vue";

const routes = [
  {
    path: "/",
    name: "sobre",
    component: Sobre,
  },
  {
    path: "/projetos-back",
    name: "projetosBack",
    component: ProjetosBack,
  },
  {
    path: "/projetos-front",
    name: "projetosFront",
    component: ProjetosFront,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
