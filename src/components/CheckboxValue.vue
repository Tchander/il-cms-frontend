<template>
  <div class="ilc-dnf">
    <input type="checkbox" @click="changeValue" />
  </div>
</template>

<script>
export default {
  name: "CheckboxValue",
  props: {
    category: {
      type: String,
      required: true,
      default: () => "",
    },
    index: {
      type: Number,
      required: true,
      default: () => 0,
    },
  },
  data() {
    return {
      value: false,
    };
  },
  methods: {
    changeValue() {
      this.value = !this.value;
      this.$emit("changeValue", this.value, this.index, this.category);
    },
  },
};
</script>

<style lang="scss" scoped>
.ilc-dnf {
  margin-left: 50px;
  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}
</style>
