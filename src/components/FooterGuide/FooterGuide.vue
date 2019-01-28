<template>
  <div class="footer_guide ">
    <span href="javascript:;" class="guide_item" :class="{on:'/home'===$route.path}" @click="goTo('/home')">
      <span class="fa_icon">
        <i class="fa fa-home"></i>
      </span>
      <span>外卖</span>
    </span>
    <span href="javascript:;" class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
      <span class="fa_icon">
        <i class="fa fa-search-minus"></i>
      </span>
      <span>搜索</span>
    </span>
    <span href="javascript:;" class="guide_item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
      <span class="fa_icon">
        <i class="fa fa-backward"></i>
      </span>
      <span>订单</span>
    </span>
    <span href="javascript:;" class="guide_item" :class="{on:'/mine'===$route.path}" @click="goTo('/mine')">
      <span class="fa_icon">
        <i class="fa fa-qq"></i>
      </span>
      <span>我的</span>
    </span>
  </div>
</template>

<script>
    export default {
        name: "FooterGuide",
        methods:{
          goTo(path){
            this.$router.replace(path)
          }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .fa
          font-size 22px
</style>
