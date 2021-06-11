import Vue from 'vue'
import Router from 'vue-router'

import List from '../components/List.vue'
import Detail from '../components/Detail.vue'


Vue.use(Router)


export default new Router({
    routes: [{
            path: '/',
            name: 'List',
            component: List
        },
        {
            path: '/detail/:name',
            name: 'Detail',
            component: Detail
        }
    ],
    mode: 'history'
})