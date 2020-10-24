<template>
  <div class="cate-content">
    <div class="cate-content-item" v-for="item in subcategories.list">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="LoadImg">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CateContent",
    props: {
      subcategories: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      LoadImg() {
        this.$emit('LoadImg')
      }
    }
  }
</script>

<style scoped>
  .cate-content {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
  }

  .cate-content-item {
    width: 33%;
    height: 100px;
    padding: 5px 10px;
    text-align: center;
  }

  .cate-content-item a {
    display: block;
    width: 100%;
  }

  .cate-content-item a img {
    width: 60px;
    height: 60px;
    margin-top: 5px;
  }

  .cate-content-item a span {
    display: block;
    font-size: 12px;
    padding-top: 15px;
  }
</style>
