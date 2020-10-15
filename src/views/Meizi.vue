<template>
    <div>
        <Row>
            <i-col span="12" offset="6">
                <loading v-if="loading"></loading>
                <div v-else>
                    <Carousel autoplay v-model="value2" loop :autoplay-speed="autoplaySpeed">
                        <CarouselItem v-for="homeData in homeDataList" v-bind:key="homeData._id">
                            <img :src="homeData.url" style="max-width:840px;max-height: 1000px"/>
                        </CarouselItem>
                    </Carousel>
                </div>
            </i-col>
        </Row>
    </div>

</template>
<script>
    import loading from '../components/Loading'

    export default {
        name: 'meizi',
        data() {
            return {
                homeDataList: {},
                value2: 0,
                loading: true,
                autoplaySpeed:5000
            }
        },
        mounted() {
            this.getHomeData();
        },
        components: {
            loading
        },
        methods: {
            /**
             * 获取首页图片数据
             */
            getHomeData() {
                let url = 'https://gank.io/api/data/福利/5/1';
                this.$axios.get(`${url}`).then((res) => {
                    if (res.status === 200) {
                        this.homeDataList = res.data.results;
                        this.loading = false;
                    }
                })
            }
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
        height: 100%;
    }
</style>
