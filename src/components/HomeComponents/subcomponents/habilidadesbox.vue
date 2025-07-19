<template>
        <div class="box_habilidade" 
        @mousemove="sobmouse"
        @mouseleave="saimouse"
        ref="boxRef"
        >

                <img :src="props.img" alt="">

            <div class="area-title">
                <p>{{ props.title }}</p>
            </div>


        </div>
</template>

<style scoped>
.box_habilidade{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--cor-secundaria);
    border-radius: 5px;
    border-bottom-right-radius: 40px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    width: 170px;
    margin: 20px;
    transition: transform 0.1s ease-out;
    will-change: transform;
}

.box_habilidade.suave-volta {
  transition: transform 2s ease;
}

.box_habilidade img{
    width: 100px;
    height: 100px;
    margin-left: 5px;
    padding: 10px;
}

.area-title{
    color: var(--cor-principal-texto);
    padding: 5px;
}
</style>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    img:String,
    title:String
})

const boxRef = ref(null)

function sobmouse(e) {
  const box = boxRef.value;
  const rect = box.getBoundingClientRect();

  box.classList.remove('suave-volta')

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 4;
  const centerY = rect.height / 4;

  const rotateX = -((y - centerY) / centerY) * 15; 
  const rotateY = ((x - centerX) / centerX) * 15;

  box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function saimouse(){
    boxRef.value.style.transform = 'rotateX(0deg) rotateY(0deg)'
    box.classList.add('suave-volta')
}
</script>