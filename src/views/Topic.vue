<template>
    <div class="topic">
        <div class="topic_box" v-for="item in topicData" :key="item.id">
            <img v-lazy="item.scene_pic_url" alt />
            <h3>{{item.title}}</h3>
            <h4>{{item.subtitle}}</h4>
            <p>{{item.price_info | RMBFormat}}</p>
        </div>
        <!-- 分页 -->
        <van-pagination
                v-model="page"
                :page-count="2"
                mode="simple"
                @change="ChangePage"
        />
    </div>
</template>

<script>
    import {TopicListApi} from '@/request/api'
    export default {
        data() {
            return {
                color: "red",
                page:1,
                currentPage:1,
                size:10,
                topicData:[],
            }
        },
        methods:{
            ChangePage() {
                this.TopicListData();
                // 回到最上边
                window.scroll(0, 0);
            },
            TopicListData(){
                TopicListApi({
                    // 当前显示页码
                    page: this.page,
                    //   每页显示个数
                    size: this.size,
                }).then(res => {
                    console.log(res.data)
                    if (res.errno == 0){
                        this.topicData = res.data.data;
                        // console.log(this.topicData)
                    }
                })
            }
        },
        created() {
            this.TopicListData();
        },
    }
</script>

<style lang="less" scoped>
    .topic {
        text-align-last: center;

    .topic_box {
        background-color: #fff;
        padding-bottom: 10px;
        margin-bottom: 20px;

    img {
        width: 100%;
    }

    h3 {
        font-size: 18px;
        margin: 10px 0;
    }

    h4 {
        font-size: 16px;
        margin: 20px 0;
    }

    p {
        color: #9b0000;
        margin-bottom: 10px;
    }

    /deep/ .van-pagination__page-desc {
        display: none;
    }

    /* /deep/.van-pagination__item {
      color: #9b0000;
      .van-pagination__item--disabled {
        color: #ccc!important;
      }
    } */
    }
    }
</style>
