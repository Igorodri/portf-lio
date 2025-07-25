<template>
    <header id="header">
        <div class="logo">
            <RouterLink to="/"><img :src="logo" alt="Logo do Portifólio" class="logo"></RouterLink>
        </div>

            <nav class="desktop">
                <a href="#sobre"><span>Sobre mim</span></a>
                <a href="#habilidades"><span>Habilidades</span></a>
                <a href="#projetos"><span>Projetos</span></a>
                <a href="#contato"><span>Contato</span></a>
            </nav>

        
            <div class="area-btn" id="btn_desktop">
                <RouterLink to="/formulario"><button>Construa seu Site</button></RouterLink>
            </div>


        <button class="btn-default_mobile" v-on:click="toggleHeader">
            <img :src="menu" alt="Imagem Menu">
        </button>

        <div class="mobile_menu" ref="mobile_menu">
            <a href="#sobre"><span>Sobre mim</span></a>
            <a href="#quemsomos"><span>Habilidades</span></a>
            <a href="#projetos"><span>Projetos</span></a>
            <a href="#contato"><span>Contato</span></a>
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

.logo img{
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

.area-btn button, .mobile_menu button{
    width: 170px;
    border-radius: 10px;
    padding: 10px;
    background-color: var(--cor-secundaria);
    font-weight: bold;
    color: var(--cor-principal-texto);
    border: none;
    cursor: pointer;
    transition: 0.5s;
}

.area-btn button:hover{
    transition: 0.2s;
    transform: scale(1.1);
    background-color: var(--cor-secundaria-pressionada);
}

.mobile_menu{
display: none;
transition: all 0.3s ease;
}

.btn-default_mobile{
    display: none;
}

.mobile_menu.active_mobile{
    position: fixed;
    top: 90px;
    left: 0;
    width: 100%;
    background-color: var(--cor-fundo);
    display: none;
    transition: all 0.3s ease;
    z-index: 99;
    border-bottom: 2px solid var(--cor-secundaria);
}

.btn-default_mobile{
        display: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        background-color: var(--cor-secundaria);
        padding: 10px 10px 10px 10px;
        border-radius: 10px;
        margin-right: 40px;
        height: 55px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 10px var(--cor-secundaria);
    }

    .btn-default_mobile:hover {
        background-color: var(--cor-secundaria-pressionada);
        box-shadow: 0 4px 10px var(--cor-secundaria-pressionada);
        transform: translateY(-2px);
    }


    .btn-default_mobile img{
        width: 30px;
        height: 38px;
    }

    .mobile_menu{
        padding-bottom: 20px;
    }

    .mobile_menu.active_mobile{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding-top: 15px;
        z-index: 100;
        margin-top: 9px;
    }

        .mobile_menu a{
        text-decoration: none;
        font-weight: bold;
        color: var(--cor-principal-texto);
        transition: 0.2s;
        font-size: 14px;
        cursor: pointer;
        margin-bottom: 5px;
    }

    .mobile_menu a:last-child{
        margin-bottom: 20px;
        }

    .mobile_menu a:hover{
        color: var(--cor-secundaria);
        transition: 0.2s;
        
    }



/* Dispositivos Móveis */
@media (min-width: 300px) and (max-width: 1024px) {
header{
    justify-content: space-between;
}

.desktop, #btn_desktop{
    display: none;
}

.btn-default_mobile{
    display: block;
}

}

</style>

<script setup>
import {ref, onMounted } from 'vue';
import logo from '@/assets/img/logo.png';
import menu from '@/assets/img/menu.png'
import ScrollReveal from 'scrollreveal';

const mobile_menu = ref(null);

function toggleHeader() {
  if (mobile_menu.value.classList.contains('active_mobile')) {
    mobile_menu.value.classList.remove('active_mobile');
  } else {
    mobile_menu.value.classList.add('active_mobile');
  }
}

onMounted(() => {
    ScrollReveal().reveal('#header', {
    origin: 'top',
    duration: 2500,
    distance: '100px',
  });
})


</script>