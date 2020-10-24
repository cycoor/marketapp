import {debounce} from "./utils";
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh)
    this.itemImgListener = () => {
      this.refresh()
    }
    this.$bus.$on('ItemImageLoad', this.itemImgListener)
    // console.log('我是混入的内容');
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    ListenerShowBackTop(position) {
      // 1.判断BackTop是否显示
      this.isBackTop = Math.abs(position.y) > 1000
    }
  }
}
