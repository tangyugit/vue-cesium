import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/pageA'
import '@/assets/css/base.css'

//加载cesium相关
import 'cesium/Widgets/widgets.css'
import Cesium from 'cesium/Cesium'

//加载element-ui相关

Vue.config.productionTip = false

//挂载全局实例变量
Vue.prototype.Cesium = Cesium

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
