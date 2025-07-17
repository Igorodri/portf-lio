<template>
    <header>
        <div class="logo">
            <img :src="logo" alt="Logo do Portifólio">
        </div>

        <nav>
            <a href="#sobre"><span>Sobre mim</span></a>
            <a href="#habilidades"><span>Habilidades</span></a>
            <a href="#projetos"><span>Projetos</span></a>
            <a href="#contato"><span>Contato</span></a>
        </nav>

        <div class="area-btn">
            <button>Fazer site</button>
        </div>
    </header>
</template>

<style scoped>
header{
    border-bottom: 2px solid var(--cor-secundaria);
    padding: 15px 0px 15px 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
}

nav span, a{
    text-decoration: none;
    color: var(--cor-principal-texto);
    margin-right: 10px;
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
import logo from '@/assets/img/logo.png'
</script>