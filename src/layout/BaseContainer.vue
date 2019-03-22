<template>
  <div>
    <PcTopToolBar class="hidden-sm-and-down"></PcTopToolBar>
    <Header></Header>
      <v-layout row wrap>
        <router-view></router-view>
      </v-layout>
    <PcFooter class="hidden-sm-and-down"></PcFooter>
    <MFooterBar v-if="!$vuetify.breakpoint.smAndUp"></MFooterBar>

  </div>

</template>

<script>
  import PcTopToolBar from "../components/PcTopToolBar";
  import Header from "../components/Header";
  import PcFooter from "../components/PcFooter";
  import MFooterBar from "../components/MFooterBar";
  export default {
    components: { MFooterBar, PcFooter, Header, PcTopToolBar },
    data(){
      return{

      }
    },
    mounted(){
    }
  };

</script>

<style scoped>

</style>
