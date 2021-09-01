<template>
    <div>
        <Tips/>
        <div class="card">
            <van-checkbox-group v-model="result">
                <van-checkbox
                        @click="checkboxClick(item)"
                        :disabled="editStatus"
                        :label-disabled="editStatus"
                        v-for="item in cartList"
                        :key="item.id"
                        :name="item.product_id"
                >
                    <van-swipe-cell>
                        <van-card
                                :num="item.number"
                                :price="item.retail_price.toFixed(2)"
                                :title="item.goods_name"
                                :thumb="item.list_pic_url"
                        >
                            <template #footer>
                                <van-stepper
                                        v-model="item.number"
                                        integer
                                        min="1"
                                        v-show="editStatus"
                                        @change="StepFn(item)"
                                />
                            </template>
                        </van-card>
                        <template #right>
                            <van-button
                                    square
                                    text="删除"
                                    type="danger"
                                    class="delete-button"
                                    @click="DelGoodsfn(item.product_id)"
                            />
                        </template>
                    </van-swipe-cell>
                </van-checkbox>
            </van-checkbox-group>
        </div>

        <van-submit-bar
                :price="cartTotal.checkedGoodsAmount * 100"
                button-text="提交订单"
        >
            <van-checkbox v-model="AllChecked">全选</van-checkbox>
            <template #tip
            >累计共{{ cartTotal.goodsCount }}件商品，可点击
                <van-button
                        :type="editStatus ? 'danger' : 'primary'"
                        size="small"
                        @click="editStatusFn"
                >
                    {{ editStatus ? "完成编辑" : "编辑" }}
                </van-button>
                按钮进行商品数量进行修改
            </template>
        </van-submit-bar>
    </div>
</template>

<script>
    import Tips from "@/components/Tips.vue";
    import {
        GetCartDataApi,
        GoodsSelectApi,
        DelGoodsApi,
        CartStepApi,
    } from "@/request/api";
    export default {
        components: {
            Tips,
        },
        data() {
            return {
                result: [], //复选框
                cartList: {}, //商品总列表
                cartTotal: {}, //购物车数据
                editStatus: false, //编辑状态，默认false
            };
        },
        computed: {
            // 全选框checkbox的值
            AllChecked: {
                get() {
                    //   选中数量与全部数量是否相等
                    return this.cartTotal.checkedGoodsCount == this.cartTotal.goodsCount;
                },
                set(val) {
                    //   修改值后的逻辑
                    // console.log(val);// T & F

                    // 重新获取整个cartList数组的product_id，拼成一个 productIds数组
                    let arrlist = [];
                    this.cartList.map((item) => {
                        arrlist.push(item.product_id);
                    });

                    // 切换全选状态
                    GoodsSelectApi({
                        isChecked: val ? 1 : 0,
                        productIds: arrlist.join(),
                    }).then((res) => {
                        // 重新渲染当前页面数据
                        if (res.errno == 0) {
                            this.successFn(res.data);
                        }
                    });
                },
            },
        },
        // 点击购物车，如果没有token,相当于没登录，跳转到登录页面(路由守卫)
        methods: {
            // 步近器请求
            StepFn(item) {
                CartStepApi({
                    goodsId: item.goods_id,
                    id: item.id,
                    number: item.number,
                    productId: item.product_id,
                }).then((res) => {
                    if (res.errno == 0) {
                        this.successFn(res.data);
                    }
                });
            },
            // 删除请求
            DelGoodsfn(id) {
                DelGoodsApi({
                    productIds: id.toString(),
                }).then((res) => {
                    if (res.errno == 0) {
                        this.successFn(res.data);
                    }
                });
            },
            // 渲染页面的函数
            successFn(arg) {
                // let { cartList, cartTotal } =arg;
                this.cartList = arg.cartList;
                this.cartTotal = arg.cartTotal;
                this.result = []; //清空result
                /*
                   cartList数组中，每一项checked等于1，就为选中状态，[result]数组为每一项的product_id
                   所以cartList某一项checked等于1，那么这个product_id就添加到result中去表示选中
                */
                this.cartList.map((item) => {
                    if (item.checked === 1) {
                        this.result.push(item.product_id);
                    }
                });
            },
            // 列表单击状态
            checkboxClick(item) {
                if (!this.editStatus) {
                    // true表示编辑状态  如果不是编辑状态
                    // console.log(this.result);
                    GoodsSelectApi({
                        // if (item.checked == 1) {
                        //   item.checked = 0;
                        // }
                        // if (item.checked == 10) {
                        //   item.checked = 1;
                        // }
                        isChecked: item.checked == 1 ? 0 : 1,
                        productIds: item.product_id,
                    }).then((res) => {
                        // 重新渲染当前页面数据
                        if (res.errno == 0) {
                            this.successFn(res.data);
                        }
                    });
                }
            },
            // 编辑按钮
            editStatusFn() {
                // 步近器取反 编辑状态文字颜色改变
                this.editStatus = !this.editStatus;
            },
        },
        created() {
            GetCartDataApi().then((res) => {
                if (res.errno == 0) {
                    this.successFn(res.data);
                }
            });
        },
    };
</script>

<style lang = "less" scoped>
    .van-submit-bar {
        bottom: 50px;
        .van-submit-bar__tip {
            display: flex;
            align-items: center;
            .van-button {
                margin: 0 2px;
            }
        }
    }
    .card {
        /deep/.van-checkbox-group {
            margin-bottom: 150px;
            background: #fff;
            padding: 0 10px;
            .van-checkbox {
                border-bottom: 1px solid #ccc;
                .van-checkbox__label {
                    border-bottom: 1px solid #ccc;
                    flex: 1;
                }
            }
        }
    }
    .van-swipe-cell__right {
        .delete-button {
            height: 100%;
        }
    }
</style>
