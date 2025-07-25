<script setup>
import BoxContato from './subcomponents/boxContato.vue';

const contatos = [
    {
        id:'whatsapp', img:'fa-brands fa-whatsapp', link: 'https://api.whatsapp.com/send/?phone=5571984332793&text&type=phone_number&app_absent=0'
    },
    {
        id:'instagram', img: 'fa-brands fa-instagram', link: 'https://www.instagram.com/igorrodrii_/'
    },
    {
        id:'linkedin', img: 'fa-brands fa-linkedin', link: 'https://www.linkedin.com/in/igor-mascarenhas-86b34a265/'
    },
    {
        id:'github', img: 'fa-brands fa-github', link: 'https://github.com/Igorodri'
    }
]
</script>

<template>
    <section class="section-content" v-scroll-reveal="{ delay: 500, origin: 'left' }" id="contato">

        <h1 class="title">Contato</h1>

        <div class="area-contato">
            <BoxContato v-for="(contato, index) in contatos"
            :key="index"
            :img="contato.img"
            :link="contato.link"
            :id="contato.id"
            />
        </div>

    </section>
</template>

<style scoped>
.area-contato{
    display: flex;
    margin-top: 50px;
}


/* Dispositivos móveis*/
@media (min-width: 300px) and (max-width: 1024px) {
    .area-contato{
        flex-wrap: wrap;
        justify-content: center;
    }
}


/* Notebook */
@media (min-width: 1025px) and (max-width: 1366px) {
    .texto{
      margin: 10px 300px 10px 300px ;
    }

    .section-content:not(:first-child){
    margin-top: 200px;
    }

}
</style>