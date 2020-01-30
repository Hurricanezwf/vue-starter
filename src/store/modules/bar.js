export default {
    namespaced: true,
    state: {
        count: 0
    },
    getters: {
        getCount: state => {
            return state.count;
        },
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
}