<template>
    <div class="box">
        <!--轮播图-->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="darkred">
            <van-swipe-item v-for="item in gallery" :key="item.id">
                <img :src="item.img_url" width="100%" alt style="display: block">
            </van-swipe-item>
        </van-swipe>
        <!-- Tips 组件-->
        <Tips/>
        <!--商品信息-->
        <div class="goods_info">
            <h3>{{info.name}}</h3>
            <h4>{{info.goods_brief}}</h4>
            <p>{{info.retail_price | RMBFormat}}</p>
        </div>
        <!--展示弹出框-->
        <van-cell title="展示弹出框" @click="showPopup" is-link/>
        <!--商品参数-->
        <div class="good_parmas">
            <h2>商品参数</h2>
            <ul>
                <li v-for="(item,index) in attribute" :key="index">
                    <span>{{item.name}}</span>
                    <p>{{item.value}}</p>
                </li>
            </ul>
        </div>
        <!-- 图片 -->
        <div class="goods_desc" v-html="info.goods_desc"></div>
        <div class="title">
            <div class="line"></div>
            <div class="text">常见问题</div>
        </div>
        <!--issue-->
        <div class="issue">
            <ul>
                <li v-for="item in issue" :key="item.id">
                    <h3>{{item.question}}</h3>
                    <p>{{item.answer}}</p>
                </li>
            </ul>
        </div>
        <!--相关产品-->
        <div class="title">
            <div class="line"></div>
            <div class="text">相关产品</div>
        </div>
        <div class="DetailsProductList">
            <ProductList :newGoodsList="newGoodsList"/>
        </div>
        <!--popup-->
        <van-popup v-model="Popupshow" position="bottom" :style="{ height: '35%' }">
            <div class="sku">
                <div class="top">
                    <div class="top_l">
                        <img :src="info.list_pic_url" alt="">
                    </div>
                    <div class="top_r">
                        <h3>价格：{{info.retail_price | RMBFormat}}</h3>
                        <h4>库存：{{info.goods_number}}</h4>
                    </div>
                </div>
                <div class="bottom">
                    <p>数量:</p>
                    <van-stepper v-model="stepperNum"
                                 min="1"
                                 :max="info.goods_number"
                                 integer
                    />
                </div>
            </div>
        </van-popup>
        <!--商品导航-->
        <van-goods-action>
            <van-goods-action-icon
                    :icon="isCollected ? 'star' : 'star-o'"
                    :text="isCollected ? '已收藏' :'未收藏'"
                    :color="isCollected ? '#f01526' : '#666'"
                    @click="hdClickCollect"
            />
            <van-goods-action-icon
                    icon="cart-o"
                    text="购物车"
                    :badge="token ? goodsCount : 0"
                    @click="gotoCart"
            />
            <van-goods-action-button
                    type="warning"
                    text="加入购物车"
                    @click="addToCart"/>
            <van-goods-action-button
                    type="danger"
                    text="立即购买"/>
        </van-goods-action>
    </div>
</template>

<script>
    import Tips from "@/components/Tips.vue";
    import ProductList from "@/components/ProductList.vue";
    import {
        GoodsDetailApi,
        GoodsAboutApi,
        CartGoodsNumApi,
        CartAddApi,
    } from "@/request/api";

    export default {
        components: {Tips, ProductList},
        data() {
            return {
                token: localStorage.getItem("token"),
                cartTotal: {}, //购物车数据
                goodsCount: 0, //购物车所有商品总数量
                stepperNum: 1, //步近器的值
                // 展示弹出成 默认falses
                Popupshow: false,
                gallery: [],
                info: {},
                attribute: [],
                issue: [],
                productlist: [],
                newGoodsList: [],
                ProductList: [], //加入购物车接口 产品id，来自productList的第一个数组项中的id
                isCollected: false,
            };
        },
        methods: {
            showPopup() {
                this.Popupshow = true
            },
            hdClickCollect() {
            //    判断有没有登录 ，如果没有登录跳转到登录页 (/user)
                let token = localStorage.getItem('token');
                if (!token){
                    this.$toast.loading({
                        message:'请先登录',
                        forbidClick:true,
                    });
                    setTimeout(() => {
                        this.$router.push("/user");
                    },500);
                    return;
                }
                else {
                    this.isCollected = !this.isCollected;
                }
            },
            gotoCart() {

            },
            addToCart() {

            }
        },
        async created() {
            //    请求商品数据
            console.log(this.$route.params.id);
            await GoodsDetailApi({
                id: this.$route.params.id,
            }).then(res => {
                console.log(res.data)
                if (res.errno == 0) {
                    let {gallery, info, attribute, issue, productList} = res.data;
                    // 轮播图
                    this.gallery = gallery;
                    // 商品信息
                    this.info = info;
                    // 商品参数
                    this.attribute = attribute;
                    // 常见问题
                    this.issue = issue;
                    // 加入购物车接口 产品id，来自productList的第一个数组项中的id
                    this.ProductList = productList;
                }
            });
            GoodsAboutApi({
                id: this.$route.params.id,
            }).then(res => {
                // console.log(res.data)
                if (res.errno == 0) {
                    let {goodsList} = res.data;
                    this.newGoodsList = goodsList
                }
            })
        }
    };
</script>

<style lang="less" scoped>
    .box {
        .goods_info {
            background-color: #fff;
            text-align-last: center;
            padding: 20px 0;

            h3 {
                font-size: 18px;
                margin-bottom: 20px;
                font-weight: 500;
            }

            h4 {
                margin-bottom: 20px;
                font-size: 14px;
            }

            p {
                color: darkred;
                font-size: 12px;
            }
        }

        .van-cell {
            border-top: 1px solid #ccc;
        }

        .good_parmas {
            background-color: #fff;
            margin-top: 20px;
            padding: 20px;
            margin-bottom: 20px;

            ul {
                li {
                    margin-top: 10px;
                    display: flex;
                    height: 30px;
                    font-size: 12px;
                    background-color: #efefef;
                    border-radius: 10px;
                    justify-content: space-around;
                    align-items: center;

                    span {
                        width: 20%;
                        text-align: right;
                        color: #999;
                    }

                    p {
                        flex: 1;
                        padding-left: 10px;
                        /* 1. 文字显示不开，是否开启换行   nowrap：不换行*/
                        white-space: nowrap;
                        /* 2. 超出的隐藏 */
                        overflow: hidden;
                        /* 3. 文字溢出的时候，用省略号显示 */
                        text-overflow: ellipsis;
                    }
                }
            }
        }

        /* less和sass -预编译语言 -deep深度修改样式 */

        /deep/ .goods_desc {
            width: 100%;
            /* margin-bottom: 20px; */

            p {
                margin: 0;

                img {
                    display: block;
                    width: 100%;
                }
            }
        }

        /* 常见问题 */

        .title {
            height: 40px;
            background-color: #fff;
            width: 100%;
            position: relative;

            .line {
                width: 54%;
                height: 2px;
                background-color: #ccc;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                margin: auto;
            }

            .text {
                position: absolute;
                background-color: #fff;
                font-size: 16px;
                width: 28%;
                height: 30px;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                margin: auto;
                text-align: center;
                margin-top: 10px;
                /* align-items: center; */
            }
        }

        .issue {
            margin-bottom: 20px;
            padding: 10px 0;
            background-color: #fff;

            ul {
                margin-bottom: 20px;

                li {
                    padding: 0 20px;

                    h3 {
                        padding: 12px 0;
                        position: relative;
                        /* 小圆点 */

                        &::before {
                            content: "";
                            width: 4px;
                            height: 4px;
                            border-radius: 50%;
                            background: darkred;
                            position: absolute;
                            left: -10px;
                            top: 50%;
                            margin-top: -2px;
                        }
                    }

                    p {
                        font-size: 12px;
                        color: #999;
                    }
                }
            }
        }

        .DetailsProductList {
            background-color: #fff;
        }

        .van-goods-action {
            z-index: 9999;
        }

        .sku {
            padding: 20px;

            .top {
                display: flex;
                justify-content: space-between;

                img {
                    width: 100px;
                    margin-right: 10px;
                }

                .top_r {
                    flex: 1;
                    display: flex;
                    /* 竖 响应布局*/
                    flex-direction: column;
                    justify-content: space-around;
                }
            }

            .bottom {
                .van-stepper {
                    padding: 10px;
                }
            }
        }
    }
</style>
