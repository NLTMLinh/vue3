import * as types from "./mutation-types";

export const mutations = {
  [types.INIT_JOKES](state, payload) {
    state.jokes = [...state.jokes, ...payload];
  },
  [types.ADD_JOKE](state, payload) {
    state.jokes = [...state.jokes, payload];
  },
  [types.REMOVE_JOKE](state, payload) {
    state.jokes.splice(payload, 1);
  }
};
