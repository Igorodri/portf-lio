<template>
    <a :href="props.link" target="_blank">
        <div class="box-contato" :id="props.id" :class="classDinamic">
            <i :class="props.img"></i>
        </div>
    </a>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    link: String,
    img: String,
    id: String
})

const classDinamic = computed(() => {
    if (props.id === 'whatsapp') {
        return 'whatsapp';
    } else if (props.id === 'instagram') {
        return 'instagram';
    } else if (props.id === 'linkedin') {
        return 'linkedin';
    } else {
        return 'github';
    }
})
</script>

<style scoped>
a {
    text-decoration: none;
}

.box-contato {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
    border-radius: 10px;
    background-color: var(--cor-fundo);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    margin: 0px 15px 0px 15px;
    font-size: 70px;
    color: var(--cor-secundaria);
    transition: 0.2s ease-in-out;
}

.box-contato:hover {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
}

.whatsapp:hover {
    background-color: #25D366;
    color: white;
}

.instagram:hover {
    background-color: #C13584;
    color: white;
}

.linkedin:hover {
    background-color: #0077B5;
    color: white;
}

.github:hover {
    background-color: #333; 
    color: white;
}
</style>
