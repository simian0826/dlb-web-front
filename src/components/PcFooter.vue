<template>
  <v-layout row wrap class="footer">
    <v-flex sm8 offset-md2 >
      <v-layout row wrap class="footer_top_container">
        <v-flex sm3>
          <v-layout row wrap>
            <v-flex sm2>
              <img src="../assets/imgs/foot1.png"/>
            </v-flex>
            <v-flex sm10>
              <v-layout row wrap class="footer_top_item_text_container">
                <v-flex sm12 class="white--text footer_top_item_text">
                  品类齐全快速响应
                </v-flex>
                <v-flex sm12 class="grey--text footer_top_item_subtext">
                  海量建材数据库，让选建材更轻松
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex sm3>
          <v-layout row wrap>
            <v-flex sm2>
              <img src="../assets/imgs/foot2.png"/>
            </v-flex>
            <v-flex sm10>
              <v-layout row wrap class="footer_top_item_text_container">
                <v-flex sm12 class="white--text footer_top_item_text">
                  一对一交易服务
                </v-flex>
                <v-flex sm12 class="grey--text footer_top_item_subtext">
                  随时随地为您服务，让业务更高效
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex sm3>
          <v-layout row wrap>
            <v-flex sm2>
              <img src="../assets/imgs/foot3.png"/>
            </v-flex>
            <v-flex sm10>
              <v-layout row wrap class="footer_top_item_text_container">
                <v-flex sm12 class="white--text footer_top_item_text">
                  安全交易有保障
                </v-flex>
                <v-flex sm12 class="grey--text footer_top_item_subtext">
                  大品牌大企业为依托，让资金更安全
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex sm3>
          <v-layout row wrap>
            <v-flex sm2>
              <img src="../assets/imgs/foot4.png"/>
            </v-flex>
            <v-flex sm10>
              <v-layout row wrap class="footer_top_item_text_container">
                <v-flex sm12 class="white--text footer_top_item_text">
                  专家服务团队更放心
                </v-flex>
                <v-flex sm12 class="grey--text footer_top_item_subtext">
                  专业服务更细致，让风险无处遁形
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>


      </v-layout>
      <v-flex sm12 style="border-bottom: 1px solid #1a1a1a;box-shadow: 0px 0px 0.1px #f1f1f1;">
      </v-flex>
      <v-layout row wrap class="footer_center_container">
        <v-flex sm8 >
          <v-layout row wrap>
            <v-flex sm8>
              <v-layout row wrap>
                <v-flex sm4 >
                  <div class="footer_center_item_title">关于我们</div>
                  <a href="#" class="footer_center_item">公司介绍</a><br>
                  <a href="#" class="footer_center_item">联系我们</a>
                </v-flex>
                <v-flex sm4 >
                  <div class="footer_center_item_title">用户指南</div>
                  <a href="#" class="footer_center_item">免责声明</a><br>
                  <a href="#" class="footer_center_item">争议解决</a><br>
                  <a href="#" class="footer_center_item">平台规则</a><br>
                  <a href="#" class="footer_center_item">版权声明</a>
                </v-flex>
                <v-flex sm4 >
                  <div class="footer_center_item_title">帮助中心</div>
                  <a href="#" class="footer_center_item">常见问题</a><br>
                  <a href="#" class="footer_center_item">文档下载</a><br>
                  <a href="#" class="footer_center_item">招商必看</a><br>
                  <a href="#" class="footer_center_item">采购必看</a>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex sm4 >
              <div class="footer_center_item_title">服务与支持</div>
              <div class="footer_center_item">服务热线：17316789980</div><br>
              <div class="footer_center_item">服务时间：9:00-18:00</div><br>
              <div class="footer_center_item">服务邮箱：59455428@qq.com</div><br>
              <div class="footer_center_item">地址：重庆市九龙坡区华宇·时代星都6号楼3-13</div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex sm3 offset-sm1>
          <v-layout row wrap>
            <v-flex sm5 offset-sm1 class="footer_center_qrcode">
              <img src="../assets/imgs/official_account.jpg" width="100%"/>
              <div class="mt-2">公众号</div>
            </v-flex>
            <v-flex sm5 offset-sm1 class="footer_center_qrcode">
              <img src="../assets/imgs/miniprogram.jpg" width="100%"/>
              <div class="mt-2">小程序</div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

    </v-flex>
    <v-flex sm12 class="footer_bottom_container">
        Copyright © 2019 版权所有 重庆庆渝科技有限公司
    </v-flex>

  </v-layout>

</template>

<script>
  export default {
    name: "PcFooter"
  };
</script>

<style scoped>
.footer{
  height: 470px;
  background: #333;
}
.footer_top_container{
  padding: 36px 0;
}
.footer_top_item_text_container{
  padding-left:10px
}
.footer_top_item_text{
  font-size:16px;
  padding-bottom: 10px
}
.footer_top_item_subtext{
  font-size:12px;
}

.footer_center_container{
  padding: 44px 0 64px 0;
}
.footer_center_item_title{
  font-size: 16px;
  color: white;
  font-weight: bold;
  letter-spacing:2px;
  margin-bottom: 20px;
}

.footer_center_item{
  color: #888;
  font-size: 13px;
  margin-bottom: 18px;
  display: inline-block;
}
.footer_center_qrcode{
  text-align: center;
  color: #888;
  font-size: 13px;
}
.footer_bottom_container{
  padding: 27px;
  background: #2b2b2b;
  text-align: center;
  color: #888;
  font-size: 13px;
}
</style>
