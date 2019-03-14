<template>
<div style="width: 100%;position: relative" >
  <div v-if="$vuetify.breakpoint.smAndUp" style="width: 100%;position: absolute;height: 500px;z-index: 1">
    <v-carousel cycle>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        @click.stop="test(i)"
      ></v-carousel-item>
    </v-carousel>
  </div><!-- carousel -->
  <v-layout row wrap>
    <v-flex sm8 offset-sm2  class="menu_container" v-if="$vuetify.breakpoint.smAndUp">
      <v-layout fill-height row>
        <v-flex sm3 fill-height class="grey darken-4 py-2 category_container">
          <v-flex v-for="category in categories" sm12 class="my-2 mx-4">
            <v-layout>
              <v-flex sm2 class="pl-3"><img :src="category.icon" class="category_icon" ></v-flex>
              <v-flex sm10 wrap>
                <v-flex sm12  class="category_title" >
                  <a class="white--text">{{category.title}}</a>
                </v-flex>
                <v-flex sm12 wrap>
                  <a class="category_sub_title"  v-for="subCategory in category.children">{{subCategory.title}}</a>
                </v-flex>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-flex>
        <v-flex sm8 offset-sm1  fill-height >
          <v-flex sm4 offset-sm8 fill-height class="shopping_menu_container text-sm-center" >
            <v-layout row wrap>
              <v-flex sm12 class=" px-2 text-sm-center shopping_menu_container_header" >
                <v-layout row wrap justify-space-around>
                  <v-flex sm12 class="shopping_menu_title mb-2">大喇叭集采</v-flex>
                  <v-flex sm12 class="shopping_menu_sub_title mb-2">一站式建材管家服务</v-flex>
                  <v-flex sm5><v-btn outline  block color="red" ><v-icon class="mr-1">shopping_cart</v-icon>材料采集</v-btn>
                  </v-flex>
                  <v-flex sm5><v-btn outline  block color="red" ><v-icon class="mr-1">ballot</v-icon>项目发布</v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 class="shopping_menu_foryou_item pt-3 pb-1"  >
                <img src="../../assets/imgs/xunjia.png"/>
                <div>为您询价</div>
              </v-flex>
              <v-flex sm6 class="shopping_menu_foryou_item pt-3 pb-1" >
                <img src="../../assets/imgs/kanjia.png"/>
                <div>为您砍价</div>
              </v-flex>
              <v-flex sm6 class="shopping_menu_foryou_item pt-3 pb-1"  >
                <img src="../../assets/imgs/xunjia.png"/>
                <div>为您询价</div>
              </v-flex>
              <v-flex sm6 class="shopping_menu_foryou_item pt-3 pb-1" >
                <img src="../../assets/imgs/kanjia.png"/>
                <div>为您砍价</div>
              </v-flex>
              <v-flex sm6 class="shopping_menu_safe_item"  >
                <img src="../../assets/imgs/safe1.png" class="shopping_menu_safe_icon"/>
                平台保障
              </v-flex>
              <v-flex sm6 class="shopping_menu_safe_item "  >
                <img src="../../assets/imgs/safe2.png" class="shopping_menu_safe_icon"/>
                资金安全
              </v-flex>
              <v-flex sm6 class="shopping_menu_safe_item  "  >
                <img src="../../assets/imgs/safe3.png" class="shopping_menu_safe_icon"/>
                交易保障
              </v-flex>
              <v-flex sm6 class="shopping_menu_safe_item "  >
                <img src="../../assets/imgs/safe4.png" class="shopping_menu_safe_icon"/>
                法律保障
              </v-flex>
              <v-flex sm12 class="py-2 shopping_menu_footer">
                选择大喇叭就是省事、省心、还省钱！
              </v-flex>
            </v-layout>
          </v-flex>
        </v-flex>

      </v-layout>
    </v-flex><!-- menu container -->
    <v-flex sm8 offset-sm2 class="my-3">
      <v-layout row wrap>
        <v-flex sm4>【平台动态】双十一就是一盘大棋，看懂者寥寥无几！（深度）</v-flex>
        <v-flex sm4>【平台动态】双十一就是一盘大棋，看懂者寥寥无几！（深度）</v-flex>
        <v-flex sm4>【平台动态】双十一就是一盘大棋，看懂者寥寥无几！（深度）</v-flex>
      </v-layout>
    </v-flex>

    <v-flex sm12 v-if="!$vuetify.breakpoint.smAndUp">
      <v-layout row wrap class="text-xs-center white">
        <v-flex sm3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav1.png" width="65%"/>
          <div>家装材料</div>
        </v-flex>
        <v-flex sm3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav2.png" width="65%"/>
          <div>公装材料</div>
        </v-flex>
        <v-flex sm3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav3.png" width="65%"/>
          <div>装饰设计</div>
        </v-flex>
        <v-flex sm3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav4.png" width="65%"/>
          <div>建筑材料</div>
        </v-flex>
        <v-flex sm3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav5.png" width="65%"/>
          <div>园林景观</div>
        </v-flex>
        <v-flex sm3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav6.png" width="65%"/>
          <div>机电设备</div>
        </v-flex>
        <v-flex sm3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav7.png" width="65%"/>
          <div>项目信息</div>
        </v-flex>
        <v-flex sm3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav8.png" width="65%"/>
          <div>关于我们</div>
        </v-flex>
      </v-layout><!-- m nav -->

    </v-flex>
    <v-flex sm12 v-if="!$vuetify.breakpoint.smAndUp" style="margin-top: 20px;">
      <div class="swiper-container" style="height:200px" >
        <div class="swiper-wrapper">
          <div v-for="item in items" class="swiper-slide"><img :src="item.src" width="100%" height="100%"/></div>

        </div>
        <div class="swiper-pagination"></div>
      </div>

    </v-flex><!-- m swiper -->


  </v-layout><!-- content layout -->

</div>
</template>

<script src="./home.js">

</script>

<style scoped>
  .menu_container{
    height: 500px;
    position: relative;
  }
  .category_container{
    z-index: 2;
  }
  .category_title{
    font-size: 16px;
    padding-bottom: 4px
  }
  .category_icon{
    margin-top: 4px;
  }
  .category_sub_title{
    display: inline-block;
    padding-right:18px;
    font-size: 14px;
    color: #bfbfbf
  }
  .shopping_menu_container{
    position: relative;
    background: rgba(255,255,255,0.8);
    z-index: 2;
  }
  .shopping_menu_container_header{
    padding-top: 25px;
    padding-bottom: 15px;
  }
  .shopping_menu_title{
    font-size: 20px;
    font-weight: bold;
    color: #444;
  }
  .shopping_menu_sub_title{
    font-size: 20px;
    font-weight: bold;
    color: #F44336;
  }
  .shopping_menu_foryou_item{
    color:#8f8f8f;
    font-size: 16px;
    background: white;
    border: #ededed 1px solid
  }
  .shopping_menu_safe_item{
    color:#8f8f8f;
    font-size: 16px;
    background: white;
    border: #ededed 1px solid;
    padding: 14px 0;
  }
  .shopping_menu_safe_icon{
    position: relative;
    top: 4px;
    margin-right: 6px
  }
  .shopping_menu_footer{
    color: #999;
    background: white;
  }

  .m_nav_item{
    color:#111;
    font-size: 16px;
    background: white;
    font-family: '微软雅黑';
  }


</style>
