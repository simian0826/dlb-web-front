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

</style>
