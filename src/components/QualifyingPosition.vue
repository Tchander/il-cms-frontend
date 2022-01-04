<template>
  <div class="ilc-qualifying">
    <input
      v-model="qualifyingPosition"
      type="number"
      min="1"
      max="20"
      @click="changeQualifyingPosition"
    />
  </div>
</template>

<script>
export default {
  name: "QualifyingPosition",
  props: {
    index: {
      type: Number,
      required: true,
      default: () => 0,
    },
  },
  data() {
    return {
      qualifyingPosition: null,
    };
  },
  methods: {
    changeQualifyingPosition() {
      this.$emit(
        "changeQualifyingPosition",
        this.qualifyingPosition,
        this.index
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.ilc-qualifying {
  margin-left: 50px;
  input {
    width: 40px;
    height: 36px;
    font-size: 16px;
    padding-left: 6px;
    border-radius: 4px;
  }
}
</style>
