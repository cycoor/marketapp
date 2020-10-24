<template>
  <div class="cart-list">
    <scroll class="content" :probe-type="3">
      <cart-list-item v-for="(item,index) in list" :key="index" :item-info="item"/>
    </scroll>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'

  export default {
    name: "CartList",
    components: {
      Scroll,
      CartListItem
    },
    computed: {
      ...mapGetters({
        list: 'cartList'
      })
    }
  }
</script>

<style scoped>
  .cart-list {
    width: 100%;
    position: absolute;
    top: 44px;
    bottom: 99px;
  }

  .content {
    overflow: hidden;
    height: 100%;
  }
</style>
