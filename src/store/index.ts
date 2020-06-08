import Vue from "vue";
import Vuex, { Store } from "vuex";

import * as types from "./types";
import user from "./modules/user";
import article from "./modules/article";

Vue.use(Vuex);

const initPageState = () => {
  return {
    token: ""
  }
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    initPageState
  },
  mutations: {
    [types.SAVE_TOKE](state: any, pageState: any){
      for(const prop in pageState){
        state[prop] = pageState[prop];
      }
    }
  },
  actions: {},
  modules: {
    user,
    article
  }
});

