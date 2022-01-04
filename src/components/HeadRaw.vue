<template>
  <div class="ilc-head-raw">
    <div class="ilc-head-raw__position">Место</div>
    <div class="ilc-head-raw__dnf">DNF</div>
    <div class="ilc-head-raw__pilot">Пилот</div>
    <div class="ilc-head-raw__qualifying">Стартовая позиция</div>
    <div class="ilc-head-raw__team">Команда</div>
    <div class="ilc-head-raw__best_lap">Лучшее время круга</div>
  </div>
</template>

<script>
export default {
  name: "HeadRaw",
};
</script>

<style lang="scss" scoped>
.ilc-head-raw {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  .ilc-head-raw__dnf {
    margin-left: 14px;
  }
  .ilc-head-raw__pilot {
    margin-left: 14px;
    width: 227px;
  }
  .ilc-head-raw__qualifying {
    width: 80px;
  }
  .ilc-head-raw__team {
    width: 227px;
  }
  .ilc-head-raw__best_lap {
    width: 227px;
    margin-left: 20px;
  }
}
</style>
