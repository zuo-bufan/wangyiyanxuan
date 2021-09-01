<template>
    <div>
        <!-- 历史记录 start -->
        <div class="history popup_top">
            <div class="history_top">
                <h2>历史记录</h2>
                <van-icon name="delete-o" @click="OnClickDel" />
            </div>
            <div class="history_down">
                <van-tag
                        v-for="(item,index) in historyKeywordList"
                        :key="index"
                        plain
                        type="default"
                        @click="ListClick(item)"
                >{{item}}</van-tag>
            </div>
        </div>
        <!-- 历史记录 end -->

        <!-- 热门搜索 start -->
        <div class="history">
            <div class="history_top">
                <h2>热门搜索</h2>
            </div>
            <div class="history_down">
                <van-tag
                        v-for="(item,index) in hotKeywordList"
                        :key="index"
                        plain
                        :type="item.is_hot==1?'danger':'default'"
                        @click="ListClick(item.keyword)"
                >{{item.keyword}}</van-tag>
            </div>
        </div>
        <!-- 热门搜索 end -->
    </div>
</template>

<script>
    import { SearchClearHistoryApi } from "@/request/api";
    export default {
        data() {
            return {};
        },
        props: ["historyKeywordList", "hotKeywordList"],
        methods: {
            ListClick(item) {
                this.$emit("ListClick", 2, item);
            },
            OnClickDel() {
                SearchClearHistoryApi().then((res) => {
                    if (res.errno === 0) {
                        console.log("成功了");
                        this.$emit("getPopupData");
                    }
                });
            },
        },
    };
</script>

<style lang = "less" scoped>
    .popup_top {
        margin-bottom: 20px;
    }
    .history {
        padding: 10px;
        background-color: #fff;
        .history_top {
            display: flex;
            justify-content: space-between;
            align-items: center; /* 垂直方向对齐 */
            .van-icon {
                font-size: 20px;
            }
            h2 {
                font-size: 18px;
            }
        }
        .history_down {
            .van-tag {
                margin-right: 10px;
                margin-top: 10px;
            }
        }
    }
</style>
