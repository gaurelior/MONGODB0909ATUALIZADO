import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/PaginaPrincipal.vue';
import VideosDiversos from '@/components/VideoUnico.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videos',
    name: 'VideosDiversos',
    component: VideosDiversos
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
