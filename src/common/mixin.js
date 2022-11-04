import BackTop from '@/components/content/backtop/BackTop.vue'

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    // contentScroll(position) {
    //   //判断backtop是否显示
    //   this.isShowBackTop = (-position.y) > 1000
    // }
    //我把这个写进去了 没有抽出来利用混入 因为这样用会覆盖detail里面的contentScroll方法
  }


}