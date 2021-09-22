import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue);
//create global filter
Vue.filter('snippet',val =>{
  if(!val || typeof(val) != 'string') return '';
  if(val.length > 50){
    val = val.slice(0,50)
    val += '...'
  }
  return val
})

new Vue({
  el: '#app',
  render: h => h(App)
})
