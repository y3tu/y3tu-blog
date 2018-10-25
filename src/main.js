import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import axios from 'axios'



Vue.use(iView);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

//为文章详情添加代码高亮
Vue.directive('highlight', (el) => {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
});
//为网站添加动态标题
Vue.directive('title', (el) => {
    if (el.dataset.title === undefined) {
        document.title = `等待中... | y3tu`;
    } else {
        document.title = `${el.dataset.title} | y3tu`;
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')