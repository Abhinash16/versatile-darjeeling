import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import './registerServiceWorker'

// import store from "./store";
import Routes from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(require('vue-moment'))


const router = new VueRouter({
  routes:Routes,
  mode: "history"
})

Vue.filter('currency', function (value) {
  return '₹' + parseFloat(value).toLocaleString();
});

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
