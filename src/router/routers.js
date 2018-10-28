export default [
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'Login - 登录',
            hideInMenu: true
        },
        component: () => import('@/view/Home.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        meta: {
            title: '博客',
            hideInMenu: true
        },
        component: () => import('@/view/Blog.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/view/Detail.vue')
    },
    {
        path: '/website',
        name: '常用网站',
        meta: {
            title: '常用网站',
            hideInMenu: true
        },
        component: () => import('@/view/Website.vue')
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: '关于',
            hideInMenu: true
        },
        component: () => import('@/view/About.vue')
    },
    {
        path: '/meizi',
        name: 'MEIZI',
        meta: {
            title: '妹子',
            hideInMenu: true
        },
        component: () => import('@/view/Meizi.vue')
    }

]