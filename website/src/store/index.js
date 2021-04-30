import Vue from "vue";
import Vuex from "vuex";
import welcome from "./welcome";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    welcome
  },
});