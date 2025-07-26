<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  imageUrl: { type: String, required: true },
  title: String,
  description: String,
  link: String,
  videoUrl: String
})

const showModal = ref(false)

function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

watch(showModal, val => {
  document.body.style.overflow = val ? 'hidden' : 'auto'
})
</script>

<template>
  <div class="boxProject" @click="openModal">
    <img :src="imageUrl" alt="Imagem do projeto" />
  </div>

  <teleport to="body">
    <div v-if="showModal" class="modalOverlay" @click.self="closeModal">
      <div class="modalContent">
        <div class="videoContainer">
          <iframe 
            v-if="videoUrl"
            :src="videoUrl" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen
          ></iframe>
        </div>
        <div class="infoContainer">
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
          <a :href="link" target="_blank">Ver Projeto</a>
          <div class="areaCloseBtn">
            <button class="closeBtn" @click="closeModal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.boxProject {
  width: 500px;
  height: 240px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
}

.boxProject img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.2s, filter 0.2s;
}

.boxProject img:hover {
  transform: scale(1.04);
  filter: brightness(0.4);
}

/* Modal */
.modalOverlay {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw; 
  height: 100vh; 
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
}

.modalContent {
  background: var(--cor-fundo);
  display: flex;
  flex-direction: row;
  height: 400px;
  max-width:1200px;
  padding: 20px;
  border-radius: 10px;
  gap: 20px;
}

.videoContainer {
  flex: 1;
  display: flex;
  justify-content: center;
}

.videoContainer iframe {
  width: 600px;
  height: 340px;
  border-radius: 8px;
}

.infoContainer {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.infoContainer h2 {
  margin-bottom: 10px;
  color: var(--cor-secundaria);
  font-size: 30px;
}

.infoContainer a {
  margin-top: 20px;
  color: #007BFF;
  text-decoration: underline;
}

.infoContainer p{
  color: var(--cor-principal-texto);
  font-weight: bold;
}

.areaCloseBtn{
  display: flex;
  justify-content: end;
}

.closeBtn {
    width: 150px;
    background-color: var(--cor-fundo);
    color: var(--cor-principal-texto);
    padding: 7px;
    border-radius: 10px;
    border: 1px solid var(--cor-secundaria);
    cursor: pointer;
    font-weight: bold;
    transition: 0.5s;
}

.closeBtn:hover{
    transition: 0.2s;
    background-color: var(--cor-secundaria);
}

/* Dispositivos móveis*/
@media (min-width: 300px) and (max-width: 760px) {
  .boxProject {
    width: 90%;
    height: 200px;
  }

    /* Modal */
  .modalOverlay {
    position: fixed; 
    top: 0;
    left: 0;
    width: 100vw; 
    height: 100vh; 
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; 
  }

  .modalContent {
    background: var(--cor-fundo);
    display: flex;
    flex-direction: column;
    height: 450px;
    max-width: 95%;
    padding: 10px;
    border-radius: 10px;
    gap: 0px;
  }

  .videoContainer iframe {
    width: 400px;
    height: 180px;
    border-radius: 8px;
  }
  
  .infoContainer h2 {
  margin-bottom: 10px;
  color: var(--cor-secundaria);
  font-size: 30px;
  }

}

@media (min-width: 761px) and (max-width: 1024px){
    .boxProject {
    width: 600px;
    height: 200px;
  }
}


/* Notebook */
@media (min-width: 1025px) and (max-width: 1366px) {

}


</style>
