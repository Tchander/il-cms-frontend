<template>
  <div class="home">
    <div class="ilc-wrapper">
      <navigation-bar />
      <section-content :title="$options.SECTION_TITLES.home" />
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import SectionContent from "@/components/SectionContent";
import { SECTION_TITLES } from "@/const";
export default {
  SECTION_TITLES,
  name: "Home",
  components: { NavigationBar, SectionContent },
};
</script>
