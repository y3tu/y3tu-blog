<style>
    .demo-spin-icon-load {
        animation: ani-demo-spin 1s linear infinite;
    }

    @keyframes ani-demo-spin {
        from {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .demo-spin-col {
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
<template>
    <Row>
        <i-col class="demo-spin-col" span="24">
            <Spin fix>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </i-col>
    </Row>
</template>
<script>
    // 部分样式代码冗长，未作展示
    export default {
        name: 'loading'
    }
</script>