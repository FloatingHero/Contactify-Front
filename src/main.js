import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import 'vue-toastification/dist/index.css';
import Toast from 'vue-toastification';

import 'bootstrap-icons/font/bootstrap-icons.css';

createApp(App).use(router).use(Toast).mount('#app');
