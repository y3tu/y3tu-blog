import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/main.scss'
import i18n from './lang'

Vue.use(ElementUI);

Vue.prototype.$ELEMENT = {
    size: (localStorage.getItem('size') || 'medium'),
    i18n: (key, value) => i18n.t(key, value)
}


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
        document.title = `等待中... | yao`;
    } else {
        document.title = `${el.dataset.title} | yao`;
    }
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
