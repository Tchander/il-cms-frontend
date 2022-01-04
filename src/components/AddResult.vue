<template>
  <div class="ilc-wrapper">
    <navigation-bar />
    <section-content :title="$options.SECTION_TITLES.addResult">
      <head-raw />
      <div v-for="idx in results.length" :key="idx" class="ilc-result-raw">
        <div class="ilc-race_position">
          <span>{{ idx }}</span>
        </div>
        <dnf-checkbox @toggleDnf="toggleDnf" :index="idx" />
        <choose-option
          class="ilc-pilots-dropdown"
          :category="'Pilots'"
          :items="pilots"
          :index="idx"
          :placeholder="'пилота'"
          @setItemValue="setItemValue"
        />
        <qualifying-position
          :index="idx"
          @changeQualifyingPosition="changeQualifyingPosition"
        />
        <choose-option
          class="ilc-pilots-dropdown"
          :category="'Teams'"
          :items="teams"
          :index="idx"
          :placeholder="'команду'"
          @setItemValue="setItemValue"
        />
        <lap-time v-model.trim="results[idx - 1].best_lap" />
      </div>
    </section-content>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { SECTION_TITLES } from "@/const";
import NavigationBar from "@/components/NavigationBar";
import SectionContent from "@/components/SectionContent";
import ChooseOption from "@/components/ChooseOption";
import DnfCheckbox from "@/components/DnfCheckbox";
import QualifyingPosition from "@/components/QualifyingPosition";
import HeadRaw from "@/components/HeadRaw";
import LapTime from "@/components/LapTime";
export default {
  SECTION_TITLES,
  name: "AddResult",
  components: {
    LapTime,
    HeadRaw,
    QualifyingPosition,
    DnfCheckbox,
    ChooseOption,
    NavigationBar,
    SectionContent,
  },
  data() {
    return {
      results: [
        {
          race_table_position: 1,
          race_position: "1",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 2,
          race_position: "2",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 3,
          race_position: "3",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 4,
          race_position: "4",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 5,
          race_position: "5",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 6,
          race_position: "6",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 7,
          race_position: "7",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 8,
          race_position: "8",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 9,
          race_position: "9",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 10,
          race_position: "10",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 11,
          race_position: "11",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 12,
          race_position: "12",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 13,
          race_position: "13",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 14,
          race_position: "14",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 15,
          race_position: "15",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 16,
          race_position: "16",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 17,
          race_position: "17",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 18,
          race_position: "18",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 19,
          race_position: "19",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
        {
          race_table_position: 20,
          race_position: "20",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
      ],
    };
  },
  computed: {
    ...mapGetters("pilots", {
      pilots: "pilots",
    }),
    ...mapGetters("teams", {
      teams: "teams",
    }),
  },
  methods: {
    ...mapActions("pilots", ["getAllPilots"]),
    ...mapActions("teams", ["getAllTeams"]),
    setItemValue(itemId, index, category) {
      if (category === "Pilots") {
        this.results[index - 1].pilot_id = itemId;
      } else if (category === "Teams") {
        this.results[index - 1].team_id = itemId;
      }
    },
    toggleDnf(isDnf, index) {
      if (isDnf) {
        this.results[index - 1].race_position = "DNF";
      } else {
        this.results[index - 1].race_position = String(index);
      }
    },
    changeQualifyingPosition(qualifyingPosition, index) {
      this.results[index - 1].qualifying_position = String(qualifyingPosition);
    },
  },
  async created() {
    await this.getAllPilots();
    await this.getAllTeams();
  },
};
</script>

<style lang="scss" scoped>
.ilc-result-raw {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .ilc-race_position {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 36px;
    background: #fff;
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
  }
  .ilc-pilots-dropdown {
    margin-left: 20px;
  }
}
</style>
