import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/reservation',
            name: 'reservation',
            path2: '/payment',
            name2: 'payment',
            path3:  '/confirm',
            name3: 'ConfirmationPayment'
        },
    ]
})