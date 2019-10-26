import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mixins from './mixins';
import 'popper.js/dist/popper.min';
import 'jquery/src/jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
import 'vuetify/dist/vuetify.min.css';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.mixin(mixins);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
