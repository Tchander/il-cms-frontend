<template>
  <div class="ilc-navigation">
    <ul>
      <li>
        <router-link :to="$options.ROUTES.home" class="ilc-navigation__link"
          >Главная</router-link
        >
      </li>
      <li>
        <router-link
          :to="$options.ROUTES.addResult"
          class="ilc-navigation__link"
          >Добавить результат</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { ROUTES } from "@/const";
export default {
  ROUTES,
  name: "NavigationBar",
};
</script>

<style lang="scss" scoped>
.ilc-navigation {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
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
