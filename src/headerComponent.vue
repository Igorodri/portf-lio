<template>
    <header id="header">
        <div class="logo">
            <RouterLink to="/"><img :src="logo" alt="Logo do Portifólio" class="logo"></RouterLink>
        </div>

        <nav>
            <a href="#sobre"><span>Sobre mim</span></a>
            <a href="#habilidades"><span>Habilidades</span></a>
            <a href="#projetos"><span>Projetos</span></a>
            <a href="#contato"><span>Contato</span></a>
        </nav>

        <div class="area-btn">
            <RouterLink to="/formulario"><button>Construa seu Site</button></RouterLink>
        </div>
    </header>
</template>

<style scoped>
header{
    background-color: var(--cor-fundo);
    border-bottom: 2px solid var(--cor-secundaria);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    top: 0;
    position: sticky;
    z-index: 200;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
}

.logo{
    transition: 0.2s;
}

.logo:hover{
    transform: scale(1.1);
    transition: 0.2s;
}

nav span, a{
    text-decoration: none;
    color: var(--cor-principal-texto);
    margin: 0px 10px 0px 10px;
    transition: 0.5s;
    font-weight: bold;
}

nav span:hover{
    color: var(--cor-secundaria);
    transition: 0.2s;
}

.area-btn button{
    width: 170px;
    border-radius: 10px;
    padding: 10px;
    background-color: var(--cor-secundaria);
    font-weight: bold;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.5s;
}

.area-btn button:hover{
    transition: 0.2s;
    transform: scale(1.1);
    background-color: var(--cor-secundaria-pressionada);
}

</style>

<script setup>
import { onMounted } from 'vue';
import logo from '@/assets/img/logo.png';
import ScrollReveal from 'scrollreveal';

onMounted(() => {
    ScrollReveal().reveal('#header', {
    origin: 'top',
    duration: 2500,
    distance: '100px',
  });
})


</script>