<script setup>
import {ref} from 'vue'
import boxProjetos from './subcomponents/boxProjetos.vue';
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

const projetos = ref([])

async function listarProjetos() {
    const response = await fetch(import.meta.env.VITE_URL_API+'/projetos',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const data = await response.json()

    if(response.ok){
        console.log('Projetos listados com sucesso!')
        projetos.value = data
    }else{
        Toastify({
            text: "Erro ao listar projetos, atualize a página",
            close:true,
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #ff0000, #ec5353)"
            }
        }).showToast();
    }
}

listarProjetos()
</script>

<template>
    <section class="section-content" id="projetos" v-scroll-reveal="{ delay: 500, origin: 'left' }">
        <h1 class="title">Projetos</h1>

        
        <div class="area-projetos">
            <boxProjetos v-for="(projeto,index) in projetos"
                :key="index"
                :imageUrl="projeto.imageUrl"
                :title="projeto.title"
                :description="projeto.descricao"
                :link="projeto.link"
                :videoUrl="projeto.videoUrl"
                />
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