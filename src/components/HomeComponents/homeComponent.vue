<script setup>
import Igor from '@/assets/img/igor.jpg'
</script>

<template>
    <section class="banner" id="banner">
        <div class="content">
            <div class="text">
                <h1>Olá! Me chamo <span class="destaque">Igor Mascarenhas</span></h1>
                <h2>Desenvolvedor <span class="destaque">Full Stack</span></h2>
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
    height: 75vh;
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