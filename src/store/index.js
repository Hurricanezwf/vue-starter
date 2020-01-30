import Vue from 'vue'
import Vuex from 'vuex'
import bar from './modules/bar'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        bar,
    },
})