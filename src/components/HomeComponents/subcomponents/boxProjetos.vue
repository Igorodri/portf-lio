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
          <button class="closeBtn" @click="closeModal">Fechar</button>
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
  max-width: 900px;
  height: 500px;
  width: 90%;
  padding: 20px;
  border-radius: 10px;
  gap: 20px;
}

.videoContainer {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.videoContainer iframe {
  width: 100%;
  height: 100%;
  max-height: 400px;
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
}

.infoContainer a {
  margin-top: 20px;
  color: #007BFF;
  text-decoration: underline;
}

.closeBtn {
  margin-top: 30px;
  padding: 8px 12px;
  background: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
