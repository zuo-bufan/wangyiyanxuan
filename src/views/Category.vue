<template>
    <div>
        <div class="category">
            <Search/>
            <!-- 侧边导航 -->
            <div class="bottom">
                <div class="left">
                    <van-sidebar v-model="activeKey">
                        <van-sidebar-item :title="item.name" v-for="item in categoryList" :key="item.id"
                                          @click="LetNavClick(item.id)"/>
                    </van-sidebar>
                </div>
                <div class="right">
                    <div class="box_img">
                        <img :src="currentCategory.img_url" alt>
                        <h5>{{currentCategory.front_name}}</h5>
                    </div>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">{{currentCategory.name}}</div>
                    </div>
                    <van-grid :border="false" :column-num="3">
                        <van-grid-item v-for="item in subCategoryList" :key="item.id">
                            <img :src="item.wap_banner_url" alt=""/>
                            {{ item.name }}
                        </van-grid-item>
                    </van-grid>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {GetCategoryDataApi,CategoryCurrentDataApi} from '@/request/api'
    import Search from '@/components/Search.vue'

    export default {
        name: "Category",
        components: {
            Search,
        },
        data() {
            return {
                activeKey: 0,//绑定当前选中项的索引
                categoryList: {}, //分类页左侧数组
                currentCategory: {}, //分类页第一项
                subCategoryList: [], //宫格数据
            }
        },
        methods: {
            LetNavClick(id){
                // 当前请求
                CategoryCurrentDataApi({ id: id }).then((res) => {
                    // console.log(res.data);
                    if (res.errno == 0) {
                        let { currentCategory } = res.data;
                        this.currentCategory = currentCategory;
                        this.subCategoryList = this.currentCategory.subCategoryList;
                    }
                });
            }
        },
        created() {
            GetCategoryDataApi().then(res => {
                // console.log(res.data);
                let {categoryList, currentCategory} = res.data;
                this.categoryList = categoryList;
                this.currentCategory = currentCategory;
                this.subCategoryList = currentCategory.subCategoryList;
                // console.log(this.subCategoryList)
            })
        }
    }
</script>

<style lang="less" scoped>
    .category {
        position: fixed;
        top: 0;
        height: 100vh;
        background-color: #fff;

        .bottom {
            display: flex;

            .left {
                width: 20%;
                background-color: #f7f8fa;
                height: 100vh;
            }

            .right {
                width: 80%;

                .box_img {
                    width: 100%;
                    position: relative;

                    img {
                        height: 140px;
                        width: 95%;
                        margin: 0 7px;
                        border-radius: 5px;
                        /* 阴影 */
                        box-shadow: 0 0 6px #000;
                        filter: brightness(0.5);
                    }

                    h5 {
                        font-size: 18px;
                        position: absolute;
                        color: #fff;
                        z-index: 999;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }

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
                        font-size: 18px;
                        width: 28%;
                        height: 30px;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        margin: auto;
                        text-align: center;
                        margin-top: 10px;
                    }
                }

                .van-grid {
                    .van-grid-item {
                        font-size: 14px;

                        img {
                            width: 40%;
                        }
                    }
                }
            }
        }
    }
</style>
