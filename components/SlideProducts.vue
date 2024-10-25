<template>
  <div>
      <swiper :style="{ '--swiper-navigation-color': '#2c2c2c' }" :slides-per-view="slideShow" :spaceBetween="10"
          :autoplay="{
              delay: 2000,
              disableOnInteraction: true,
          }" :navigation="true" :modules="[SwiperAutoplay, SwiperNavigation]" class="mySwiper">
          <SwiperSlide v-for="(item, index) in data" :key="index">
            <ProductItem :item="item" />
          </SwiperSlide>
      </swiper>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  data: {
      type: Object,
      default: {}
  },
  slideShow: {
      type: Number,
      default: 5
  }
})
</script>

<style></style>