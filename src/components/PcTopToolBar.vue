<template>
    <v-layout row wrap class="header pa-2 " >
      <v-flex md7 offset-md2>
        欢迎来到大喇叭集采网站！<span style="display: inline-block" class="px-2">|</span>
        <a href="#" class="pr-3 black--text">帮助</a>
        <a href="#" class="pr-3 red--text">登录</a>
        <a href="#" class="pr-3 black--text">免费注册</a>
        <a href="#" class="pr-3 grey--text">忘记密码？</a>
        <a href="#" class="pr-3 black--text">个人中心</a>
      </v-flex>
      <v-flex md3 >
        <a href="#" class="pr-3 grey--text">首页</a>
        <a href="#" class="pr-3 grey--text">我的收藏</a>
        <a href="#" class="pr-3 grey--text">联系客服</a>
        <a href="#" class="pr-3 grey--text">网站导航</a>
      </v-flex>
    </v-layout>

</template>

<script>
  export default {
    name: "PcTopToolBar"
  };
</script>

<style scoped>
.header{
  background: #EEEEEE;
  height: 40px;
}
</style>
