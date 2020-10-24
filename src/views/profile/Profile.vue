<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <span slot="center">个人中心</span>
    </nav-bar>
    <user-info/>
    <count-info/>
    <message-info :list-data="lists"/>
    <message-info :list-data="shops"/>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import UserInfo from './childComps/UserInfo'
import CountInfo from './childComps/CountInfo'
import MessageInfo from './childComps/MessageInfo'

export default {
  name: "profile",
  components: {
    NavBar,
    UserInfo,
    CountInfo,
    MessageInfo
  },
  data() {
    return {
      lists: [
        {image: 'message.svg', message: '我的消息'},
        {image: 'pointer.svg', message: '积分商场'},
        {image: 'vip.svg', message: '会员卡'}
      ],
      shops:[
        {image: 'cart.svg', message: '我的购物车'},
        {image: 'shopping.svg', message: '下载购物APP'}
      ]
    }
  }
}
</script>

<style scoped>
.profile {
  background-color: #f2f2f2;
}

.profile-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
