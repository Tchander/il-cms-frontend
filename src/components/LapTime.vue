<template>
  <div class="ilc-best_lap">
    <input
      :value="value"
      placeholder="_:__.___"
      type="text"
      @input="onChangeValue"
    />
  </div>
</template>

<script>
export default {
  name: "LapTime",
  props: {
    value: {
      type: String,
      required: true,
      default: () => "",
    },
  },
  methods: {
    onChangeValue({ target: { value } }) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.ilc-best_lap {
  margin-left: 50px;
  input {
    font-size: 16px;
    padding: 10px;
    outline: none;
    border-radius: 4px;
    color: #000;
    background: #fff;
    letter-spacing: 5px;
    &::placeholder {
      color: #6e6e6e;
    }
  }
}
</style>
