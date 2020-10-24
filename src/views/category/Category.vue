<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="category-content">
      <cate-side-bar :categories="categories" @sideClick="sideClick" id="CateSideBar"/>
      <scroll class="content"
              ref="scroll"
              :probe-type="3"
              :data="[categoryData]"
              @scroll="ContentScroll">
        <cate-content :subcategories="showSubcategory" @LoadImg="LoadImg"/>
        <tab-control :titles="['综合','新品','潮流']"
                     class="tab-control"
                     @tabClick="tabClick"
                     ref="tabControl"/>
        <goods-list :goods="showCategoryDetail"/>
      </scroll>
    </div>
  </div>
</template>

<script>

  import CateSideBar from './childComps/CateSideBar'
  import CateContent from './childComps/CateContent'

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import {getClassify, getSubcategory, getSubcategoryDetail} from "network/category";

  export default {
    name: "Category",
    components: {
      CateSideBar,
      CateContent,
      NavBar,
      Scroll,
      TabControl,
      GoodsList
    },
    data() {
      return {
        categories: [],
        categoryData: {},
        productKey: -1,
        currentType: 'pop',
        tabOffsetTop: 0,
        isFixed: false
      }
    },
    created() {
      // 请求侧边栏数据
      this.getClassify()

      // 监听图片加载完成
      this.$bus.$on('imgLoad', () => {
        this.$refs.scroll.refresh()
      })
    },
    computed: {
      showSubcategory() {
        if (this.productKey === -1) return {}
        return this.categoryData[this.productKey].subcategories
      },
      showCategoryDetail() {
        if (this.productKey === -1) return []
        return this.categoryData[this.productKey].categoryDetail[this.currentType]
      }
    },
    methods: {
      /**
       * 事件监听操作
       */
      sideClick(index) {
        // 点击显示侧边栏对应的数据
        this.getSubcategory(index)
      },
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
      },
      LoadImg() {
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      ContentScroll(position) {
        this.isFixed = Math.abs(position.y) > this.tabOffsetTop
      },
      /**
       * 网络请求操作
       */
      getClassify() {
        getClassify().then(res => {
          this.categories = res.data.category.list
          // console.log(res);
          // 初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          // 请求第一个分类的数据
          this.getSubcategory(0)
        })
      },
      getSubcategory(index) {
        this.productKey = index;
        const mailKey = this.categories[index].maitKey;

        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          this.getSubcategoryDetail('pop')
          this.getSubcategoryDetail('new')
          this.getSubcategoryDetail('sell')
        })
      },
      getSubcategoryDetail(type) {
        const miniWallkey = this.categories[this.productKey].miniWallkey
        getSubcategoryDetail(miniWallkey, type).then(res => {
          this.categoryData[this.productKey].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      }
    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;
    position: relative;
  }

  .category-nav {
    background-color: var(--color-tint);
    color: #fff;
  }


  .category-content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    display: flex;
    flex-wrap: wrap;
  }

  .content {
    flex: 1;
    height: 100%;
    overflow: hidden;
  }

  #CateSideBar {
    overflow: hidden;
  }

  .tab-control {
    margin-top: 15px;
  }
</style>
