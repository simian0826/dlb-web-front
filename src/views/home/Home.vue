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
          <v-flex v-for="category in categories" sm12 class="mx-3" style="margin-top:14px;margin-bottom: 12px">
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
              <v-flex sm12 class=" px-1 text-sm-center shopping_menu_container_header" >
                <v-layout row wrap justify-space-around>
                  <v-flex sm12 class="shopping_menu_title mb-2">大喇叭集采</v-flex>
                  <v-flex sm12 class="shopping_menu_sub_title mb-2">一站式建材管家服务</v-flex>
                  <v-flex lg5 md12><v-btn outline  block color="red" ><v-icon class="mr-1">shopping_cart</v-icon>材料采集</v-btn>
                  </v-flex>
                  <v-flex lg5 md12><v-btn outline  block color="red" ><v-icon class="mr-1">ballot</v-icon>项目发布</v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 class="shopping_menu_foryou_item pt-3 pb-2"  >

                <img src="../../assets/imgs/xunjia.png"/>
                <div>为您询价</div>
              </v-flex>
              <v-flex sm6 class="shopping_menu_foryou_item pt-3 pb-2" >
                <img src="../../assets/imgs/kanjia.png"/>
                <div>为您砍价</div>
              </v-flex>
              <v-flex sm6 class="shopping_menu_foryou_item pt-3 pb-2"  >
                <img src="../../assets/imgs/xunjia.png"/>
                <div>为您询价</div>
              </v-flex>
              <v-flex sm6 class="shopping_menu_foryou_item pt-3 pb-2" >
                <img src="../../assets/imgs/kanjia.png"/>
                <div>为您砍价</div>
              </v-flex>
              <v-flex sm6 class="shopping_menu_safe_item"  >
                <v-layout row wrap>
                  <v-flex xl-1 lg-12 style="text-align: center">
                    <img src="../../assets/imgs/safe1.png" class="shopping_menu_safe_icon"/>
                  </v-flex>
                  <v-flex xl-11 lg-12 style="text-align: left">
                    平台保障
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 class="shopping_menu_safe_item "  >
                <v-layout row wrap>
                  <v-flex xl-1 lg-12><img src="../../assets/imgs/safe2.png" class="shopping_menu_safe_icon"/></v-flex>
                  <v-flex xl-11 lg-12 style="text-align: left">
                    资金安全
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 class="shopping_menu_safe_item  "  >
                <v-layout row wrap>
                  <v-flex xl-1 lg-12><img src="../../assets/imgs/safe3.png" class="shopping_menu_safe_icon"/></v-flex>
                  <v-flex xl-11 lg-12 style="text-align: left">
                    交易保障
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 class="shopping_menu_safe_item "  >
                <v-layout row wrap>
                  <v-flex xl-1 lg-12><img src="../../assets/imgs/safe4.png" class="shopping_menu_safe_icon"/></v-flex>
                  <v-flex xl-11 lg-12 style="text-align: left">
                    法律保障
                  </v-flex>
                </v-layout>

              </v-flex>
              <v-flex sm12 class="py-2 shopping_menu_footer">
                选择大喇叭就是省事、省心、还省钱！
              </v-flex>
            </v-layout>
          </v-flex>
        </v-flex>

      </v-layout>
    </v-flex><!-- menu container -->
    <v-flex sm8 offset-sm2 class="my-3" v-if="$vuetify.breakpoint.smAndUp">
      <v-layout row wrap>
        <v-flex sm4>
          <v-carousel
            hide-delimiters
            height="24px"
            hide-controls
            style="box-shadow: none"
            vertical
            cycle
          >
            <v-carousel-item
              v-for="item in industryNews"

            >
              <v-icon size="20" color="red">volume_down</v-icon><span class="red--text">【行业动态】</span>{{item}}
            </v-carousel-item>
          </v-carousel>

        </v-flex>
        <v-flex sm4>
          <v-carousel
            hide-delimiters
            height="24px"
            hide-controls
            style="box-shadow: none"
            vertical
            cycle
          >
            <v-carousel-item
              v-for="item in notifications"
            >
              <v-icon size="20" color="red">volume_down</v-icon><span class="red--text">【平台公告】</span>{{item}}
            </v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex sm4>
          <v-carousel
            hide-delimiters
            height="24px"
            hide-controls
            style="box-shadow: none"
            vertical
            cycle
          >
            <v-carousel-item
              v-for="item in programInfo"
            >
              <v-icon size="20" color="red">volume_down</v-icon><span class="red--text">【项目动态】</span>{{item}}
            </v-carousel-item>
          </v-carousel>
        </v-flex>

      </v-layout>
    </v-flex>
    <v-flex sm8 offset-sm2 class="my-3" v-if="$vuetify.breakpoint.smAndUp">

      <el-row type="flex">
        <el-col :sm="8" >
          <el-row type="flex" justify="start">
            <el-col :sm="23" class="white py-4 px-3" >
              <el-row style="border-bottom: 1px solid #eee;" class="pb-2">
                <el-col :sm="20" class="recommend_title">
                  公装商家推荐

                </el-col>
                <el-col :sm="4" class="recommend_more">

                  更多 +
                </el-col>
              </el-row>

              <el-col :xs="24" class="py-3 recommend_item_container" v-for="item in companyDecorationRecommend">
                <el-row >
                  <el-col :span="9">
                    <img :src="item.logo" style="border: 1px solid" width="90%" />
                  </el-col>
                  <el-col :span="15">
                    <el-row>
                      <el-col :span="24" class="mt-3 mb-2 recommend_item_title" :class="item.isVip ? 'red--text' : 'black--text'">{{item.name}}</el-col>
                      <el-col :span="12" class="recommend_item_sub_title">材料分类 : <span class="black--text">{{item.category}}</span></el-col>
                      <el-col :span="12" class="recommend_item_sub_title">主营品牌 : <span class="black--text">{{item.brand}}</span></el-col>
                    </el-row>
                  </el-col>

                </el-row>

              </el-col>

            </el-col>
          </el-row>
        </el-col>
        <el-col :sm="8">
          <el-row type="flex" justify="center">
            <el-col :sm="23" class="white py-4 px-3">
              <el-row style="border-bottom: 1px solid #eee;" class="pb-2">
                <el-col :sm="20" class="recommend_title">
                  家装商家推荐

                </el-col>
                <el-col :sm="4" class="recommend_more">

                  更多 +
                </el-col>
              </el-row>

              <el-col :xs="24" class="py-3 recommend_item_container" v-for="item in familyDecorationRecommend">
                <el-row >
                  <el-col :span="9">
                    <img :src="item.logo" style="border: 1px solid" width="90%" />
                  </el-col>
                  <el-col :span="15">
                    <el-row>
                      <el-col :span="24" class="mt-3 mb-2 recommend_item_title" :class="item.isVip ? 'red--text' : 'black--text'">{{item.name}}</el-col>
                      <el-col :span="12" class="recommend_item_sub_title">材料分类 : <span class="black--text">{{item.category}}</span></el-col>
                      <el-col :span="12" class="recommend_item_sub_title">主营品牌 : <span class="black--text">{{item.brand}}</span></el-col>
                    </el-row>
                  </el-col>

                </el-row>

              </el-col>
            </el-col>
          </el-row>
        </el-col>
        <el-col :sm="8">
          <el-row type="flex" justify="end">
            <el-col :sm="23" class="white pt-4 pb-3 px-3" >
              <el-row style="border-bottom: 1px solid #eee;" class="pb-2">
                <el-col :sm="20" class="recommend_title">
                  项目推荐
                </el-col>
                <el-col :sm="4" class="recommend_more">
                  更多 +
                </el-col>
              </el-row>

              <el-col :xs="24" class="pb-3 pt-3 recommend_item_container" v-for="(item, i) in projectRecommend">
                <el-row >
                  <el-col :span="3" class="pt-2" style="position: relative">
                    <v-icon style="position: absolute" large
                            :class="i == 0 ? 'red--text' : i == 1 ? 'orange--text' : i == 2 ? 'yellow--text'  :''">turned_in</v-icon>
                    <span class="recommend_project_item_index">{{i + 1}}</span>
                  </el-col>
                  <el-col :span="21">
                    <el-col :span="24" class="mt-2 mb-2 recommend_project_item_title" :class="item.isVip ? 'red--text' : 'black--text'">{{item.name}}</el-col>
                    <el-col :span="24" class="recommend_project_item_sub_title" >{{item.type}} | {{item.category}}</el-col>

                  </el-col>

                </el-row>

              </el-col>
            </el-col>
          </el-row>
        </el-col>
      </el-row>


    </v-flex>

    <v-flex sm8 offset-sm2 class="my-3" v-if="$vuetify.breakpoint.smAndUp">
      <el-row type="flex">
        <el-col :span="12" >
          <el-row type="flex" justify="start">
            <el-col :span="23" class="pa-4 white">
              <el-row>
                <el-col :span="24" class="red--text mb-3 info_block_header">
                  <div class="pb-2 pr-3 info_block_header_title" >询价信息</div>
                  <div class="info_block_header_more" >更多 + </div>
                </el-col>

                <el-col :span="24">
                  <el-row :gutter="16">
                    <el-col :span="12" v-for="i in 4" >
                      <div style="height:200px;border: 1px solid #a5a5a5 " class="mb-3"></div>
                    </el-col>
                  </el-row>

                </el-col>
              </el-row>

            </el-col>
          </el-row>

        </el-col>
        <el-col :span="12" class="white">
          <el-row type="flex" justify="end">
            <el-col :span="23" class="pa-4 white"></el-col>
          </el-row>
        </el-col>
      </el-row>

    </v-flex>

    <v-flex sm12 v-if="!$vuetify.breakpoint.smAndUp">
      <v-layout row wrap class="text-xs-center white">
        <v-flex xs3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav1.png" width="65%"/>
          <div>家装材料</div>
        </v-flex>
        <v-flex xs3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav2.png" width="65%"/>
          <div>公装材料</div>
        </v-flex>
        <v-flex xs3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav3.png" width="65%"/>
          <div>装饰设计</div>
        </v-flex>
        <v-flex xs3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav4.png" width="65%"/>
          <div>建筑材料</div>
        </v-flex>
        <v-flex xs3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav5.png" width="65%"/>
          <div>园林景观</div>
        </v-flex>
        <v-flex xs3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav6.png" width="65%"/>
          <div>机电设备</div>
        </v-flex>
        <v-flex xs3 class="m_nav_item pt-3 pb-1 mb-3" >
          <img src="../../assets/imgs/mobile/nav7.png" width="65%"/>
          <div>项目信息</div>
        </v-flex>
        <v-flex xs3 class="m_nav_item pt-3 pb-1 mb-3" >
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
    overflow-y: scroll;
  }
  .category_container::-webkit-scrollbar
  {
    width:6px;
    height:16px;
    background-color:#212121;
  }
  /*定义滚动条轨道
   内阴影+圆角*/
  .category_container::-webkit-scrollbar-track
  {
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);

    background-color:#212121;
  }
  /*定义滑块
   内阴影+圆角*/
  .category_container::-webkit-scrollbar-thumb
  {
    border-radius:3px;
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
    background-color:#212121;
  }
  .category_title{
    font-size: 16px;
    padding-bottom: 3px
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
    overflow-y: hidden;



  }
  .shopping_menu_container::-webkit-scrollbar
  {
    width:6px;
    height:16px;
    background-color:#fff;
  }
  /*定义滚动条轨道
   内阴影+圆角*/
  .shopping_menu_container::-webkit-scrollbar-track
  {

    background-color:#fff;
  }
  /*定义滑块
   内阴影+圆角*/
  .shopping_menu_container::-webkit-scrollbar-thumb
  {
    border-radius:3px;
    background-color:#fff;
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
    padding: 18px 0;
  }
  .shopping_menu_safe_icon{
    position: relative;
    top: 2px;
    left:5px;
    /*margin-right: 6px*/
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
    line-height: 25px;
  }
  .recommend_title{
    font-size:16px;
    font-weight: bold;
    color:#595959;
  }
  .recommend_more{
    font-size: 10px;
    color: #999;
    letter-spacing: 1px;
  }
  .recommend_item_title{
    font-size: 15px;
  }
  .recommend_item_sub_title{
    font-size: 12px;
    color:#a5a5a5;
  }
  .recommend_item_container{
    border-bottom: 1px dashed #eee;
  }
  .recommend_project_item_index{
    position: absolute;
    left: 14px;
    top:14px;
    font-weight: bold;
    color: white
  }
  .recommend_project_item_title{
    font-size: 15px;
  }
  .recommend_project_item_sub_title{
    font-size: 12px;
    color: #a5a5a5;

  }
  .info_block_header{
    font-size: 18px;
    border-bottom: 1px solid #eee
  }
  .info_block_header_title{
    border-bottom: 2px solid red;
    display: inline-block;
  }
  .info_block_header_more{
    display: inline-block;
    float: right;
    font-size: 12px;
    color: #999
  }
</style>
