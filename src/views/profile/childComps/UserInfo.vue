<template>
  <div class="user-info">
    <img class="user-info-pic" src="~assets/img/profile/avatar.svg" alt="">
    <div class="login">
      <div class="login-message">登录/注册</div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="user-info-sign"><img src="~assets/img/common/arrow-left.svg" alt=""></div>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
.user-info {
  display: flex;
  height: 73px;
  padding: 5px 10px;
  background-color: var(--color-tint);
}

.login{
  flex: 1;
  padding-left: 10px;
  color: #fff;
  line-height: 20px;
}

.login-message {
  height: 18px;
  font-size: 16px;
  margin-top: 10px;
}

.user-info-pic {
  width: 60px;
  height: 60px;
}

.phone {
  margin-top: 5px;
  font-size: 12px;
}

.phone img {
  width: 18px;
  height: 25px;
  vertical-align: middle;
}

.user-info-sign {
  width: 20px;
  height: 63px;
  line-height: 63px;
}

.user-info-sign img {
  width: 17px;
  height: 17px;
}
</style>
