<style>
</style>
<template>
    <div style="text-align: center">
        <Spin size="large" style="margin: 0 auto;"></Spin>
        <span>博客建设中</span>
    </div>

</template>
<script>
    import articleList from '../components/ArticleList';

    // 部分样式代码冗长，未作展示
    export default {
        name: 'blog',
        components: {
            articleList
        }
    }
</script>