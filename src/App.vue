<template>
    <div class="layout">
        <aplayer :audio="audio" :lrcType="3" fixed/>
        <Layout>
            <Layout style="margin-right: 300px">
                <Header class="header">
                    <Menu mode="horizontal" theme="light">
                        <div class="layout-logo-title">Y3tu</div>
                        <div class="layout-nav">
                            <router-link to="/">
                                <menu-item name="1">
                                    HOME
                                </menu-item>
                            </router-link>
                            <router-link to="/blog">
                                <menu-item name="2">
                                    BLOG
                                </menu-item>
                            </router-link>
                            <router-link to="/website">
                                <menu-item name="3">
                                    WEBSITE
                                </menu-item>
                            </router-link>
                            <router-link to="/about">
                                <menu-item name="4">
                                    ABOUT
                                </menu-item>
                            </router-link>
                            <router-link to="/test">
                                <menu-item name="5">
                                    TEST
                                </menu-item>
                            </router-link>
                        </div>
                    </Menu>
                </Header>
                <Layout>
                    <Content>
                        <router-view></router-view>
                    </Content>
                </Layout>
                <Footer class="layout-footer-center">2018 &copy; y3tu</Footer>
            </Layout>

            <Sider class="layout-right" :width="270">
                <img src="./assets/logo.png" class="layout-logo"/>
                <div style="padding: 10px">
                    <Card>
                        <div>
                            <h3 style="text-align: center">IT code farmers</h3>
                            <div style="margin-top: 10%">
                                <a href="https://github.com/y3tu" target="_blank">
                                    <Icon type="logo-github" :size="30"/>
                                    <label class="">https://github.com/y3tu</label>
                                </a>
                            </div>
                            <div>
                                <a href="javascript:void(0)" target="_blank">
                                    <Icon type="md-mail" :size="30"/>
                                    <label class="">14643092@qq.com</label>
                                </a>
                            </div>
                            <div>
                                <a href="javascript:void(0)" target="_blank">
                                    <Icon type="ios-pin-outline" :size="30"/>
                                    <label class="">Chongqing</label>
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
            </Sider>
        </Layout>
    </div>
</template>

<script>

    import Vue from 'vue';
    import APlayer from '@moefe/vue-aplayer';
    import {getMusic} from '@/api/blog-api'

    Vue.use(APlayer);

    export default {
        name: 'app',
        data() {
            return {
                audio: [],
            }
        },
        created() {
            let me = this;
            getMusic().then(response => {
                me.audio = response.data.result;
            });
        },
        components: {}
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
        background: #FFFFFF;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-logo {
        margin-left: 15%;
        margin-top: 10%;
        width: 70%;
        height: 20%;
    }

    .layout-logo-title {
        background: white;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 3px;
        left: 20px;
        font-size: 30px !important;
        font-family: Lucida_Handwritdf74cd7e117c83
    }

    .layout-nav {
        width: 370px;
        float: right;
    }

    li.ivu-menu-item {
        font-weight: 600;
        padding: 0 10px;
        font-size: 15px !important;
    }

    .ivu-layout {
        background-color: #FFFFFF;
    }

    .layout-right {
        background-color: #fcfcfc;
        position: fixed;
        right: 0;
        overflow: auto;

        a {
            list-style: none;
            display: inline;
            color: #000000;
        }
        label {
            margin-left: 10%;
            font-size: 10px;
            font-family: Lucida_Handwritdf74cd7e117c83
        }

    }

    .layout-footer-center {
        text-align: center;
        background-color: #FFFFFF;
    }

    .header {
        background: #fff;
    }

    @font-face {
        font-family: Lucida_Handwritdf74cd7e117c83;
        src: url(//cdn.webfont.youziku.com/webfonts/nomal/97411/47284/59f029dff629d81194592a90.gif?r=57305183482);
        src: url(//cdn.webfont.youziku.com/webfonts/nomal/97411/47284/59f029dff629d81194592a90.gif?r=57305183482?#iefix) format('embedded-opentype'), url(//cdn.webfont.youziku.com/webfonts/nomal/97411/47284/59f029dff629d81194592a90.bmp?r=57305183482) format('woff'), url(//cdn.webfont.youziku.com/webfonts/nomal/97411/47284/59f029dff629d81194592a90.jpg?r=57305183482) format('truetype'), url(//cdn.webfont.youziku.com/webfonts/nomal/97411/47284/59f029dff629d81194592a90.png#Lucida_Handwriting) format('svg')
    }

</style>
