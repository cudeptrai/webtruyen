<template>
    <div>
        <swiper :style="{ '--swiper-navigation-color': '#2c2c2c' }" :slides-per-view="slideShow" :spaceBetween="10"
            :autoplay="{
                delay: 2000,
                disableOnInteraction: true,
            }" :navigation="true" :modules="[SwiperAutoplay, SwiperNavigation]" class="mySwiper">
            <SwiperSlide v-for="(item, index) in data" :key="index">
              
            </SwiperSlide>
        </swiper>
    </div>
</template>

<script lang="ts" setup>
const showHot = ref(true);

const toggleHot = () => {
    showHot.value = true;
    setTimeout(() => {
        showHot.value = false;
    }, 800);
};

onMounted(() => {
    const interval = setInterval(() => {
        toggleHot();
    }, 1100);
    onUnmounted(() => {
        clearInterval(interval);
    });
});
defineProps({
    data: {
        type: Object,
        default: {}
    },
    slideShow: {
        type: Number,
        default: 6
    }
})
</script>

<style></style>