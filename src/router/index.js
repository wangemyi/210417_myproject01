import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PageOne from '@/components/PageOne'
import PageTwo from '@/components/PageTwo'
import PageOne01 from '@/components/PageOne01'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/page_one',
            name: 'PageOne',
            component: PageOne
        },
        {
            path: '/page_two',
            name: 'PageTwo',
            component: PageTwo
        },
        {
            path: '/page_one01',
            name: 'PageOne01',
            component: PageOne01
        }
    ]
})