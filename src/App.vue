<template>
    <div class="layout">
        <Layout>
            <Header class="header">
                <Menu mode="horizontal" theme="light" active-name="1">
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
                    </div>
                </Menu>
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Card>
                    <router-view></router-view>
                </Card>
            </Content>
            <Footer class="layout-footer-center">2018-2018 &copy; y3tu</Footer>
        </Layout>
    </div>
</template>

<script>

    export default {
        name: 'app',
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
        width: 420px;
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
