<template>
    <div>
        <!-- 弹出popup start -->
        <!-- 黑色遮罩层 -->
        <!-- 点击搜索实现淡入淡出 -->
        <transition name="fade">
            <!-- 去到popup页面才显示黑色遮罩层 -->
            <div class="mymodal" v-show="$route.fullPath == '/home/popup'"></div>
        </transition>

        <!-- 在父极路由显示子集路由组件，要使用 <router-view /> -->
        <transition name="slide">
            <router-view/>
        </transition> 
        <!-- 弹出popup end -->
        <transition name="myfade">
            <div class="box" v-show="$route.fullPath == '/home'">

                <!-- 搜索框 -->
                <!--  <van-search
                          @click="changeshowPopup"
                          v-model="inputValue"
                          shape="round"
                          readonly
                          placeholder="请输入搜索关键词"
                  />-->
                <!-- 搜索框 组件化-->
                <Search/>

                <!-- 轮播图 -->
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="skyblue">
                    <van-swipe-item v-for="(item, index) in banner" :key="index">
                        <!-- v-lazy 替换:src懒加载 -->
                        <img v-lazy="item.image_url" alt width="100%">
                    </van-swipe-item>
                </van-swipe>

                <!-- 宫格 -->
                <van-grid :column-num="5">
                    <van-grid-item
                            @click="goChannel(item.id)"
                            v-for="item in channel"
                            :key="item.id"
                            :icon="item.icon_url"
                            :text="item.name"
                    />
                </van-grid>

                <!-- 品牌制造商直供 -->
                <div class="brand">
                    <div class="home_title">品牌制造商直供</div>
                    <ul>
                        <li
                                v-for="item in brandList"
                                :key="item.id"
                                @click="goBrand(item.id)"
                        >
                            <img :src="item.pic_url" alt="">
                            <h4>{{item.name}}</h4>
                            <p>{{item.floor_price | RMBFormat}}</p>
                        </li>
                    </ul>
                </div>

                <!--  周一周四·新品首发-->
                <!--<div class="newproduct">
                  <div class="home_title">周一周四·新品首发</div>
                  <ul class="product_list">
                    <li v-for="item in newGoodsList" :key="item.id">
                      <img :src="item.list_pic_url" alt="">
                      <h4>{{item.name}}</h4>
                      <p>{{ item.retail_price | RMBFormat}}</p>
                    </li>
                  </ul>
                </div>-->

                <!--  周一周四·新品首发 组件化开发-->
                <div class="newproduct">
                    <div class="home_title">周一周四·新品首发</div>
                    <ProductList :newGoodsList="newGoodsList"/>
                </div>


                <!-- 人气推荐 -->
                <div class="hotgoodslist">
                    <div class="home_title">人气推荐</div>
                    <ul>
                        <li v-for="item in hotGoodsList" :key="item.id">
                            <div class="left">
                                <img :src="item.list_pic_url" alt="">
                            </div>
                            <div class="right">
                                <h3>{{item.name}}</h3>
                                <h4>{{item.goods_brief}}</h4>
                                <p>{{item.retail_price | RMBFormat}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--       专题精选-->
                <div class="topic">
                    <div class="home_title">专题精选</div>
                    <van-swipe :loop="false" :show-indicators="indicatorsBool">
                        <van-swipe-item v-for="item in topicList" :key="item.id">
                            <img :src="item.scene_pic_url" alt="">
                            <p class="p1">
                                {{item.title}}
                                <span>{{item.price_info | RMBFormat}}</span>
                            </p>
                            <p class="p2">{{item.subtitle}}</p>
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <!--       居家-->
                <!-- <div class="newproduct" v-for="item in categoryList" :key="item.id">
                   <div class="home_title">{{item.name}}</div>
                   <ul class="product_list">
                        <li v-for="item2 in item.goodsList" :key="item2.id">
                          <img v-lazy="item2.list_pic_url">
                          <h4>{{item2.name}}</h4>
                          <p>{{item2.retail_price | RMBFormat}}</p>
                        </li>
                      </ul>
                 </div>-->
                <!--       居家 组件化-->
                <HomeCategoryList :categoryList="categoryList"/>
            </div>
        </transition>
    </div>
</template>

<script>
    import {HomeApi} from "@/request/api";
    import Search from "@/components/Search";
    import ProductList from "@/components/ProductList";
    import HomeCategoryList from "@/components/HomeCategoryList";

    export default {
        components: {
            Search,
            ProductList,
            HomeCategoryList
        },
        data() {
            return {
                // 是否显示指示器
                indicatorsBool: false,
                showPopup: false,
                searchVal: "", //搜索框
                banner: [], // 轮播图
                channel: [], //宫格
                brandList: [], //品牌制造商直供
                newGoodsList: [], // 新品首发
                hotGoodsList: [], //人气推荐
                topicList: [], //专题精选
                categoryList: [], //居家
            };
        },
        methods: {
            // 跳转品牌详情页
            goBrand(id) {
                this.$router.push("/brand?id=" + id);
            },
            // 跳转到Channel页面
            goChannel(id) {
                // this.$router.push("/channel/" + id);
                this.$router.push("/channel?id=" + id);
            },
        },
        created() {
            HomeApi().then(
                res => {
                    if (res.errno == 0) {
                        let {banner, channel, brandList, newGoodsList, hotGoodsList, topicList, categoryList} = res.data;
                        this.banner = banner;
                        this.channel = channel;
                        this.brandList = brandList;
                        this.newGoodsList = newGoodsList;
                        this.hotGoodsList = hotGoodsList;
                        this.topicList = topicList;
                        this.categoryList = categoryList;
                        console.log(res.data);
                    }
                },
                err => {
                    return Promise.reject(err);
                }
            );
        }
    };
</script>
<style lang="less" scoped>
    .box {
        background-color: #efefef;
        text-align: center;
        /* position: fixed; */
    }

    /* popup start */
    /* popup滑入滑出效果 */
    .slide-enter,
    .slide-leave-to {
        right: -100%;
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: right 0.5s linear;
    }

    .slide-enter-to,
    .slide-leave {
        right: 0;
    }

    /* 淡入的起始状态与淡出的最终状态  opacity: 0 */
    /* 淡入的最终状态与淡出的起始状态  opacity: 1 */
    /* 黑色遮罩层 */
    .mymodal {
        width: 100%;
        height: 100%;
        background-color: #000;
        position: absolute;
        z-index: 998;
        opacity: 0.3;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s linear;
    }

    .fade-enter-to,
    .fade-leave {
        opacity: 1;
    }

    /* popup  end */

    /* home myfade strat */
    .myfade-enter,
    .myfade-leave-to {
        opacity: 0;
    }

    .myfade-enter-active,
    .myfade-leave-active {
        transition: opacity 1s linear;
    }

    .myfade-enter-to,
    .myfade-leave {
        opacity: 1;
    }

    /* home fade end */

    /* 轮播图 */
    .my-swipe {
        height: calc(400 * 100vw / 750); //懒加载的图片不会掉下去 轮播图撑，图片宽750，高400，视图显示是100vm
    }

    /* 品牌制造商直供 */
    .brand {
        background-color: #fff;
        margin-top: 20px;
        margin-bottom: 20px;

        .home_title {
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            text-align: center;
        }

        ul {
            display: flex;
            justify-content: space-between;
            /* 换行，第一行在上方。 */
            flex-wrap: wrap;

            li {
                width: 49%;
                /* 子绝父相 */
                position: relative;

                img {
                    width: 100%;
                }

                h4 {
                    position: absolute;
                    top: 20px;
                    left: 10px;
                }

                p {
                    color: #8b0000;
                    position: absolute;
                    top: 40px;
                    left: 10px;
                }
            }
        }
    }

    /* 周一周四·新品首发 */
    .newproduct {
        background-color: #fff;

        .home_title {
            font-size: 20px;
            height: 50px;
            line-height: 50px;
        }

        .product_list {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;

            li {
                padding-bottom: 12px;
                width: 49%;

                img {
                    width: 100%;
                }

                p {
                    color: #8b0000;
                }
            }
        }
    }

    /* 人气推荐 */
    .hotgoodslist {
        background-color: #fff;
        margin-top: 80px;
        margin-bottom: 20px;

        .home_title {
            height: 50px;
            line-height: 50px;
            font-size: 20px;
        }

        ul {
            li {
                padding: 12px;
                display: flex;

                .left {
                    width: 30%;

                    img {
                        width: 100%;
                    }
                }

                .right {
                    width: 69%;
                    text-align: left;
                    padding-left: 10px;

                    h3 {
                        max-height: 32px;
                        font-weight: 500;
                        line-height: 29px;
                        font-size: 18px;
                    }

                    h4 {
                        margin: 14px 0;
                    }

                    p {
                        line-height: 20px;
                        color: #8d0000;
                    }
                }
            }
        }
    }

    /* 专题精选 */
    .topic {
        margin-top: 20px;
        margin-bottom: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        background-color: #fff;

        .home_title {
            font-size: 20px;
            height: 50px;
            line-height: 50px;
        }

        .van-swipe {
            text-align: left;

            .van-swipe-item {
                margin-right: 15px;
                padding-left: 10px;

                img {
                    width: 100%;
                    height: 200px;
                }

                .p1 {
                    line-height: 40px;
                    font-size: 16px;
                    /* text-overflow: ellipsis; 省略符号来代表被修剪的文本。 */
                    text-overflow: ellipsis;
                    overflow: hidden;
                    /* white-space: nowrap 不换行 */
                    white-space: nowrap;
                    /* width: 90%; */

                    span {
                        color: #8b0000;
                    }
                }

                .p2 {
                    /* 1. 文字显示不开，是否开启换行   nowrap：不换行*/
                    white-space: nowrap;
                    /* 2. 超出的隐藏 */
                    overflow: hidden;
                    /* 3. 文字溢出的时候，用省略号显示 */
                    text-overflow: ellipsis;
                    width: 90%;
                    /* padding: 10px */
                    /* margin-left: 30px; */
                }
            }
        }
    }
</style>
