<template>
  <div>
    <PcTopToolBar class="hidden-md-and-down"></PcTopToolBar>
    <Header></Header>
    <v-container >
      <v-layout row wrap>
        <router-view></router-view>
      </v-layout>
    </v-container>
    <PcFooter></PcFooter>

  </div>

</template>

<script>
  import PcTopToolBar from "../components/PcTopToolBar";
  import Header from "../components/Header";
  import PcFooter from "../components/PcFooter";
  export default {
    components: { PcFooter, Header, PcTopToolBar }
  };
</script>

<style scoped>
  .grid-cell{
    height:60px
  }
</style>
