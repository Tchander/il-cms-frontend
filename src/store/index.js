import Vue from "vue";
import Vuex from "vuex";
import pilots from "@/store/modules/pilots";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pilots,
  },
});
