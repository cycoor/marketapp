import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import LazyLoad from 'vue-lazyload'
import toast from 'components/common/toast'

Vue.config.productionTip = false

// toast弹窗插件
Vue.use(toast)

// 事件总线
Vue.prototype.$bus = new Vue()

//图片懒加载
Vue.use(LazyLoad, {
  loading: require('assets/img/common/placeholder.jpg')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
