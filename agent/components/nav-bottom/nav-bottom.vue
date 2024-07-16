<template>
  <!-- 底部导航栏 -->
  <view>
    <view>
      <cmd-bottom-nav background-color="#fff"
                      font-color="#6a6a6a" active-font-color="#515ffb" :current="current" :list="tabBarList" text-auto
                      @click="router">
      </cmd-bottom-nav>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabBarList: [
        {
          "pagePath": "pages/order/lotteryOrder",
          "text": "用户",
          "src": "../../static/tabbar/users.png",
          "srcSelect": "../../static/tabbar/users_active.png"
        },
        // {
        //   "pagePath": "pages/user/users",
        //   "text": "用户",
        //   "src": "../../static/tabbar/users.png",
        //   "srcSelect": "../../static/tabbar/users_active.png"
        // },
        // {
        //   "pagePath": "pages/counts/statisticsMain",
        //   "text": "统计",
        //   "src": "../../static/tabbar/counts.png",
        //   "srcSelect": "../../static/tabbar/counts_active.png"
        // },
        {
          "pagePath": "pages/personal/personal",
          "text": "管理",
          "src": "../../static/tabbar/admin.png",
          "srcSelect": "../../static/tabbar/admin_active.png"
        }],
    }
  },
  props: {
    current: {
      type: Number,
      default: 0
    }
  },
  methods: {
    router(e) {
      uni.navigateTo({
        url: e.item.pagePath
      })
    }
  }
}
</script>

<style>
</style>
