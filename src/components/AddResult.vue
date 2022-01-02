<template>
  <div class="ilc-wrapper">
    <navigation-bar />
    <section-content :title="$options.SECTION_TITLES.addResult">
      <choose-pilot :pilots="pilots" />
    </section-content>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { SECTION_TITLES } from "@/const";
import NavigationBar from "@/components/NavigationBar";
import SectionContent from "@/components/SectionContent";
import ChoosePilot from "@/components/ChoosePilot";
export default {
  SECTION_TITLES,
  name: "AddResult",
  components: { ChoosePilot, NavigationBar, SectionContent },
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
