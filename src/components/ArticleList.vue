<template>
    <div>
        <transition name="slide-fade">
            <loading v-if="loading"></loading>
            <div v-else class="layer">
                <ul>
                    <li v-for="(item,index) in list" v-bind:key="item.number">
                        <router-link :to="{name:'detail',params:{id:item.number}}">
                            <div class="article-img-inner">
                                <img :src="getMainImage[index]" alt="">
                            </div>
                            <div class="article-content" :style="{borderLeft:item.labels[0] ? `10px solid #${item.labels[0].color}`: ''}">
                                <h1>{{item.title}}</h1>
                                <p class="article-des" v-html="getMainDes[index]"></p>
                                <div class="article-label">
                                    <div class="article-time">更新时间：{{getTime[index]}}</div>
                                    <label v-for="items in item.labels" v-bind:key="items.id"
                                           :style="{background:`#${items.color}`}">{{items.name}}</label>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <aside>
                    <div class="author-inner">
                        <img class="author-img" src="../assets/image/author.jpg" alt="">
                        <h3>Y3tu</h3>
                        <ul>
                            <li>
                                <a href="https://github.com/y3tu" target="_blank">
                                    <img src="../assets/image/github.png" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </transition>
    </div>
</template>

<script>
    /* eslint-disable */
    import marked from 'marked'
    import friendlytimejs from 'friendlytimejs'
    import dayjs from 'dayjs'
    import loading from '../components/Loading'

    export default {
        name: 'articleList',
        data() {
            return {
                list: [],
                loading: true,
                pageNo: 1,//总页数
                currentPage: 1//当前页
            }
        },
        mounted() {
            //this.requestData(this.currentPage);
        },
        watch: {
            //currentPage改变执行requestData
            currentPage: function (val) {
                this.loading = true;
                this.requestData(val);
            }
        },
        methods: {
            /**
             * 获取数据
             * @param currentPage 当前页
             */
            requestData(currentPage) {
                // 在这里使用ajax或者fetch将对应页传过去获取数据即可
                let url = 'https://api.github.com/repos/LeachZhou/blog/issues';
                let per_page = 4;//每页4条数据
                let filter = 'created';
                let sort = 'updated';
                this.$axios.get(`${url}?labels=已审核&&filter=${filter}&&sort=${sort}`).then((res) => {
                    if (res.status === 200) {
                        this.pageNo = Math.ceil(res.data.length / 4);
                    }
                }).catch((err) => {
                    console.log(err);
                });
                this.$axios.get(`${url}?labels=已审核&&page=${currentPage}&&per_page=${per_page}&&filter=${filter}&&sort=${sort}`).then((res) => {
                    if (res.status === 200) {
                        this.list = res.data;
                        this.loading = false;
                    }
                }).catch((err) => {
                    console.log(err);
                    this.loading = false;
                });
            }
        },
        computed: {
            getMainImage() {
                let arr = [];
                for (let item of this.list) {
                    if (marked(item.body, {sanitize: true}).match(/\bsrc\b\s*=\s*[\'\"]?([^\'\"]*)[\'\"]?/)) {
                        arr.push(marked(item.body, {sanitize: true}).match(/\bsrc\b\s*=\s*[\'\"]?([^\'\"]*)[\'\"]?/)[1]);
                    } else {
                        arr.push('http://via.placeholder.com/200x200');
                    }
                }
                return arr;
            },
            getMainDes() {
                let arr = [];
                for (let item of this.list) {
                    arr.push(marked(item.body, {sanitize: true}).replace(/<[^>]+>/g, "").substring(0, 200));
                }
                return arr;
            },
            getTime() {
                let arr = [];
                for (let item of this.list) {
                    arr.push(friendlytimejs.FriendlyTime(dayjs(item.updated_at).add(8, "hour").format('YYYY-MM-DD HH:mm:ss'), dayjs()));
                }
                return arr;
            }
        },
        components: {
            loading
        },
        props: []
    }
</script>

<style lang="less" scoped>

</style>
