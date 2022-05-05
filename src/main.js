import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 按需引入element
import { Button } from 'element-ui';
// 引入国际化
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

// 设置初始值
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.use(Button)
Vue.use(VueI18n);

const messages = {
  "en": Object.assign(require('@/lang/en'), enLocale),
  "zh":Object.assign(require('@/lang/zh'), zhLocale)
}

const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages, // set locale messages
})

// Vue.use(Element, {
//   i18n: (key, value) => i18n.t(key, value)
// })
// ElementLocale.i18n((key, value) => i18n.t(key, value))


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  i18n 
}).$mount('#app')
