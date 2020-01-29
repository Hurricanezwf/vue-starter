import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../pages/Main.vue'

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

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