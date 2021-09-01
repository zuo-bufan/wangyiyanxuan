<template>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
        <van-cell v-for="item in listArr" :key="item" :title="item" @click="ListClick(item)" />
    </van-list>
</template>

<script>
    export default {
        props: ["listArr"],
        data() {
            return {
                loading: false,
                finished: true,
            };
        },
        methods: {
            //   点击列表之后，让父级的searchNum变成2
            // 跳转到产品区块
            ListClick(item) {
                //   子传父  单向数据流
                this.$emit("ListClick", 2, item);
            },
        },
    };
</script>

<style lang = "less" scoped>
</style>
