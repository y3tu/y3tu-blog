<style>
</style>
<template>
    <div>
        <vue-element-loading :active="show" spinner="bar-fade-scale" :is-full-screen="true" color="#FF6700"></vue-element-loading>
        <span>
             This is my content.
        </span>
    </div>
</template>
<script>
    import VueElementLoading from 'vue-element-loading'


    // 部分样式代码冗长，未作展示
    export default {
        name: "loading",
        data() {
            return {
                show: true
            }

        },
        mounted() {

        },
        components: {
            VueElementLoading
        }
    }
</script>
 