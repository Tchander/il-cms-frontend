<template>
  <div class="ilc-wrapper">
    <navigation-bar />
    <section-content :title="$options.SECTION_TITLES.addResult">
      <div v-for="idx in results.length" :key="idx" class="ilc-result-raw">
        <div class="ilc-race_position">
          <span>{{ idx }}</span>
        </div>
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
export default {
  SECTION_TITLES,
  name: "AddResult",
  components: { ChooseOption, NavigationBar, SectionContent },
  data() {
    return {
      results: [
        {
          racePosition: 1,
          pilot: {},
        },
        {
          racePosition: 2,
          pilot: {},
        },
        {
          racePosition: 3,
          pilot: {},
        },
        {
          racePosition: 4,
          pilot: {},
        },
        {
          racePosition: 5,
          pilot: {},
        },
        {
          racePosition: 6,
          pilot: {},
        },
        {
          racePosition: 7,
          pilot: {},
        },
        {
          racePosition: 8,
          pilot: {},
        },
        {
          racePosition: 9,
          pilot: {},
        },
        {
          racePosition: 10,
          pilot: {},
        },
        {
          racePosition: 11,
          pilot: {},
        },
        {
          racePosition: 12,
          pilot: {},
        },
        {
          racePosition: 13,
          pilot: {},
        },
        {
          racePosition: 14,
          pilot: {},
        },
        {
          racePosition: 15,
          pilot: {},
        },
        {
          racePosition: 16,
          pilot: {},
        },
        {
          racePosition: 17,
          pilot: {},
        },
        {
          racePosition: 18,
          pilot: {},
        },
        {
          racePosition: 19,
          pilot: {},
        },
        {
          racePosition: 20,
          pilot: {},
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
    setPilot(pilot, index) {
      this.results[index - 1].pilot = pilot;
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
