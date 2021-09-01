<template>
    <div class="popup">
        <van-search
                v-model="inputValue"
                show-action
                :placeholder="defaultKeyword.keyword"
                @search="onSearch"
                @input="onInput"
        >
            <!-- 使用 action 插槽可以自定义右侧按钮的内容。使用插槽后，cancel 事件将不再触发。 -->
            <template #action>
                <div @click="onCancel">取消</div>
            </template>
        </van-search>
        <!-- 搜索框模块 -->

        <HistoryHot
                v-if="searchNum==1"
                :hotKeywordList="hotKeywordList"
                :historyKeywordList="historyKeywordList"
                @ListClick="ListClick"
                @getPopupData="getPopupData"
        />
        <Products v-else-if="searchNum==2" :keyword="keyword" />
        <List v-else :listArr="listArr" @ListClick="ListClick" />
    </div>
</template>

<script>
    let timer = null;
    import HistoryHot from "@/components/popup/HistoryHot.vue";
    import Products from "@/components/popup/Products.vue";
    import List from "@/components/popup/List.vue";
    // 引入请求接口
    import { PopupApi, SearchHelperpApi } from "@/request/api";
    export default {
        components: {
            HistoryHot, //历史记录与热门搜索  1
            Products, //产品区块    2
            List, //列表区块   3
        },
        data() {
            return {
                listArr: [],
                inputValue: "",
                searchNum: 1, //1-历史热门  2-产品区块  3-列表
                defaultKeyword: {},
                historyKeywordList: [], //历史记录
                hotKeywordList: [], //热门搜索
                productlist: {},
                // List页面所点击的item
                keyword: "",
                // 产品列表下拉框
                filterCategory: [],
                //  产品列表下拉框选中状态
                categoryPopup: 0,
            };
        },
        methods: {
            // 点击historyhot跳转到products
            // 点击list跳转到products
            ListClick(arg, item) {
                // 跳到产品区块
                this.searchNum = arg;
                this.keyword = item;
            },
            onSearch(value) {
                //   // 回车之后执行这里
                this.searchNum = 2;
                // search事件的回调参数;
                this.keyword = value;
            },
            onCancel() {
                // 跳回首页
                this.$router.go(-1);
            },
            // 输入框事件
            onInput() {
                //  防抖 ！！！！！！ 实用!!
                let ifAjax = true; //默认允许做请求
                // 显示列表区块
                this.searchNum = 3;

                // 无论如何，都清除一次请求
                if (timer) {
                    clearTimeout(timer);
                }
                if (ifAjax) {
                    ifAjax = false; //禁止立刻再次请求
                    timer = setTimeout(() => {
                        //   调用接口
                        SearchHelperpApi({ keyword: this.inputValue }).then((res) => {
                            // console.log(res);
                            // console.log(res.data);
                            if (res.errno === 0) {
                                this.listArr = res.data;
                            }
                            ifAjax = true; //当这个请求结束的时候，放开权限让用户做请求
                            clearTimeout(timer); //当我请求成功时，清除定时器
                        });
                    }, 200);
                }
            },
            // 封装PopupApi
            getPopupData() {
                PopupApi().then((res) => {
                    //   console.log(res);
                    //   console.log(res.data);
                    if (res.errno === 0) {
                        let { defaultKeyword, historyKeywordList, hotKeywordList } = res.data;
                        this.defaultKeyword = defaultKeyword;
                        this.historyKeywordList = historyKeywordList;
                        this.hotKeywordList = hotKeywordList;
                        console.log(res.data);
                    }
                });
            },
        },
        created() {
            // 为什么要延迟请求，原因是想让轻提示Toast的loading显示在中间
            setTimeout(() => {
                this.getPopupData();
            }, 500);
        },
    };
</script>

<style lang = "less" scoped>
    .popup {
        position: fixed;
        top: 0;
        background-color: #efefef;
        width: 100%;
        height: 100%;
        /* overflow: hidden; */
        overflow: auto;
        z-index: 999;
    }
</style>
