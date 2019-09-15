import Vuex from 'vuex'
import master from './master'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        master
    }
})
export default store