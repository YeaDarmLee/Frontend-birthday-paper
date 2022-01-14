import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from './plugins/vuetify'
import { mdiBullhornOutline } from '@mdi/js';

import '@/assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router: router,
  mdiBullhornOutline,
  render: h => h(App)
}).$mount('#app')