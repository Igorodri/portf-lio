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
            <RouterLink to="/geral"><span>MEETA</span></RouterLink>
            <a href="#quemsomos"><span>Quem Somos</span></a>
            <RouterLink to="/empresa"><span class="span_submenu">Nossa empresa</span></RouterLink>
            <a href="#servico"><span>Nossos Serviços</span></a>
            <a href="#projetos_preview"><span>Projetos Realizados</span></a>
            <RouterLink to="/projetos"><span class="span_submenu">Todos os projetos</span></RouterLink>
            <a href="#footer"><span>Contato</span></a>
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
    background-color: #ffffff;
    display: none;
    transition: all 0.3s ease;
    z-index: 99;
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
        background-color: #fcda7c;
        box-shadow: 0 4px 10px #fcda7c;
        transform: translateY(-2px);
    }


    .btn-default_mobile img{
        width: 30px;
        height: 38px;
    }

    .mobile_menu{
        padding-bottom: 20px;
    }

    .mobile_menu input{
        height: 40px;
        width: 180px;
        background-color: #FDCB3C;
        border: none;
        border-radius: 5px;
        color: white;
        text-align: center;
        cursor: pointer;
        transition: 0.5s;
    }

    .mobile_menu input:hover{
        background-color: #FDCB3C;
        transform: scale(1.01,1.01) translateY(3px);
        transition: 0.5s;
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
        color: #5D5C5C;
        transition: 0.2s;
        font-size: 14px;
        cursor: pointer;
    }

    .mobile_menu a:last-child{
        margin-bottom: 20px;
        }

    .mobile_menu a:hover{
        color: #FDCB3C;
        transition: 0.2s;
        
    }

/* Celulares Pequenos */
@media (max-width: 360px) {
.desktop, #btn_desktop{
    display: none;
}

.btn-default_mobile{
    display: block;
}

}

/* Dispositivos Móveis */
@media (min-width: 361px) and (max-width: 1024px) {
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


/* Notebook */
@media (min-width: 1025px) and (max-width: 1366px) {

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