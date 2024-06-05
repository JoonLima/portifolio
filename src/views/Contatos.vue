<template>
  <v-row class="container">
    <v-col lg="3" md="3" sm="12" xs="12" class="icone">
      <a href="" target="_blank"
        ><v-icon color="primary" class="ic">mdi-email-outline</v-icon></a
      >
      <span class="texo-icone">E-mail</span>
      <span class="texo-icone">jonathan.vpp@gmail.com</span>
    </v-col>
    <v-col lg="3" md="3" sm="12" xs="12" class="icone">
      <a href="https://github.com/JoonLima" target="_blank"
        ><v-icon color="primary" class="ic">mdi-github</v-icon></a
      >
      <span class="texo-icone">Github</span>
      <span class="texo-icone">@JoonLima</span>
    </v-col>
    <v-col lg="3" md="3" sm="12" xs="12" class="icone">
      <a href="https://www.linkedin.com/in/jonathanlventura/" target="_blank"
        ><v-icon color="primary" class="ic">mdi-linkedin</v-icon></a
      >
      <span class="texo-icone">Linkedin</span>
      <span class="texo-icone">@jonathanlventura</span>
    </v-col>
    <v-col lg="3" md="3" sm="12" xs="12" class="icone">
      <a
        href="https://api.whatsapp.com/send/?phone=5521971935139&text&type=phone_number&app_absent=0"
        target="_blank"
        ><v-icon color="primary" class="ic">mdi-cellphone</v-icon></a
      >
      <span class="texo-icone">Telefone</span>
      <span class="texo-icone">(21) 97193-5139</span>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.icones {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

.icone {
  font-size: 50px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
}

.ic {
  font-size: 40px;
}

.icone:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.texo-icone {
  font-size: 15px;
}

.texo-icone2 {
  font-size: 15px;
}

@media (max-width: 855px) {
  .icone {
    min-width: 100%;
  }
}
</style>
