import Vue from 'vue';
import { IonicVueRouter } from '@ionic/vue';
import Home from './views/Home.vue';
import HouseDetails from './views/HouseDetails.vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Houses of Game of Thrones',
      },
    },
    {
      path: '/detail',
      name: 'houseDetails',
      component: HouseDetails,
      meta: {},
      props: true,
    },
  ],
});
