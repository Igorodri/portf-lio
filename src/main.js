    import './assets/main.css'

    import { createApp } from 'vue'
    import App from './App.vue'
    import router from './router/router';
    import scrollreveal from './directives/scrollreveal';

    createApp(App).directive('scroll-reveal', scrollreveal).use(router).mount('#app')
