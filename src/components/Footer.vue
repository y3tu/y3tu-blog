<template>
    <div class="wrapper-footer">
        <div class="footer">
            <div class="address flex">
                <div>
                    <div class="copyright">
                        <span>
                          Copyright ©2020 - 2020 Yao
                        </span>
                    </div>
                </div>
                <div class="qrcode">
                    <img :src="logo"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import logo from '@/assets/image/logo.png'

    export default {
        name: 'Footer',
        data() {
            return {
                logo
            }
        }
    }
</script>

<style type="text/scss" scoped lang="scss">
    .wrapper-footer {
        clear: both;
        background-color: #232f3d;
        position: relative;
        z-index: 100;
        color: rgba(255, 255, 255, 0.8);

        .footer {
            padding: 24px 0;
            font-size: 14px;

            .copyright {
                font-size: 0.75rem;
                color: rgba(255, 255, 255, 0.65);

                a {
                    color: rgba(255, 255, 255, 0.65);
                    text-decoration: none;
                    margin-left: 25px;
                }
            }

            .blogroll {
                .link-box .link-item {
                    list-style: none;
                    padding: 0 15px;
                    line-height: 1;

                    + .link-item {
                        border-left: 1px solid;
                    }
                }
            }

            .address {
                justify-content: center;
                align-items: center;
                text-align: center;

                ul {
                    overflow: hidden;
                    margin-top: 0;
                    margin-bottom: 5px;

                    li {
                        list-style: none;
                        float: left;

                        & + li {
                            margin-left: 40px;
                        }
                    }
                }
            }

            .qrcode {
                width: 72px;
                height: 72px;
                margin-left: 50px;

                img {
                    max-width: 100%;
                }
            }
        }

        .blogroll .copyright {
            padding-left: 14px;
        }
    }
</style>
