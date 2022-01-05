<template>
  <div class="ilc-league-selector">
    <div class="ilc-league-selector__title"><span>Лига</span></div>
    <div class="ilc-league-selector__radio">
      <input
        id="league_1"
        type="radio"
        name="league"
        :value="$options.LEAGUES.FIRST"
        checked
        @input="changeLeague"
      />
      <label for="league_1">{{ $options.LEAGUES.FIRST }}</label>
    </div>
    <div class="ilc-league-selector__radio">
      <input
        id="league_2"
        type="radio"
        name="league"
        :value="$options.LEAGUES.SECOND"
        @input="changeLeague"
      />
      <label for="league_2">{{ $options.LEAGUES.SECOND }}</label>
    </div>
    <div class="ilc-league-selector__radio">
      <input
        id="league_3"
        type="radio"
        name="league"
        :value="$options.LEAGUES.THIRD"
        @input="changeLeague"
      />
      <label for="league_3">{{ $options.LEAGUES.THIRD }}</label>
    </div>
  </div>
</template>

<script>
import { LEAGUES } from "@/const";
export default {
  LEAGUES,
  name: "LeagueSelector",
  props: {
    value: {
      type: Number,
      required: true,
      default: () => 1,
    },
  },
  methods: {
    changeLeague({ target: { value } }) {
      this.$emit("input", Number(value));
    },
  },
};
</script>

<style lang="scss" scoped>
.ilc-league-selector {
  display: flex;
  .ilc-league-selector__title {
    font-size: 16px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .ilc-league-selector__radio {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    input {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    label {
      margin-bottom: 5px;
    }
  }
}
</style>
