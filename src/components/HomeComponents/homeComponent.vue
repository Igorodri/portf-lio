<script setup>
import Igor from '@/assets/img/igor.jpg'
import { ref, onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';

const h1Text = ref(null)
const h2Text = ref(null)

const nameText = ref(null)
const cargoText = ref(null)

function escreverTexto(elemento, texto, delay = 150) {
  let i = 0;
  const escrever = () => {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(escrever, delay);
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
      escreverTexto(h1Text.value, 'Olá! Me chamo ');
      setTimeout(() => {
        escreverTexto(nameText.value, 'Igor Mascarenhas')
      },2800)
      setTimeout(() => {
        escreverTexto(h2Text.value, 'Desenvolvedor ');
      }, 6000); 
    }
    setTimeout(() => {
        escreverTexto(cargoText.value, 'Full Stack')
    }, 8800)
  }, 800); 

})

onMounted(() => {

})



</script>

<template>
    <section class="banner" id="banner">
        <div class="content">
            <div class="text">
                <h1><span ref="h1Text"></span><span class="destaque" ref="nameText"></span></h1>
                <h2><span ref="h2Text"></span> <span class="destaque" ref="cargoText"></span></h2>
                <div class="area-btn">
                    <button>Currículo</button>
                    <button>Entre em contato</button>
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
    margin: 70px 0px 70px 0px
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
</style>