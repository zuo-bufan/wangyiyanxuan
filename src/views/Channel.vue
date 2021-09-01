<template>
    <div class="channel">
<!--        水平选项卡-->
        <van-tabs v-model="currentCategory.id" @click="changeTab">
            <van-tab v-for="item in brotherCategory"
                     :key="item.id"
                     :title="item.name"
                     :name="item.id">
                        <h2>{{item.name}}</h2>
                        <h3>{{item.front_desc}}</h3>
            </van-tab>
<!--            选项卡对应的内容  组件化-->
            <ProductList :newGoodsList="newGoodsList"/>
        </van-tabs>
    </div>
</template>

<script>
    import {GoodsCategoryApi, GoodsListApi} from "@/request/api";
    import ProductList from "../components/ProductList";

    export default {
        name: "Channel",
        components: {
            ProductList
        },
        data() {
            return {
                brotherCategory: [],
                currentCategory: {},
                newGoodsList: [],
                name: "",
            }
        },
        methods: {
            changeTab(name) {
                GoodsListApi({
                    categoryId: name,
                    page: 1,
                    size: 100,
                }).then(res => {
                    console.log(res.data)
                    if (res.errno == 0) {
                        this.newGoodsList = res.data.goodsList;
                    }
                });
                this.$router.push("/channel?id=" + name);
            }
        },
        created() {
            GoodsListApi({
                categoryId: this.$route.query.id,
                page: 1,
                size: 100,
            }).then((res) => {
                console.log(res.data);
                if (res.errno === 0) {
                    this.newGoodsList = res.data.goodsList;
                    // console.log(this.newGoodsList)
                }
            });
            GoodsCategoryApi({
                id: this.$route.query.id,
            }).then((res) => {
                // console.log(res.data);
                if (res.errno === 0) {
                    let {brotherCategory, currentCategory} = res.data;
                    // console.log(res.data);

                    this.brotherCategory = brotherCategory;
                    this.currentCategory = currentCategory;
                    // console.log(this.currentCategory);

                }
            });
        }
    }
</script>

<style lang="less" scoped>
    .channel {
        text-align: center;

        h2 {
            font-size: 18px;
            font-weight: 600;
            height: 50px;
            line-height: 50px;
        }

        h3 {
            margin-bottom: 10px;
        }
    }
</style>
