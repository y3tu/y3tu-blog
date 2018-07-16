<template>
    <div>
        <Row>
            <ICol span="24">
                <Carousel autoplay v-model="value2" autoplay-speed="3000" loop>
                    <CarouselItem>
                        <div class="demo-carousel bg_image">
                            <img src="../assets/image/bg/1.jpg"/>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel bg_image">
                            <img src="../assets/image/bg/2.jpg"/>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel bg_image">
                            <img src="../assets/image/bg/3.jpg"/>
                        </div>
                    </CarouselItem>
                </Carousel>
            </ICol>
        </Row>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                value2: 0
            }
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
        height: 100%;
    }
</style>
