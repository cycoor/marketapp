<template>
  <div class="count-info">
    <div class="count-item">
      <div class="number"><span>0.00</span>元</div>
      <div class="title">我的余额</div>
    </div>
    <div class="count-item">
      <div class="number"><span>0</span>个</div>
      <div class="title">我的优惠</div>
    </div>
    <div class="count-item">
      <div class="number"><span>0</span>分</div>
      <div class="title">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountInfo",
}
</script>

<style scoped>
.count-info {
  display: flex;
  height: 84px;
}

.count-item {
  flex: 1;
  padding: 20px;
  font-size: 13px;
  text-align: center;
  margin-right: 1px;
  background-color: #fff;
}

.number span {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}

.title {
  margin-top: 6px;
}
</style>
