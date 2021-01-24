import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faChevronDown, faCoffee, faGlobe, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)
library.add(faGlobe)
library.add(faChevronDown)
library.add(faAngleDown)
library.add(faTimesCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

import './assets/css/app.scss'
import './assets/css/styles.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
