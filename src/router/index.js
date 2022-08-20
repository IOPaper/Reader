import * as VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'IO.Paper'
        },
        component: () => import('../container/Home.vue')
    }, {
        path: '/x/:paperId',
        name: 'PaperReader',
        meta: {
            title: 'paper reader'
        },
        component: () => import('../container/Paper.vue')
    }, {
        path: '/:error*',
        name: 'not found',
        meta: {
            title: 'page not found'
        },
        component: () => import('../container/NotFound.vue')
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

export default router
