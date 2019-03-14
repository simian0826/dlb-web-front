<template>

    <v-layout row wrap class="pt-3 " :style="{height:!$vuetify.breakpoint.smAndUp ? '140px' : ''}" :class="!$vuetify.breakpoint.smAndUp ? ' m_header_layout' : 'pc_header_layout'">
      <v-flex sm8  offset-md2 >
        <v-layout row wrap >
        <v-flex sm4 class="hidden-xs-only " align-content-center>
          <img src="../assets/imgs/logo.png" style="margin-top: 30px;" width="80%" />
        </v-flex>
          <v-flex sm12 v-if="!$vuetify.breakpoint.smAndUp" class="mx-3" style="text-align: right;margin-top: 20px;font-size: 16px">
            <!--<img src="../assets/imgs/mobile/huodong.png" width="24px" height="24px" />-->
            <i class="el-icon-bell white--text" style="font-size: 20px;font-weight: bold"></i>
            <span class=" white--text">活动</span>
          </v-flex>
        <v-flex sm4 xs12 class="header_search_container"   :class="!$vuetify.breakpoint.smAndUp ? 'mx-3 search_container_mobile' : ''">

            <el-input placeholder="请输入内容" v-model="search" class="input-with-select" style="height:100%">
              <el-select v-model="location" slot="prepend" placeholder="地区" style="width: 100px;">
                <el-option v-for="item in states" :label="item.label" :value="item.value"></el-option>

              </el-select>
              <el-button slot="append" class="hidden-xs-only" style="background: #F44336;color:#fff;border-radius: 0;">搜索</el-button>
              <i slot="append" class="el-icon-search" v-if="!$vuetify.breakpoint.smAndUp"></i>
              <!--<div slot="append" class="hidden-md-and-down" style="background: #F44336;height: 100%;">搜索</div>-->
            </el-input>
        </v-flex>
        <v-flex sm4 class="hidden-xs-only">
          <img src="../assets/imgs/tel.png" style="margin-top: 40px;margin-left: 80px;" />
        </v-flex>
        </v-layout>
      </v-flex>
      <v-flex sm8  offset-md2 class="pc_nav" v-if="$vuetify.breakpoint.smAndUp">
        <v-layout row wrap  style="">
          <v-flex sm3 class="pc_nav_item red white--text" >
              全部分类
          </v-flex>
          <v-flex sm1 class="pc_nav_item" :class="$route.path === '/' ? 'red--text' : 'grey darken-1'">
              首页
          </v-flex>
          <v-flex sm8 class="pc_nav_item ">
            <v-layout row wrap>
              <v-flex sm2  >
                  供应商
              </v-flex>
              <v-flex sm2  >
                  项目信息
              </v-flex>
              <v-flex sm2  >
                  采购信息
              </v-flex>
              <v-flex sm2 >
                发布信息
              </v-flex>
              <v-flex sm2 >
                  新闻中心
              </v-flex>
              <v-flex sm2 >
                  关于我们
              </v-flex>
            </v-layout>
          </v-flex>



        </v-layout>
      </v-flex>
    </v-layout>

</template>

<script>
  export default {
    name: "Header",
    data(){
      return {
        search:"",
        location:"",
        states: [
          {
            label:'重庆',
            value:'1',
          },
          {
            label:'四川',
            value:'2',
          },
          {
            label:'上海',
            value:'3',
          },
          {
            label:'北京',
            value:'4',
          },
        ],
        releaseItems: [
          { title: '发布询价信息',path: '/1' },
          { title: '发布项目信息',path: '/2' },
          { title: '发布采购信息',path: '/3' },
          { title: '发布项目合作信息',path: '/4' },

        ]
      }
  },
  methods:{
    goToRelease(path){
      console.log(path);
    }
  },
  mounted(){
  }
  };
</script>

<style >
.el-input__inner{
  border: none !important;
  padding-left: 10px;
  background: white !important;

}
.el-input-group__append, .el-input-group__prepend{
  border: none !important;
  background: white !important;

}
.swiper-pagination-bullet {
  width: 30px !important;
  height: 3px !important;
  background: rgba(0,0,0,0.6);
  border-radius: 3px !important;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active{
  background: #F44336 !important;
}

.header_search_container {
  border: 2px solid #F44336;
  height:44px;
  margin-top: 40px;

}

.m_header_layout{
  background-image:url("../assets/imgs/mobile/background.png");
}
.pc_header_layout{
  background: #fff;
}

.search_container_mobile{
  margin-top: 10px;
}
.pc_nav{
  border-bottom: 1px solid #F44336;
  margin-top: 60px;
  height: 40px;
  text-align: center
}
.pc_nav_item{
  line-height: 40px;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
}
</style>

