import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../pages/Main.vue'
import Foo from '../pages/Foo.vue'
import Bar from '../pages/Bar.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Main,
        },
        {
            path: '/bar',
            component: Bar,
        },
        {
            path: '/foo',
            component: Foo,
        }
    ]
})