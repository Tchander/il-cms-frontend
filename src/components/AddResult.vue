<template>
  <div class="ilc-wrapper">
    <navigation-bar />
    <section-content :title="title" />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SectionContent from "@/components/SectionContent";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AddResult",
  components: { NavigationBar, SectionContent },
  props: {
    title: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    ...mapGetters("pilots", {
      pilots: "pilots",
    }),
  },
  methods: {
    ...mapActions("pilots", ["getAllPilots"]),
  },
  async created() {
    await this.getAllPilots();
  },
};
</script>

<style scoped></style>
