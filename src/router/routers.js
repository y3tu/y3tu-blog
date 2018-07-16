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
        path: '/about',
        name: 'about',
        meta: {
            title: '关于',
            hideInMenu: true
        },
        component: () => import('@/view/About.vue')
    }

]