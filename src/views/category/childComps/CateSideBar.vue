<template>
  <scroll :probe-type="3">
    <div class="cate-side-bar">
      <div class="cate-side-bar-item"
           v-for="(item,index) in categories"
           :class="{active:currentIndex === index}"
           :key="index"
           @click="sideClick(index)">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "CateSideBar",
    components: {
      Scroll
    },
    props: {
      categories: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      sideClick(index) {
        this.currentIndex = index
        this.$emit('sideClick', index)
      }
    }
  }
</script>

<style scoped>
  .cate-side-bar {
    width: 100px;
    background-color: #f6f6f6;
    height: 100%;
    text-align: center;
  }

  .cate-side-bar-item {
    height: 38px;
    line-height: 38px;
    font-size: 14px;
  }

  .active {
    color: #ff5777;
    background-color: #ffffff;
    border-left: 2px solid #ff5777;
    font-weight: 700;
  }
</style>
