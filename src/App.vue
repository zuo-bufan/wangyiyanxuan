<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
    <AppTabar/>
  </div>
</template>
<script>
  import AppTabar from "./components/AppTabar";

  export default {
    components:{AppTabar},
    data(){
      return {

      }
    },
    created() {
    }
  }
</script>
<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  body {
    // text-align: center;
    font-family: "黑体";
    font-size: 14px;
    color: #333;
    background-color: #efefef;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: normal;
  }
</style>
