import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            component: ()=> import('@/components/Home.vue')
        }
    ]
})

export default router;