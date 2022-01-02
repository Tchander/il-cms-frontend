<template>
  <div class="ilc-wrapper">
    <navigation-bar />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AddResult",
  components: { NavigationBar },
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
