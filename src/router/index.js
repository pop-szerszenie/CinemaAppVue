import Vue from 'vue'
import Router from 'vue-router'
import Reserve from '@/components/Reserve'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/Reserve',
            name: 'Reserve',
            component: Reserve,
        }
    ]
})