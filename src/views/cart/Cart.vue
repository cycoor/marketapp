<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list/>
    <cart-button-bar/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartButtonBar from './childComps/CartButtonBar'

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartButtonBar
    },
    computed: {
      // 两种语法
      // ...mapGetters(['cartLength','cartList'])
      ...mapGetters({
        length: 'cartLength'
      })
    }
  }
</script>

<style scoped>
  .cart {
    position: relative;
    height: 100vh;
  }

  .nav-bar {
    color: #fff;
    background-color: var(--color-high-text);
    font-weight: 700;
    /*position: fixed;*/
    /*top:0;*/
    /*left:0;*/
    /*right: 0;*/
  }
</style>
