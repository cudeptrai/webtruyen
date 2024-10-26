<template>
  <div class="container mx-auto max-w-5xl">
    <div class="mt-5">
      <Readed />
      <div class="flex items-center gap-1">
        <Icon class="text-3xl text-red" name="ic:round-star" />
        <div class="text-2xl text-red font-bold">Truyện Hay</div>
      </div>
      <div class="mt-3">
        <SlideProducts :data="ListProduct" />
      </div>
      <div class="flex items-center gap-1 my-5">
        <Icon class="text-3xl" name="ic:baseline-cloud-download" />
        <div class="text-2xl font-bold">Truyện mới cập nhật</div>
      </div>
      <div class="mt-3">
        <div class="grid grid-cols-5 gap-4">
          <div v-for="(item, index) in ListProduct" :key="index">
            <ProductItem :item="item" />
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button
        class="p-3 bg-primary rounded-md font-semibold my-6 hover:bg-orange-600"
      >
        <NuxtLink to="/">Xem thêm nhiều truyện</NuxtLink>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const ListProduct = [
  {
    name: "Ta Là Tà Đế",
    chapter: "168",
    image: "images/dau-pha-thuong-khung_1552264817.jpg",
    date: "1 ngày trước",
    isHot: true,
  },
  {
    name: "Ta Là Tà Đế",
    chapter: "168",
    image: "images/dau-pha-thuong-khung_1552264817.jpg",
    date: "1 ngày trước",
    isHot: true,
  },
  {
    name: "Ta Là Tà Đế",
    chapter: "168",
    image: "images/dau-pha-thuong-khung_1552264817.jpg",
    date: "1 ngày trước",
    isHot: true,
  },
];
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  background-color: #ffffffa6;
  /* Màu nền nút navigation */
  padding: 20px;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 22px;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: #e2dbdb;
  color: black;
}
</style>
