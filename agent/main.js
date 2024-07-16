import App from './App'

// #ifndef VUE3
import Vue from 'vue'

import uView from "uview-ui";
Vue.use(uView);

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);

//外部网页
import {
	webview
} from './static/js/importView.js'


//路由守卫
import {
	router,
	RouterMount
} from './util/router.js'
Vue.use(router)


// 工具包
import globalUtil from "@/util/face.js";
Vue.prototype.globalUtil=globalUtil;

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif