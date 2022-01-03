<template>
  <div class="ilc-dnf">
    <input type="checkbox" @click="toggleDnf" />
  </div>
</template>

<script>
export default {
  name: "DnfCheckbox",
  props: {
    index: {
      type: Number,
      required: true,
      default: () => 0,
    },
  },
  data() {
    return {
      isDnf: false,
    };
  },
  methods: {
    toggleDnf() {
      this.isDnf = !this.isDnf;
      this.$emit("toggleDnf", this.isDnf, this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.ilc-dnf {
  margin-left: 20px;
  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}
</style>
