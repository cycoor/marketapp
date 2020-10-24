<template>
  <div class="message-info">
    <div class="message-item" v-for="(item,index) in ListData" :key="index">
      <img :src="iconURL(item)" alt="">
      <span>{{ item.message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageInfo",
  props: {
    ListData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    iconURL(item) {
      return require('assets/img/profile/' + item.image)
    }
  }
}
</script>

<style scoped>
.message-info {
  margin-top: 15px;
}

.message-item {
  height: 45px;
  line-height: 45px;
  font-size: 15px;
  color: #000;
  margin-bottom: 1px;
  background-color: #fff;
}

.message-item img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin: 0 15px;
}
</style>
