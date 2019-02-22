import Vue from 'vue'
import App from './App.vue'
import './styles/reset.less';
import router from './router.js'
import store from './store/index.js'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
