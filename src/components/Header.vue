<template>

    <v-layout row wrap class="py-3 " :style="{height:!$vuetify.breakpoint.smAndUp ? '140px' : '160px'}" :class="!$vuetify.breakpoint.smAndUp ? ' header_layout' : ''">
      <v-flex sm8  offset-md2 >
        <v-layout row wrap >
        <v-flex sm4 class="hidden-xs-only " align-content-center>
          <img src="../assets/imgs/logo.png" style="margin-top: 30px;" width="80%" />
        </v-flex>

        <v-flex sm4 xs12 class="header_search_container"   :class="!$vuetify.breakpoint.smAndUp ? 'mx-3 search_container_mobile' : ''">
          <v-flex sm12 v-if="!$vuetify.breakpoint.smAndUp" style="margin-bottom: 10px;">
            <v-icon color="white">room</v-icon>
            
          </v-flex>
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
        ]
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
.header_search_container {
  border: 2px solid #F44336;
  height:44px;
  margin-top: 40px;
}

.header_layout{
  background: #F44336;
}

.search_container_mobile{
  margin-top: 30px;

}
</style>

