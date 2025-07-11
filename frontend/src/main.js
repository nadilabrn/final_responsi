// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import animateOnScroll from './directives/animateOnScroll';
import './assets/main.css';

const app = createApp(App);

app.directive('animate-on-scroll', animateOnScroll);
app.use(router);
app.mount('#app');
