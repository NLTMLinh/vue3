import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "./mutaions";
import * as actions from "./actions";

Vue.use(Vuex);

const state = {
  user: {}
};

export default new Vuex.Store({ state, mutations, actions });
