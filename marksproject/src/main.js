import Vue from 'vue'
import App from './App.vue'
import router from './router'
// axios 网络请求
import Axios from 'axios'
// vant UI
// 文件上传组件
import {Uploader} from 'vant'
// 按钮组件
import {Button} from 'vant'
// 顶部通知栏组件
import {Notify} from 'vant'
// 顶部标签栏
import {Tab, Tabs} from 'vant'
// 图片组件
import { Image } from 'vant';
// 图片预览
import { ImagePreview } from 'vant';
//列表
import { List } from 'vant';
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import qs from 'qs'
Vue.prototype.$qs = qs

Vue.use(ImagePreview);
Vue.use(Image);
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Notify)
Vue.use(Button)
Vue.use(Uploader)
Vue.use(List);
Vue.config.productionTip = false

// 请求基地址
Axios.defaults.baseURL = 'http://localhost:8080/'
//给Vue原型挂载一个属性
Vue.prototype.$axios = Axios


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
