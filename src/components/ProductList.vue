<template>
    <div>
        <ul class="product">
            <li v-for="item in newGoodsList" :key="item.id" @click="goDetails(item.id)">
                <img :src="item.list_pic_url" alt="">
                <h4>{{item.name}}</h4>
                <p>{{ item.retail_price | RMBFormat}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ProductList",
        data(){
            return {

            }
        },
        props:["newGoodsList"],
        methods: {
            goDetails(id){
                this.$router.push("/details/"+ id);
                window.scroll(0,0);
            //    this.$router.push({name:"Details",params:{id:id}});
            }
        }
    }
</script>

<style lang="less" scoped>
    .product {
        margin-bottom: -60px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 10px;
        li {
            width: 49%;
            text-align: center;
            img {
                width: 100%;
            }
            h4 {
                font-size: 14px;
                /* 超出一行变成省略 */
                overflow: hidden;
                width: 100%;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            p {
                color: darkred;
            }
        }
    }
</style>
