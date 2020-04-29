import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import store from "./store";
import Routes from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(require('vue-moment'))


const router = new VueRouter({
  routes:Routes,
  mode: "history"
})

// router.beforeEach((to, from, next) => {
//   let user = localStorage.getItem('agent_id')
//   let token = localStorage.getItem('username')
//   if (user && token) {
//     router.go('/')
//   }
//   else if (!store.getters.isAuthenticated) {
//     router.go('/login')
//   }
// })

Vue.filter('currency', function (value) {
  return '₹' + parseFloat(value).toLocaleString();
});
new Vue({
  render: h => h(App),
  router:router,
  store
}).$mount('#app')
