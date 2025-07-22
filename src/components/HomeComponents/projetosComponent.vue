<script setup>
import boxProjetos from './subcomponents/boxProjetos.vue';
</script>

<template>
    <section class="section-content" id="projetos" v-scroll-reveal="{ delay: 500, origin: 'left' }">
        <h1 class="title">Projetos</h1>

        
        <div class="area-projetos">
            <boxProjetos
                imageUrl="src/assets/img/techsallus.png"
                title="Projeto Techsallus"
                description="Sistema de gestão clínica com dashboard e automações."
                link="https://techsallus.com"
                videoUrl="https://www.youtube.com/embed/SEU_VIDEO_ID"
                />

            <boxProjetos image-url="src/assets/img/meeta.png"/>
            <boxProjetos image-url="src/assets/img/techsallus.png"/>
            <boxProjetos image-url="src/assets/img/meeta.png"/>
        </div>
    </section>
</template>

<style scoped>
.area-projetos{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width : calc(3 * 400px);
    overflow: hidden;
    margin-top: 30px;
    gap: 12px;
}
</style>