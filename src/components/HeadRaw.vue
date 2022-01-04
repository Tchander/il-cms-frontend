<template>
  <div class="ilc-head-raw">
    <div class="ilc-head-raw__position">Место</div>
    <div class="ilc-head-raw__dnf">DNF</div>
    <div class="ilc-head-raw__pilot">Пилот</div>
    <div class="ilc-head-raw__qualifying">Стартовая позиция</div>
    <div class="ilc-head-raw__team">Команда</div>
    <div class="ilc-head-raw__reserve_pilot">Резервный пилот</div>
    <div class="ilc-head-raw__best_lap">Лучшее время круга</div>
    <div class="ilc-head-raw__best">Лучший круг</div>
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
  width: 100%;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
  .ilc-head-raw__dnf {
    margin-left: 44px;
  }
  .ilc-head-raw__pilot {
    width: 227px;
    margin-left: 44px;
  }
  .ilc-head-raw__qualifying {
    width: 80px;
    margin-left: 30px;
  }
  .ilc-head-raw__team {
    width: 227px;
    margin-left: 30px;
  }
  .ilc-head-raw__reserve_pilot {
    width: 80px;
    margin-left: 20px;
  }
  .ilc-head-raw__best_lap {
    width: 227px;
    margin-left: 20px;
  }
  .ilc-head-raw__best {
    width: 80px;
    margin-left: 20px;
  }
}
</style>
