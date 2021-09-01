<template>
    <div class="products">
        <van-dropdown-menu>
            <van-dropdown-item disabled title="综合" />
            <van-dropdown-item v-model="order" :options="option2" title="价格" @change="priceChange" />
            <van-dropdown-item
                    v-model="categoryId"
                    :options="filterCategory"
                    title="分类"
                    @change="categoryChange"
            />
        </van-dropdown-menu>
        <ProductList :productlist="productlist" v-if="productlist.length>0" />
        <van-empty image="search" description="描述文字" v-else />
    </div>
</template>

<script>
    import ProductList from "@/components/ProductList.vue";
    import { SearchGoodsListApi } from "@/request/api";
    export default {
        components: {
            ProductList,
        },
        data() {
            return {
                price: "",
                // category: 0,---->categoryPopup  选中哪一个下拉框
                option2: [
                    { text: "价格由高到低", value: "desc" },
                    { text: "价格由低到高", value: "asc" },
                ],
                // 下拉框 全部 居家
                filterCategory: [],
                categoryPopup: "0",
                productlist: [],
                // 请求参数
                page: 1,
                size: 20,
                order: "desc",
                sort: "id",
                categoryId: 0,
            };
        },
        created() {
            this.SearchGoodsList();
        },
        props: ["keyword"],
        methods: {
            // 封装了一个产品搜索的函数
            SearchGoodsList() {
                SearchGoodsListApi({
                    keyword: this.keyword,
                    page: this.page,
                    size: this.size,
                    order: this.order,
                    categoryId: this.categoryId,
                    sort: this.sort,
                }).then((res) => {
                    // console.log(res);
                    console.log(res.data);
                    if (res.errno === 0) {
                        this.productlist = res.data.goodsList;
                        let { filterCategory } = res.data;
                        // 深拷贝 快速修改某个数组中一个或多个对象的属性名，再替换成需要的格式;
                        // JSON.parse(JSON.stringify(data).
                        // replace(/name1/g, 'new_name1').
                        // replace(/name2/g, 'new_name2').
                        // replace(/name3/g, 'new_name3')...)
                        let filterCategory1 = JSON.parse(
                            JSON.stringify(filterCategory)
                                .replace(/name/g, "text")
                                .replace(/id/g, "value")
                        );
                        this.filterCategory = filterCategory1;
                        //  产品列表下拉框选中状态
                        this.filterCategory.map((item) => {
                            if (item.checked) {
                                this.categoryId = item.value;
                            }
                        });
                    }
                });
            },
            // 分类切换
            categoryChange(value) {
                this.categoryId = value;
                // 调用产品列表搜索请求
                this.SearchGoodsList();
            },
            // 价格切换
            priceChange(value) {
                this.order = value;
                // 默认按照id排序改成 按照价格排序
                this.sort = "price";
                // 调用产品列表搜索请求
                this.SearchGoodsList();
            },
        },
    };
</script>

<style lang = "less" scoped>
    .products {
        background-color: #fff;
        min-height: calc(100vh - 54px);
    }
</style>
