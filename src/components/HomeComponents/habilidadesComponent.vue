<script setup>
import boxHabilidade from './subcomponents/habilidadesbox.vue'

const habilidades = [
    {
        img: 'src/assets/img/html.png', title: 'Html'
    },
    {
        img: 'src/assets/img/css.png', title: 'CSS'
    },
    {
        img: 'src/assets/img/js.png', title: 'JavaScript'
    },
    {
        img: 'src/assets/img/vue.png', title: 'Vue'
    },
    {
        img: 'src/assets/img/react.png', title: 'React'
    },
    {
        img: 'src/assets/img/node.png', title: 'Node'
    },
    {
        img: 'src/assets/img/python.png', title: 'Python'
    },
    {
        img: 'src/assets/img/sql.png', title: 'SQL'
    },
    {
        img: 'src/assets/img/postgresql.png', title: 'PostgreSQL'
    }

]
</script>

<template>
    <section class="section-content" id="habilidades" v-scroll-reveal="{ delay: 500, origin: 'left' }">

            <h1 class="title">Habilidades</h1>

            <div class="area-box">
                <boxHabilidade v-for="(habilidade, index) in habilidades"
                :key="index"
                :img="habilidade.img"
                :title="habilidade.title"
                />
            </div>

    </section>
</template>

<style scoped>
.area-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width : calc(3 * 400px);
  overflow: hidden;
  margin-top: 10px;
}

</style>