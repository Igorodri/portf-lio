import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Formulario from '@/views/Formulario.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/formulario',
        name: 'formulario',
        component: Formulario
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router