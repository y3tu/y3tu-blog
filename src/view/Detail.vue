<template>
    <div id="detail" v-title :data-title=content.title>
        <transition name="slide-fade">
            <loading v-if="loading"></loading>
            <div v-else class="layer">
                <div class="detailContent">
                    <h1>{{content.title}}</h1>
                    <div class="article-label">
                        <img class="icon github"/>
                        <a :href="content.html_url" target="_blank" class="article-time">查看原文</a>
                        <div class="article-time">更新时间：{{getTime}}</div>
                        <label v-for="items in content.labels" v-bind:key="items.id"
                               :style="{background:`#${items.color}`}">{{items.name}}</label>
                    </div>
                    <div v-html="getMainDes" v-highlight></div>
                </div>
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
        name: 'detail',
        data() {
            return {
                id: this.$route.params.id,
                content: {},
                url: location.href,
                loading: true
            }
        },
        created() {
            let url = `https://api.github.com/repos/y3tu/y3tu-blog/issues/${this.id}`;
            this.$axios.get(`${url}`).then((res) => {
                if (res.status == 200) {
                    this.content = res.data;
                    this.loading = false;
                }
            }).catch((err) => {
                console.log(err);
                this.loading = false;
            });
        },
        mounted() {

        },
        computed: {
            getMainDes() {
                let a = this.content.body;
                if (typeof a !== 'undefined' && a !== 'null') {//解决marked出现参数为空的问题，实际a有值，但不加这判断就报错
                    return marked(a);
                }
            },
            getTime() {
                return friendlytimejs.FriendlyTime(dayjs(this.content.updated_at).format('YYYY-MM-DD HH:mm:ss'), dayjs());
            }
        },
        methods: {},
        components: {
            loading
        }
    }
</script>

<style lang="less">
    .layer {
        width: 960px;
        margin: 50px auto;
    }

    .detailContent {
        width: 100%;
        padding: 20px;
        background: #ffffff;
        border-radius: 5px;
        line-height: 1.5;
        .github {
            margin: 0 5px 0 0;
            padding: 2px;
        }
        blockquote {
            border-left: 5px solid #363159;
            padding: 0 0 0 10px;
        }
        h1 {
            font-size: 20px;
            font-weight: bold;
        }
        h3 {
            position: relative;
            font-size: 16px;
            font-weight: bold;
            padding: 20px 30px;
            &:after {
                content: "";
                position: absolute;
                top: 27px;
                left: 5px;
                width: 5px;
                height: 5px;
                border: 2px solid #2db9ff;
                border-radius: 50%;
                background: #fff;
            }
        }
        img[src*="#width-full"] {
            width: 100%;
        }
        img {
            height: auto;
            margin: 20px auto;
        }
        p {
            margin: 5px 0;
        }
        ul {
            li {
                position: relative;
                padding-left: 30px;
                &:after {
                    content: "";
                    position: absolute;
                    top: 7px;
                    left: 5px;
                    width: 5px;
                    height: 5px;
                    border: 2px solid #ff3524;
                    border-radius: 50%;
                    background: #fff;
                }
            }
        }
        .article-label {
            overflow: auto;
            margin: 10px 0;
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
                padding: 3px 10px;
                border-radius: 4px;
                margin-right: 10px;
                font-size: 12px;
            }

        }
    }
</style>