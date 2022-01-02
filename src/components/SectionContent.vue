<template>
  <div class="section-content">
    <h1 class="section-title">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SectionContent",
  props: {
    title: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
.section-content {
  width: 100%;
  height: 100%;
  padding: 10px;
  .section-title {
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin: 20px auto;
  }
}
</style>
