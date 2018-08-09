# travel-mk-nuxt
> 初步了解使用nuxt.js渲染仿去哪的三个页面

# nuxt的具体使用步骤，以及了解参考[官网]
(https://zh.nuxtjs.org/guide)

# 本项目并不复杂，因此只使用了nuxt的一些基本功能（移动端并不推荐）

### 第一步安装nuxt.js ([参考技术胖](http://jspang.com/2018/02/26/nuxt/))
```
vue init nuxt/starter
npm install
npm run dev
```
* 需要注意：如果不是新建项目，最好另开一个文件夹，我就在直接覆盖了，幸好留有旧文件

### 安装完成以后，就开始将文件移入
1. 首先将首页引入
> 将index.vue放置在**pages**目录下，其中用到的组件放置在**components**下

> 运行以后会报错，找不到css，则将所用到的css全部引入

> 公用css应该在nuxt.congig.js中使用
```
css:[
    '~assets/styles/reset.css',
    '~assets/styles/border.css',
    '~static/iconfont/iconfont.css',
    'swiper/dist/css/swiper.css'
  ],
```
> 接下来吧store引入
* 接下来就会提示swiper is undefind,此时经过查询官网，发现引入方式错误，应该重新引入
```
<!-- 第一步安装vue-awesome-swiper -->
npm install vue-awesome-swiper -S

<!-- 第二步在plugins下新建目录表示使用 -->
<!-- 目录名 vue-awesome-swiper.js -->
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'

Vue.use(VueAwesomeSwiper)

<!-- 在nuxt.config.js中使用 （(第三方插件都应该在这里)）-->
plugins: [
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false },
],
```
* 其他错误提示： 
> 当我们将组件放置在pages文件夹下回提示 found in ，找不到文件，因此需要放置在components文件夹下

> 当完成以上内容以后，会报错localStorage is undefind;因此删除在这里的localStorag

> 在index的mounted中判断localStorage是否保存了变量来更改 （因为node端是没有window的无法实现，只有浏览器渲染以后才能够实现）

> 当将store复制过来，会提示store is undefind，这是因为没有导出变量，需要更改成
```
const store = () => new Vuex.Store({})
export default store
```

### 当把首页处理好以后，剩下两个页面就可以不用更改直接使用了
* 需要注意的是在这个模式下使用better-scroll，会出现click在手机模式下失效，因此需要修改为
```
this.scroll = new BScroll(this.$refs.wrapper,{ mouseWheel: true, click: true, tap: true })
```

### 最后需要 放置重复打包 , node的版本必须大于8 否则会提示 错误
```
  vendor: ['vuex','axios'],
```


### 2018.8.9 更新
1.发现字母表无法点击
> 没有找到click失效的原因，因此就在touchstart中重复了一遍click事件

2.详情页面头部动画失效
> 因为之前是写在activated和deactivated中的，window是获取不到的，需要写在mounted中

> deactivated需要替换成destroyed生命周期来销毁全局事件

3.每次返回首页都刷新页面 - 能力不足不知道怎么改，暂时放置

4.打包以后路径不匹配的两种解决方式
```
<!-- 第一种 在nuxt.config.js的build-->
if(!isDev){
    config.output.publicPath = './_nuxt/';
}
<!-- 第二种 在nuxt.config.js的build -->
build: {
    // 这里是你要访问的实际地址
    publicPath: 'xxxx',
},
```
综合来说第二种更好，第一种有bug。比如你有多级路由parent/child和parent两个路由，这样会导致你一个页面访问parent/child/_nuxt/main.js和parent/_nuxt/main.js，明显冲突了（[参考地址](https://segmentfault.com/q/1010000015267907)）