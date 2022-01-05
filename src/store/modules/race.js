import { getAllRace } from "@/api/raceApi";
export default {
  namespaced: true,
  actions: {
    async getAllRace({ commit }) {
      try {
        const { data } = await getAllRace();
        commit("updateRace", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateRace(state, payload) {
      state.race = payload;
    },
  },
  getters: {
    race: (state) => state.race,
  },
  state: {
    race: [],
  },
};
