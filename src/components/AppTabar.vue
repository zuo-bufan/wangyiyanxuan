<template>
  <div class="AppTabar">
      <van-tabbar
              route
              v-show="$route.meta===true"
              v-model="active"
              active-color="darkred"
              inactive-color="#000"
      >
          <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
          <van-tabbar-item replace to="/topic" icon="label-o">专题</van-tabbar-item>
          <van-tabbar-item replace to="/category" icon="apps-o">分类</van-tabbar-item>
          <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
          <van-tabbar-item replace to="/user" icon="friends-o">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
    export default {
        name: "AppTabar",
        data(){
            return{
                active:0,
            }
        }
    }
</script>

<style lang="less" scoped>
    .AppTabar{
        margin-top: 50px;
    }
</style>
