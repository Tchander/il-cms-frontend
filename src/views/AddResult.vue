<template>
  <div class="ilc-wrapper">
    <navigation-bar />
    <section-content :title="$options.SECTION_TITLES.addResult">
      <div class="ilc-result-header__selectors">
        <league-selector v-model="currentLeague" />
        <choose-option
          :items="race"
          :category="'Race'"
          :placeholder="'гран-при'"
          @setItemValue="setItemValue"
        />
      </div>
      <head-raw />
      <div
        v-for="idx in results.length"
        :key="idx + 'a'"
        class="ilc-result-raw"
      >
        <div class="ilc-race_position">
          <span>{{ idx }}</span>
        </div>
        <checkbox-value
          :category="'isDnf'"
          @changeValue="changeValue"
          :index="idx"
        />
        <choose-option
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
          :category="'Teams'"
          :items="teams"
          :index="idx"
          :placeholder="'команду'"
          @setItemValue="setItemValue"
        />
        <checkbox-value
          :category="'isReservePilot'"
          @changeValue="changeValue"
          :index="idx"
        />
        <lap-time v-model.trim="results[idx - 1].best_lap" />
        <checkbox-value
          :category="'isBestLap'"
          @changeValue="changeValue"
          :index="idx"
        />
      </div>
      <div class="ilc-result-additional">
        Добавить результаты не стартовавших гонщиков
      </div>
      <div
        v-for="idx in additionalResults.length"
        :key="idx + 'b'"
        class="ilc-result-raw"
      >
        <div class="ilc-race_position">
          <span>{{ additionalResults[idx - 1].race_position }}</span>
        </div>
        <choose-option
          :category="'Pilots'"
          :items="pilots"
          :index="idx"
          :placeholder="'пилота'"
          :is-additional-result="true"
          @setItemValue="setItemValue"
        />
        <choose-option
          :category="'Teams'"
          :items="teams"
          :index="idx"
          :placeholder="'команду'"
          :is-additional-result="true"
          @setItemValue="setItemValue"
        />
      </div>
      <button class="ilc-result-additional__btn" @click="addResult">+</button>
    </section-content>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { SECTION_TITLES } from "@/const";
import NavigationBar from "@/components/NavigationBar";
import SectionContent from "@/components/SectionContent";
import ChooseOption from "@/components/ChooseOption";
import CheckboxValue from "@/components/CheckboxValue";
import QualifyingPosition from "@/components/QualifyingPosition";
import HeadRaw from "@/components/HeadRaw";
import LapTime from "@/components/LapTime";
import LeagueSelector from "@/components/LeagueSelector";
export default {
  SECTION_TITLES,
  name: "AddResult",
  components: {
    LeagueSelector,
    LapTime,
    HeadRaw,
    QualifyingPosition,
    CheckboxValue,
    ChooseOption,
    NavigationBar,
    SectionContent,
  },
  data() {
    return {
      currentLeague: 1,
      additionalResult: {
        race_position: "DNS",
        qualifying_position: "DNQ",
        pilot_id: null,
        team_id: null,
        race_id: null,
        league: 1,
      },
      additionalResults: [],
      results: [
        {
          race_table_position: 1,
          race_position: "1",
          qualifying_position: "",
          pilot_id: null,
          team_id: null,
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
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
          race_id: null,
          league: 1,
          best_lap: "",
          is_race_best_lap: false,
          is_result_of_reserve_pilot: false,
        },
      ],
    };
  },
  watch: {
    currentLeague(val) {
      for (let result of this.results) {
        result.league = val;
      }
      for (let result of this.additionalResults) {
        result.league = val;
      }
      this.additionalResult.league = val;
    },
  },
  computed: {
    ...mapGetters("pilots", {
      pilots: "pilots",
    }),
    ...mapGetters("teams", {
      teams: "teams",
    }),
    ...mapGetters("race", {
      race: "race",
    }),
  },
  methods: {
    ...mapActions("pilots", ["getAllPilots"]),
    ...mapActions("teams", ["getAllTeams"]),
    ...mapActions("race", ["getAllRace"]),
    setItemValue(itemId, index, category, isAdditionalResult) {
      if (isAdditionalResult) {
        if (category === "Pilots") {
          this.additionalResults[index - 1].pilot_id = itemId;
        } else if (category === "Teams") {
          this.additionalResults[index - 1].team_id = itemId;
        }
      } else {
        if (category === "Pilots") {
          this.results[index - 1].pilot_id = itemId;
        } else if (category === "Teams") {
          this.results[index - 1].team_id = itemId;
        } else if (category === "Race") {
          for (let result of this.results) {
            result.race_id = itemId;
          }
          for (let result of this.additionalResults) {
            result.race_id = itemId;
          }
          this.additionalResult.race_id = itemId;
        }
      }
    },
    changeValue(value, index, category) {
      if (category === "isDnf") {
        if (value) {
          this.results[index - 1].race_position = "DNF";
        } else {
          this.results[index - 1].race_position = String(index);
        }
      } else if (category === "isBestLap") {
        this.results[index - 1].is_race_best_lap = value;
      } else if (category === "isReservePilot") {
        this.results[index - 1].is_result_of_reserve_pilot = value;
      }
    },
    changeQualifyingPosition(qualifyingPosition, index) {
      this.results[index - 1].qualifying_position = String(qualifyingPosition);
    },
    addResult() {
      this.additionalResults.push({ ...this.additionalResult });
    },
  },
  async created() {
    await this.getAllPilots();
    await this.getAllTeams();
    await this.getAllRace();
  },
};
</script>

<style lang="scss" scoped>
.ilc-result-header__selectors {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.ilc-result-raw {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  .ilc-race_position {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 36px;
    color: #fff;
    background: #1d6cab;
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
  }
}
.ilc-result-additional {
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 20px auto;
}
.ilc-result-additional__btn {
  width: 40px;
  height: 40px;
  font-size: 20px;
  font-weight: 700;
  outline: none;
  border-radius: 50%;
  margin-bottom: 20px;
  color: #fff;
  background: #1d6cab;
  border: 1px solid transparent;
  transition: all 0.3s linear;
  &:hover {
    color: #1d6cab;
    background: #fff;
    border: 1px solid #1d6cab;
  }
}
</style>
