<script setup>
import Igor from '@/assets/img/igor.jpg'
import { ref, onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';

const mostrarCursor = ref(true)
const etapa = ref(0)

const h1Text = ref(null)
const h2Text = ref(null)

const nameText = ref(null)
const cargoText = ref(null)

function escreverTexto(elemento, texto, delay = 150, etapaAtual = 0) {
  etapa.value = etapaAtual
  let i = 0;
  const escrever = () => {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(escrever, delay);
    } else {
      mostrarCursor.value = false;
    }
  };
  escrever();
}


onMounted(() => {
    ScrollReveal().reveal('.text', {
    origin: 'left',
    duration: 1000,
    distance: '100px',
  });

    ScrollReveal().reveal('.area-img', {
    origin: 'right',
    duration: 1500,
    distance: '60px',
  });


setTimeout(() => {
  if (h1Text.value && h2Text.value) {
    mostrarCursor.value = true;
    escreverTexto(h1Text.value, 'Olá! Me chamo ', 150, 1);
    setTimeout(() => {
      mostrarCursor.value = true;
      escreverTexto(nameText.value, 'Igor Mascarenhas', 150, 1);
    }, 2500);
    setTimeout(() => {
      mostrarCursor.value = true;
      escreverTexto(h2Text.value, 'Desenvolvedor ', 150, 2);
    }, 5500);
    setTimeout(() => {
      mostrarCursor.value = true;
      escreverTexto(cargoText.value, 'Full Stack', 150, 2);
    }, 8500);
  }
}, 800);

})


</script>

<template>
    <section class="banner" id="banner">
        <div class="content">
            <div class="text">
                <h1>
                  <span ref="h1Text"></span><span class="destaque" ref="nameText"></span><span class="cursor" v-if="mostrarCursor && etapa === 1">|</span>
                </h1>
                <h2>
                  <span ref="h2Text"></span><span class="destaque" ref="cargoText"></span><span class="cursor" v-if="mostrarCursor && etapa === 2">|</span>
                </h2>
                <div class="area-btn">
                    <a href="src\documents\Currículo Igor Mascarenhas.pdf" download>
                      <button>Currículo</button>
                    </a>
                    
                    <a href="https://wa.me/5571984332793" target="_blank">
                      <button>Entre em contato</button>
                    </a>
                    
                </div>
            </div>

            <div class="area-img">
                <img :src="Igor" alt="Imagem do Desenvolvedor">
            </div>
        </div>
        
    </section>
</template>

<style scoped>
.content{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--cor-principal-texto);
    margin: 120px 0px 70px 0px
}

.content h1{
    font-size: 45px;
}

.content h2{
    font-size: 30px;
}

.destaque{
    color: var(--cor-secundaria);
}

.area-img img{
    width: 400px;
    border-radius: 100%;
    border: 5px solid var(--cor-secundaria);
}

.area-btn{
    margin-top: 20px;
    display: flex;
}

.area-btn button{
    width: 150px;
    background-color: var(--cor-fundo);
    color: var(--cor-principal-texto);
    padding: 7px;
    border-radius: 10px;
    border: 1px solid var(--cor-secundaria);
    cursor: pointer;
    font-weight: bold;
    transition: 0.5s;
    margin-right: 50px;
}

.area-btn button:hover{
    transition: 0.2s;
    transform: scale(1.1);
    transition: 0.2s;
}

.cursor{
  color: var(--cor-secundaria);
}


/* Celulares Pequenos */
@media (max-width: 360px) {

}

/* Celulares Padrões */
@media (min-width: 361px) and (max-width: 768px) {

}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  
}

/* Notebook */
@media (min-width: 1025px) and (max-width: 1366px) {
  .content{
    margin: 80px 0px 70px 0px;
  }
}


</style>