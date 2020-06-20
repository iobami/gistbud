import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Watson from './views/ChatService.vue';
import PageNotFound from './views/Page-Not-Found.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // { path: '/', redirect: '/bot' },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Watson Service',
          component: Watson,
          meta: {
            breadcrumb: 'Watson Service',
          },
        },
      ],
    },
    { path: '*', component: PageNotFound },
  ],
});
