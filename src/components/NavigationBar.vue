<template>
  <aside class="ilc-navigation">
    <ul>
      <li>
        <router-link :to="$options.ROUTES.home" class="ilc-navigation__link"
          >Главная</router-link
        >
      </li>
      <li>
        <router-link
          :to="{
            name: 'AddResult',
            params: { title: $options.SECTION_TITLES.addResult },
          }"
          class="ilc-navigation__link"
          >Добавить результат</router-link
        >
      </li>
    </ul>
  </aside>
</template>

<script>
import { ROUTES, SECTION_TITLES } from "@/const";
export default {
  ROUTES,
  SECTION_TITLES,
  name: "NavigationBar",
};
</script>

<style lang="scss" scoped>
.ilc-navigation {
  width: 250px;
  min-height: 100vh;
  background: #1d6cab;
  padding: 30px;
  ul {
    li {
      margin-bottom: 50px;
      .ilc-navigation__link {
        color: #fff;
        font-size: 16px;
        transition: all linear 0.3s;
        &:hover {
          color: #f59090;
        }
      }
    }
  }
}
</style>
