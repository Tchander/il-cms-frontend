<template>
  <div class="ilc-dropdown ilc-pilots-dropdown">
    <input
      class="ilc-pilots-dropdown__input"
      type="text"
      placeholder="Выберите пилота"
      readonly
      @click="openDropdown"
    />
    <div
      class="ilc-pilots-dropdown__options"
      :class="{ 'ilc-pilots-dropdown__options--active': isDropdownOpen }"
    >
      <div class="ilc-pilots-dropdown__options-wrapper">
        <ul>
          <li v-for="(pilot, idx) in pilots" :key="idx">
            <span>{{ pilot.name }}</span>
          </li>
        </ul>
        <div class="ilc-closer" @click="openDropdown">
          <span class="ilc-closer--first"></span>
          <span class="ilc-closer--second"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChoosePilot",
  props: {
    pilots: {
      type: Array,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    openDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.ilc-pilots-dropdown__input {
  font-size: 16px;
  padding: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  color: #000;
  background: #fff;
  &::placeholder {
    color: #000;
  }
}
.ilc-pilots-dropdown__options {
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  .ilc-pilots-dropdown__options-wrapper {
    position: relative;
    width: 100%;
    max-width: 1100px;
    background: #1d6cab;
    padding: 20px;
    border-radius: 10px;
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 16.66%;
        margin-bottom: 20px;
        span {
          cursor: pointer;
          transition: all 0.3s linear;
          color: #fff;
          &:hover {
            color: #f59090;
          }
        }
      }
    }
    .ilc-closer {
      cursor: pointer;
      .ilc-closer--first {
        position: absolute;
        width: 20px;
        height: 20px;
        right: 20px;
        top: 15px;
        border-right: 2px solid #fff;
        transform: rotate(-45deg);
      }
      .ilc-closer--second {
        position: absolute;
        width: 20px;
        height: 20px;
        right: 7px;
        top: 15px;
        border-left: 2px solid #fff;
        transform: rotate(45deg);
      }
    }
  }
  &--active {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
    background: rgba(0, 0, 0, 0.9);
  }
}
</style>
