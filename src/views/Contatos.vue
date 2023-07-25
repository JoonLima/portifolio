<template>
  <div class="container">
    <div class="icones">
      <div class="icone">
        <a href="" target="_blank"><i class="ic bx bx-envelope"></i></a>
        <span class="texo-icone">E-mail</span>
        <span class="texo-icone2">jonathan.vpp@gmail.com</span>
      </div>
      <div class="icone">
        <a href="https://github.com/JoonLima" target="_blank"
          ><i class="ic bx bxl-github"></i
        ></a>
        <span class="texo-icone">Github</span>
        <span class="texo-icone2">@JoonLima</span>
      </div>
      <div class="icone">
        <a href="https://www.linkedin.com/in/jonathanlventura/" target="_blank"
          ><i class="ic bx bxl-linkedin-square"></i
        ></a>
        <span class="texo-icone">Linkedin</span>
        <span class="texo-icone2">@jonathanlventura</span>
      </div>
      <div class="icone">
        <a
          href="https://api.whatsapp.com/send/?phone=5521971935139&text&type=phone_number&app_absent=0"
          target="_blank"
          ><i class="ic bx bx-phone"></i
        ></a>
        <span class="texo-icone">Telefone</span>
        <span class="texo-icone2">(21) 97193-5139</span>
      </div>
    </div>
  </div>
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
  color: aliceblue;
}

.ic {
  font-size: 40px;
  color: aliceblue;
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
  color: #828282;
}

@media (max-width: 855px) {
  .icones {
    flex-direction: column;
  }
}
</style>