import { getAllTeams } from "@/api/teamApi";

export default {
  namespaced: true,
  actions: {
    async getAllTeams({ commit }) {
      try {
        const { data } = await getAllTeams();
        commit("updateTeams", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateTeams(state, payload) {
      state.teams = [...payload];
    },
  },
  getters: {
    teams: (state) => state.teams,
  },
  state: {
    teams: [],
  },
};
