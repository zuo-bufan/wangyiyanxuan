<template>
    <div>
        <!-- 搜索框 -->
        <van-search
                @click="changeshowPopup"
            v-model="inputValue"
            shape="round"
            readonly
            placeholder="请输入搜索关键词"
        />
    </div>
</template>

<script>
    export default {
        data(){
            return{
                inputValue:"",
            }
        },
        methods:{
            changeshowPopup(){
                this.showPopup = !this.showPopup;
                this.$router.push("/home/popup");
            }
        }
    }
</script>

<style scoped>

</style>
