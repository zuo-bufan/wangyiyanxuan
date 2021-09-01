<template>
    <div>
        <van-row>
            <van-col span="8">
                <van-icon name="checked" color="darkred" />30天无忧退货
            </van-col>
            <van-col span="8">
                <van-icon name="checked" color="darkred" />48小时快速退货
            </van-col>
            <van-col span="8">
                <van-icon name="checked" color="darkred" />满88元免邮费
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
    };
</script>

<style lang = "less" scoped>
    .van-row {
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 14px!important;
        .van-icon {
            position: relative;
            top: 2px;
        }
    }
</style>
