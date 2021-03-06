// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './icons'
import {Swipe,SwipeItem} from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Element)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
