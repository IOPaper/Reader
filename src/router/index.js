import * as VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'IO.Paper'
        },
        component: () => import('../container/Container.vue')
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

export default router
