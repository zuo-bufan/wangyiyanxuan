<template>
   <div>
       <div class="newproduct" v-for="item in categoryList" :key="item.id">
           <div class="home_title">{{item.name}}</div>
           <ul class="product_list" >
               <li v-for="item2 in item.goodsList" :key="item2.id" @click="goDetails(item2.id)">
                   <img v-lazy="item2.list_pic_url">
                   <h4>{{item2.name}}</h4>
                   <p>{{item2.retail_price | RMBFormat}}</p>
               </li>
           </ul>
       </div>
   </div>
</template>

<script>
    export default {
        name: "HomeCategoryList",
        props:["categoryList"],
        data() {
            return {

            }
        },
        methods:{
            goDetails(id){
                this.$router.push("/details/"+id);
                window.scroll(0,0);
            }
        }
    }
</script>

<style lang="less" scoped>
    .newproduct {
        padding-top: 10px;
        margin-bottom: 10px;
        background-color: #fff;
        .home_title {
            font-size: 20px;
            height: 50px;
            line-height: 50px;
        }
        .product_list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li {
                padding-bottom: 12px;
                width: 49%;
                img {
                    width: 100%;
                }
                p {
                    color: #8b0000;
                }
            }
        }
    }
</style>
