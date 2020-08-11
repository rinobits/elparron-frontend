import Vue       from 'vue';
import VueRouter from 'vue-router';
import {store}   from '../store/index';

Vue.use(VueRouter);
const routes = [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName: "Dashboard" */  '../views/Dashboard.vue')
    },
    {
      path: '/tipomasa',
      name: 'tipoMasa',
      component: () => import(/* webpackChunkName: "TipoMasa" */   '../views/Mantenedores/TipoMasa.vue')
    },
    {
      path: '/sabormasa',
      name: 'sabormasa',
      component: () => import(/* webpackChunkName: "SaborMasa" */  '../views/Mantenedores/SaborMasa.vue')
    },
    {
      path: '/sabortorta',
      name: 'saborTorta',
      component: () => import(/* webpackChunkName: "SaborTorta" */ '../views/Mantenedores/SaborTorta.vue')
    },
    {
      path: '/torta',
      name: 'torta',
      component: () => import(/* webpackChunkName: "Torta" */      '../views/Mantenedores/Torta.vue')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "NotFound" */    '../views/NotFound.vue')
    }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  next(store.state.auth);
});
export default router;
