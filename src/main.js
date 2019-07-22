import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

// import index from './store/index.js'
Vue.config.productionTip = false
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    add (state) {
      state.count++
    },
    sub (state) {
      state.count--
    }
  }
});
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

