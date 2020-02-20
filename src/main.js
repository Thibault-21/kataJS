import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com' 
// axios.defaults.headers.common[]
// axios.defaults.headers.get[]

new Vue({
  render: h => h(App),
}).$mount('#app')
