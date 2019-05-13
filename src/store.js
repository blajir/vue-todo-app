import Vue from "vue";
import Vuex from "vuex";
import * as types from './mutation-types'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        message: '牛乳を買う',
        complete: true
      },
      {
        id: 2,
        message: '飛行機予約',
        complete: false
      }
    ]
  },
  mutations: {
    [types.ADD_TODO](state, message) {
      const id = state.items.length ? state.items.slice(-1)[0].id + 1 : 1
      const todo = {
        id,
        message,
        complete: false
      }

      state.items.push(todo)
    },
    [types.REMOEVE_TODO](state, index) {
      state.items.splice(index, 1)
    }
  },
  actions: {}
});
