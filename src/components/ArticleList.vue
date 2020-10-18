<template>
    <div>
        <transition name="slide-fade">
            <loading v-if="loading"/>
            <div v-else class="layer">
                <ul>
                    <li v-for="(item,index) in articleList" v-bind:key="item.number">
                        <router-link :to="{name:'detail',params:{id:item.number}}">
                            <div class="article-img-inner">
                                <img :src="getMainImage[index]" alt="">
                            </div>
                            <div class="article-content" :style="{borderLeft:item.labels[0] ? `10px solid #${item.labels[0].color}`: ''}">
                                <h1>{{item.title}}</h1>
                                <p class="article-des" v-html="getMainDes[index]"/>
                                <div class="article-label">
                                    <div class="article-time">更新时间：{{getTime[index]}}</div>
                                    <label v-for="items in item.labels" v-bind:key="items.id"
                                           :style="{background:`#${items.color}`}">{{items.name}}</label>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    import marked from 'marked'
    import friendlytimejs from 'friendlytimejs'
    import dayjs from 'dayjs'
    import loading from '@/components/Loading'
    import request from '@/plugin/axios'

    export default {
        name: 'articleList',
        components: {
            loading
        },
        props: [],
        data() {
            return {
                //文章集合
                articleList: [],
                //加载loading
                loading: true,
                //当前页
                current: 1,
                //每页展示条数
                size: 10,
            }
        },
        created() {
            //获取第一页的文章数据
            this.articlePage(1);
        },
        watch: {},
        methods: {
            /**
             * 获取文章分页数据
             */
            articlePage(current) {
                request.page("/blog/article/page", {
                    current: current,
                    size: this.size
                }).then(res => {
                    this.articleList = res.data;
                    this.loading = false;
                }).catch((err) => {
                    console.log(err);
                    this.loading = false;
                });
            },
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
                    arr.push(friendlytimejs.FriendlyTime(dayjs(item.updated_at).format('YYYY-MM-DD HH:mm:ss'), dayjs()));
                }
                return arr;
            }
        },
    }
</script>

<style lang="less" scoped>
    .layer {
        position: relative;
        width: 960px;
        margin: 0 auto;
    }

    aside {
        position: absolute;
        right: 0;
        top: 50px;
        width: 240px;
        overflow: hidden;

        .author-inner {
            position: relative;
            background: #ffffff;
            width: 240px;
            margin-bottom: 20px;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
            box-shadow: 0 19px 35px -22px rgb(255, 255, 255);

            .author-img {
                width: 150px;
                height: 150px;
                display: block;
                border-radius: 50%;
                margin: 0 auto;
                object-fit: cover;
            }

            h3 {
                margin: 20px 0;
            }

            p {
                color: #7e8c8d;
                font-size: 12px;
                line-height: 1.5;
            }

            ul {
                text-align: center;
                overflow: auto;
                width: 100%;
                padding-top: 20px;

                li {
                    /*float: left;*/
                    margin: 0 auto;
                    width: 50px;
                    height: 50px;
                    background: #dedede;
                    border-radius: 50%;

                    &:hover {
                        transition: all .6s ease;
                        transform: translateX(0);
                        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                    }

                    img {
                        margin: 9px 0;
                    }
                }
            }
        }

        .img-inner {
            position: relative;
            background: #ffffff;
            width: 240px;
            margin-bottom: 20px;
            border-radius: 5px;

            img {
                width: 240px;
                height: 240px;
                display: block;
                border-radius: 5px;
                object-fit: cover;
            }
        }
    }

    ul {
        padding-top: 50px;
        width: 700px;

        li {
            position: relative;
            display: block;
            border-radius: 5px;
            box-shadow: 0 19px 35px -22px rgb(255, 255, 255);
            background-color: #ffffff;
            overflow: hidden;
            margin-bottom: 20px;
            transition: all .6s ease;

            &:hover {
                transition: all .6s ease;
                box-shadow: 0 8px 11px -6px rgba(0, 0, 0, .5);
                transform: translateX(10px);
            }

            .article-img-inner {
                position: relative;
                float: left;
                display: block;
                width: 200px;
                height: 200px;
                overflow: hidden;
                object-fit: cover;

                img {
                    width: 200px;
                    height: 200px;
                    object-fit: cover;
                }
            }

            .article-content {
                position: relative;
                float: left;
                width: calc(~'100% - 200px');
                height: 200px;
                border-left: 10px solid #00b1ff;
                padding: 20px;

                h1 {
                    font-size: 20px;
                    height: 25px;
                    font-weight: bold;
                    margin-bottom: 20px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .article-des {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    word-break: break-all;
                    line-height: 1.5;
                    color: #999999;
                    font-size: 14px;
                }

                .article-label {
                    position: absolute;
                    left: 20px;
                    bottom: 20px;

                    .article-time {
                        float: left;
                        margin-right: 10px;
                        line-height: 22px;
                        color: #999999;
                        font-size: 12px;
                    }

                    label {
                        float: left;
                        background: #00b1ff;
                        color: #FFFFFF;
                        padding: 5px 10px;
                        border-radius: 15px;
                        margin-right: 10px;
                        font-size: 12px;
                    }
                }
            }
        }
    }

</style>
