import Vue from "vue";
import Vuex from "vuex";
import pilots from "@/store/modules/pilots";
import teams from "@/store/modules/teams";
import race from "@/store/modules/race";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pilots,
    teams,
    race,
  },
});
