<template>
  <v-layout row wrap >
    <v-flex xs12 class="footer_copyright">
      Copyright © 2019 版权所有 重庆庆渝科技有限公司
    </v-flex>
    <v-flex xs12 style="padding-bottom: 70px"></v-flex>
    <v-flex xs12 class="footer_nav" style="position: fixed;bottom: 0;z-index: 999">
      <div class="footer_nav_item":class="$route.path === '/' ? 'active' : ''" @click="navClick(1)">
        <!--<img src="../assets/imgs/mobile/1.png" height="30px">-->
        <v-icon :color="activeItem === 1 ? '#da251d' : '#d9d9d9'">home</v-icon><br>
        <span>首页</span>
      </div>

      <div class="footer_nav_item" :class="activeItem === 2 ? 'active' : ''" @click="navClick(2)">
        <v-icon :color="activeItem === 2 ? '#da251d' : '#d9d9d9'">apps</v-icon><br>
        <span>分类</span>
      </div>
      <div class="footer_nav_item" style="position: relative" @click="navClick(3)">
        <v-icon color="red"  class="add_icon" >add_circle</v-icon><br>
        <span>发布</span>
        <!--<div style="width: 80px;height: 80px;position: absolute;top:-30px;z-index:0;background: #fff;border: #d9d9d9"></div>-->
      </div>
      <div class="footer_nav_item" :class="activeItem === 4 ? 'active' : ''" @click="navClick(4)">
        <v-icon :color="activeItem === 4 ? '#da251d' : '#d9d9d9'">chat_bubble_outline</v-icon><br>
        <span>消息</span>
      </div>
      <div class="footer_nav_item" :class="activeItem === 5 ? 'active' : ''" @click="navClick(5)">
        <v-icon :color="activeItem === 5 ? '#da251d' : '#d9d9d9'">person</v-icon><br>
        <span>我的</span>
      </div>

    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "MFooterBar",
    data(){
      return {
        activeItem:1,
      }
    },
    methods:{
      navClick(index){
        let vm = this;
        vm.activeItem = index;
        let paths = ['/','/category','/message','/mine',];
        vm.$router.push(paths[index-1]);
      }
    }
  };
</script>

<style scoped>
.footer_copyright{
  height:120px;
  background: #f0f3ef;
  padding: 50px 0;
  text-align: center;
  font-size: 12px;
  color: #989898;
}

.footer_nav{
  width: 100%;
  background: #fff;
  height:70px;
  box-shadow: 0px -3px 3px #e1e1e1;
}
.footer_nav_item{
  float: left;
  width: 20%;
  text-align: center;
  padding-top: 16px;
  color: #d9d9d9 ;
}
.active{
  color: #da251d ;
}
.add_icon{
  position: relative;
  top:-50px;
  font-size: 70px;
  z-index:1;
  margin-bottom: -46px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 -4px 4px #ddd;
}
</style>
