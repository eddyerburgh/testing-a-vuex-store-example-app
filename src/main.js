import Vue from 'vue'
import Vuex from 'vuex'
import createStoreConfig from './store/create-store-config'
import App from './App.vue'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false

Vue.use(Vuex)

const storeConfig = createStoreConfig()

const store = new Vuex.Store(storeConfig)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
