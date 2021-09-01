<template>
    <div>
        <header>
            <img :src="userInfo.avatar" />
            <section @click="goLogin">{{ userInfo.username }}</section>
            <van-icon :name="isLogin ? 'cross' : 'arrow'" @click="Logout" />
        </header>
        <!-- square 是正方形宫格 -->
        <van-grid :column-num="3" square>
            <van-grid-item
                    v-for="(item, index) in mydata"
                    :key="index"
                    :icon="item.icon"
                    :text="item.title"
            />
        </van-grid>
        <!-- 登录层弹出框 -->
        <div class="modal" v-show="isShow">
            <div class="modal_bg" @click="modalClick"></div>
            <div class="modal_content">
                <van-form @submit="onSubmit">
                    <van-field
                            v-model="username"
                            name="用户名"
                            label="用户名"
                            placeholder="用户名"
                            :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                            v-model="password"
                            type="password"
                            name="密码"
                            label="密码"
                            placeholder="密码"
                            :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <div style="margin: 16px">
                        <van-button round block type="danger" native-type="submit"
                        >提交</van-button
                        >
                    </div>
                </van-form>
            </div>
        </div>
    </div>
</template>

<script>
    import { LoginApi } from "@/request/api";
    export default {
        data() {
            return {
                // 有无token 是否已登录
                isLogin: localStorage.getItem("token"),
                // 用户信息
                userInfo: {
                    avatar: require("@/assets/user.png"),
                    username: "点击登录",
                },
                mydata: [
                    { title: "我的订单", icon: "label-o" },
                    { title: "优惠券", icon: "bill-o" },
                    { title: "礼品卡", icon: "goods-collect-o" },
                    { title: "我的收藏", icon: "location-o" },
                    { title: "我的足迹", icon: "flag-o" },
                    { title: "会员福利", icon: "contact" },
                    { title: "地址管理", icon: "aim" },
                    { title: "账号安全", icon: "warn-o" },
                    { title: "联系客服", icon: "service-o" },
                    { title: "帮助中心", icon: "question-o" },
                    { title: "意见反馈", icon: "smile-comment-o" },
                ],
                isShow: false,
                username: "",
                password: "",
            };
        },
        created() {
            let token = localStorage.getItem("token");
            // 如果已经登录
            if (token) {
                // 渲染用户信息
                this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
            }
        },
        methods: {
            // 登录页面
            goLogin() {
                // 如果已经登录，不需要弹出登录表单
                let token = localStorage.getItem("token");
                if (!token) {
                    this.isShow = true;
                }
            },
            // 退出登录
            Logout() {
                // 清除 localStorage
                localStorage.clear();
                this.$router.go(0);
            },
            modalClick() {
                this.isShow = false;
            },
            onSubmit(values) {
                // console.log("submit", values);
                LoginApi({
                    username: values["用户名"],
                    pwd: values["密码"],
                }).then((res) => {
                    console.log(res);
                    if (res.errno == 0) {
                        // 成功
                        // 储存token，保存用户信息
                        let { token, userInfo } = res.data;
                        localStorage.setItem("token", token);
                        // localStorage只能保存简单类型数据
                        localStorage.setItem("userInfo", JSON.stringify(userInfo));
                        // 登录框消失
                        this.isShow = false;
                        this.userInfo = userInfo;
                        // 箭头变成X
                        this.isLogin = true;
                    } else {
                        // 失败
                        this.$toast("账号或密码有误");
                    }
                });
            },
        },
    };
</script>

<style lang = "less" scoped>
    header {
        background-color: rgb(51, 51, 51);
        color: #fff;
        display: flex;
        justify-content: space-around;
        padding: 20px 10px;
        height: 70px;
        align-items: center;
        img {
            border-radius: 50%;
            width: 70px;
        }
        section {
            flex: 1;
            margin-left: 10px;
        }
    }
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 444;
        .modal_bg {
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.3);
        }
        .modal_content {
            width: 90%;
            height: 200px;
            position: absolute;
            background-color: #fff;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            padding: 20px 0;
        }
    }
</style>
