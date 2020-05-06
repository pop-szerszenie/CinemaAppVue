import Vue from 'vue'
import Reserve from './pages/reservationPage/Reserve.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Reserve),
}).$mount('#reservation')
