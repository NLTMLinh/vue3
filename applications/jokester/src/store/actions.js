// https://official-joke-api.appspot.com/random_ten

import * as types from "./mutation-types";

export const initJokes = ({ commit }) => {
  fetch("https://official-joke-api.appspot.com/random_ten", {
    method: "GET"
  })
    .then(res => res.json())
    .then(json => commit(types.INIT_JOKES, json));
};

export const addJoke = ({ commit }) => {
  fetch("https://official-joke-api.appspot.com/random_joke", {
    method: "GET"
  })
    .then(res => res.json())
    .then(json => commit(types.ADD_JOKE, json));
};

export const removeJoke = ({ commit }, payload) => {
  commit(types.REMOVE_JOKE, payload);
};
