# marksproject

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 适配页面
1、安装webstorm插件，px2rwd
2、setting 设置font-size根元素
3、安装lib-flexible插件
```
npm i lib-flexible --save
```
4、安装px2rem-loader插件
```
npm i px2rem-loader --save
```
5、在main.js中引入
```
import 'lib-flexible'
```
### Vue引入高德地图
1、安装amap
```
npm install --save @amap/amap-vue
```
2、在main.js中引入
```
import AmapVue from '@amap/amap-vue';

//高德事情的key web js端（不是web服务，否则导入自定义地图会失败）
AmapVue.config.key = 'd899b71eb7ca1191c7cb8eeed39f7473'
AmapVue.config.plugins = []
Vue.use(AmapVue)
```
3、使用amap
官方文档：[https://jimnox.gitee.io/amap-vue/](amap-vue官方文档)
高德文档：[https://lbs.amap.com/](高德开发平台)
```
 <amap class="amap-demo" vid="amap" :center="center" :zooms="zooms"
                         mapStyle="amap://styles/ad8448e7f8ce54067517cf5926fff90e"  >
 </amap>
```
