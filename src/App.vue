<template>
    <div class="layout">
        <aplayer :audio="audio" :lrcType="3" fixed />
        <Layout>
            <Header class="header">
                <Menu mode="horizontal" theme="light">
                    <div>
                        <img src="./assets/logo.png" class="layout-logo"/>
                    </div>
                    <div class="layout-nav">
                        <router-link to="/">
                            <menu-item name="1">
                                <Icon type="ios-navigate"></Icon>
                                首页
                            </menu-item>
                        </router-link>

                        <router-link to="/blog">
                            <menu-item name="2">
                                <Icon type="ios-keypad"></Icon>
                                博客
                            </menu-item>
                        </router-link>
                        <router-link to="/website">
                            <menu-item name="3">
                                <Icon type="ios-analytics"></Icon>
                                常用网站
                            </menu-item>
                        </router-link>
                        <router-link to="/about">
                            <menu-item name="4">
                                <Icon type="ios-paper"></Icon>
                                关于
                            </menu-item>
                        </router-link>
                        <router-link to="/test">
                            <menu-item name="5">
                                <Icon type="ios-paper"></Icon>
                                测试
                            </menu-item>
                        </router-link>
                    </div>
                </Menu>
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Card style="min-height: 700px">
                    <router-view></router-view>
                </Card>
            </Content>
            <Footer class="layout-footer-center">2018 &copy; y3tu</Footer>
        </Layout>
    </div>
</template>

<script>

    import Vue from 'vue';
    import APlayer from '@moefe/vue-aplayer';

    Vue.use(APlayer);

    export default {
        name: 'app',
        data() {
            return {
                audio: [
                    {
                        name: 'I Really Like You 西班牙语版（Cover Carly Rae Jepsen）',
                        artist: '熊子',
                        url: 'http://pdacsgxq7.bkt.clouddn.com/mp3/mucho.mp3',
                        cover: 'http://p1.music.126.net/UhbkP71d9KTMsdNczCf2wA==/109951162986700564.jpg?param=300y300', // prettier-ignore
                        lrc: 'http://pdacsgxq7.bkt.clouddn.com/lrc/mucho.lrc',
                    },
                    {
                        name: 'Mermaid girl (Extended RRver.)',
                        artist: '森永真由美',
                        url: 'http://pdacsgxq7.bkt.clouddn.com/mp3/mermaidgirl.mp3',
                        cover: 'http://p1.music.126.net/xXxBuZksld5HtovQxI1D0A==/3227066630258578.jpg?param=300y300', // prettier-ignore
                        lrc: 'http://pdacsgxq7.bkt.clouddn.com/lrc/mermaidgirl.lrc',
                    },
                    {
                        name: 'ヒビカセ',
                        artist: 'れをる',
                        url: 'http://pdacsgxq7.bkt.clouddn.com/mp3/hibikase.mp3',
                        cover: 'http://p1.music.126.net/cZPx3peGTuWEI_GaZB5CDg==/8892850045794893.jpg?param=300y300', // prettier-ignore
                        lrc: 'http://pdacsgxq7.bkt.clouddn.com/lrc/hibikase.lrc',
                    },
                ],
            }
        },
        components: {

        }
    }
</script>

<style lang="less" scoped>
    .size {
        width: 100%;
        height: 100%;
    }

    html, body {
        .size;
        overflow: hidden;
        margin: 0;
        padding: 0;
    }

    #app {
        .size;
    }

    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: white;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 620px;
        margin: 0 auto;
        margin-right: 20px;
    }

    .layout-footer-center {
        text-align: center;
    }

    .header {
        background: #fff;
    }
</style>
