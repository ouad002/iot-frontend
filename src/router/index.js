import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Rooms from '../components/Rooms.vue';
import Dashboard from '../components/Dashboard.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/rooms', component: Rooms },
  { path: '/dashboard', component: Dashboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
