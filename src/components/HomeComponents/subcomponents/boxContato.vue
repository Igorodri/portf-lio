<template>

        <a :href="props.link">
        <div class="box-contato" :id="props.id">
            <i :class="props.img"></i>
        </div>


        </a>


</template>

<style scoped>
a{
    text-decoration: none;
}

.box-contato{
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

.box-contato:hover{
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
}

</style>

<script setup>
const props = defineProps({
    link:String,
    img:String
})
</script>