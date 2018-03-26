import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import NVUI from '../packages/index'
import '../packages/theme-default/lib/index.css'

Vue.component('demo-block', demoBlock)
Vue.use(NVUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
// 禁止eslint检查
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
