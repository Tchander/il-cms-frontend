<template>
  <div class="ilc-wrapper">
    <navigation-bar />
    <section-content :title="$options.SECTION_TITLES.addResult">
      <div v-for="idx in results.length" :key="idx" class="ilc-result-raw">
        <div class="ilc-race_position">
          <span>{{ idx }}</span>
        </div>
        <dnf-checkbox @toggleDnf="toggleDnf" :index="idx" />
        <choose-option
          class="ilc-pilots-dropdown"
          :pilots="pilots"
          :index="idx"
          @setPilot="setPilot"
        />
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
export default {
  SECTION_TITLES,
  name: "AddResult",
  components: { DnfCheckbox, ChooseOption, NavigationBar, SectionContent },
  data() {
    return {
      results: [
        {
          race_table_position: 1,
          race_position: "1",
          pilot_id: null,
        },
        {
          race_table_position: 2,
          race_position: "2",
          pilot_id: null,
        },
        {
          race_table_position: 3,
          race_position: "3",
          pilot_id: null,
        },
        {
          race_table_position: 4,
          race_position: "4",
          pilot_id: null,
        },
        {
          race_table_position: 5,
          race_position: "5",
          pilot_id: null,
        },
        {
          race_table_position: 6,
          race_position: "6",
          pilot_id: null,
        },
        {
          race_table_position: 7,
          race_position: "7",
          pilot_id: null,
        },
        {
          race_table_position: 8,
          race_position: "8",
          pilot_id: null,
        },
        {
          race_table_position: 9,
          race_position: "9",
          pilot_id: null,
        },
        {
          race_table_position: 10,
          race_position: "10",
          pilot_id: null,
        },
        {
          race_table_position: 11,
          race_position: "11",
          pilot_id: null,
        },
        {
          race_table_position: 12,
          race_position: "12",
          pilot_id: null,
        },
        {
          race_table_position: 13,
          race_position: "13",
          pilot_id: null,
        },
        {
          race_table_position: 14,
          race_position: "14",
          pilot_id: null,
        },
        {
          race_table_position: 15,
          race_position: "15",
          pilot_id: null,
        },
        {
          race_table_position: 16,
          race_position: "16",
          pilot_id: null,
        },
        {
          race_table_position: 17,
          race_position: "17",
          pilot_id: null,
        },
        {
          race_table_position: 18,
          race_position: "18",
          pilot_id: null,
        },
        {
          race_table_position: 19,
          race_position: "19",
          pilot_id: null,
        },
        {
          race_table_position: 20,
          race_position: "20",
          pilot_id: null,
        },
      ],
    };
  },
  computed: {
    ...mapGetters("pilots", {
      pilots: "pilots",
    }),
  },
  methods: {
    ...mapActions("pilots", ["getAllPilots"]),
    setPilot(pilotId, index) {
      this.results[index - 1].pilot_id = pilotId;
    },
    toggleDnf(isDnf, index) {
      if (isDnf) {
        this.results[index - 1].race_position = "DNF";
      } else {
        this.results[index - 1].race_position = String(index);
      }
    },
  },
  async created() {
    await this.getAllPilots();
  },
};
</script>

<style lang="scss" scoped>
.ilc-result-raw {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .ilc-race_position {
    background: #fff;
    padding: 10px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 2px;
  }
  .ilc-pilots-dropdown {
    margin-left: 20px;
  }
}
</style>
