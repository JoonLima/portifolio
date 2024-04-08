// Composables
import { createRouter, createWebHistory } from "vue-router";

import Sobre from "@/views/Sobre.vue";
import Projetos from "@/views/Projetos.vue";
import Contatos from "@/views/Contatos.vue";

const routes = [
  {
    path: "/",
    name: "sobre",
    component: Sobre,
  },
  {
    path: "/projetos",
    name: "projetos",
    component: Projetos,
  },
  {
    path: "/contatos",
    name: "contatos",
    component: Contatos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
