<script setup>
import boxHabilidade from './subcomponents/habilidadesbox.vue'
</script>

<template>
    <section class="section-content" id="habilidades">

            <h1 class="title">Habilidades</h1>

            <div class="area-box">
                <boxHabilidade v-for="(habilidade, index) in habilidades"
                
                />
            </div>

    </section>
</template>

<style scoped>

</style>