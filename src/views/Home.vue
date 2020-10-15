<template>
    <div class="wrapper-main">
        <div class="banner-box">
            <el-carousel height="500px">
                <el-carousel-item>
                    <div class="banner-item one"></div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="banner-item two"></div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="banner-item three"></div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>

        <BackTop/>
    </div>
</template>

<script>

    import BackTop from '@/components/BackTop'

    export default {
        components: {BackTop},
        name: 'Home'
    }
</script>
<style lang="scss" scoped>
    .wrapper-main {
        .el-carousel {
            width: 100%;

            .el-carousel__container .el-carousel__item .banner-item {
                width: 100%;
                height: 100%;

                &.one {
                    background: url('../assets/image/bg/1.jpg') no-repeat center center;
                }

                &.two {
                    background: url('../assets/image/bg/2.jpg') no-repeat center center;
                }

                &.three {
                    background: url('../assets/image/bg/3.jpg') no-repeat center center;
                }
            }
        }

        text-align: center;
    }
</style>