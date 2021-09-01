<template>
    <div class="box">
        <div class="banner">
            <img :src="brand.app_list_pic_url" alt="">
            <h2>{{brand.name}}</h2>
        </div>
        <p>{{brand.simple_desc}}</p>
    </div>
</template>

<script>
    import { BrandDetailApi } from "@/request/api";
    export default {
        data() {
            return {
                brand: {},
            };
        },
       created() {
            BrandDetailApi({
                id:this.$route.query.id,
            }).then( res => {
                console.log(res.data)
                if (res.errno == 0){
                  let { brand }  = res.data;
                  this.brand = brand;
                    console.log(this.brand)
                }
            })
       }
    };
</script>

<style lang = "less" scoped>
    .box {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        .banner {
            width: 100%;
            position: relative;
            img {
                display: block;
                width: 100%;
            }
            h2 {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                text-align: center;
                height: 30px;
                line-height: 30px;
                margin: auto;
                font-size: 20px;
                text-decoration: underline;
                color: #fff;
            }
        }
        p {
            background: #fff;
            font-size: 18px;
            text-align: center;
            padding: 20px 10px;
            line-height: 26px;
            color: #666;
        }
    }
</style>
