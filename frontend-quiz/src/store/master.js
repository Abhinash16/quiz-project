import * as types from './mutationcodes'
import Vue from 'vue'
export default {
    state: {
        questions: []
    },
    mutations: {
        GETQUESTIONS (state, l) {
            state.questions = l
        }
    },
    getters: {
        getAllQuestions: (state, getters) => {
            return state.questions
        },
        getAQuestion: (state, getters) => (id) => {
            return getters.getAllQuestions[id]
        }
    },
    actions: {
        storeQuestions ({commit}, l) {
            Vue.http.get('http://localhost:8080/api/questions').then(s => {
                commit('GETQUESTIONS', s.data)
            })
        },
        putQuestions ({commit}, l) {
            commit('GETQUESTIONS', l)
        }
    }
}