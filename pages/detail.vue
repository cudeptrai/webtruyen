<template>
  <div>
    <div class="container mx-auto max-w-5xl">
      <div class="bg-gray mt-5">
        <div class="p-4">
          <BreadCumb :item="BreadCumbList" />
          <div class="my-4">
            <div class="flex gap-6">
              <div>
                <NuxtImg class="rounded-md" width="192" height="250" src="/images/vua-thang-cap_1571835515.jpg" />
              </div>
              <div>
                <h1 class="text-xl font-semibold pb-2">
                  Vua Thăng Cấp
                </h1>
                <ul>
                  <li class="grid grid-cols-12 py-1 items-center justify-between gap-16">
                    <div class="col-span-3">
                      <div class="flex gap-1 items-center">
                        <Icon class="text-xl" name="material-symbols:person" />
                        <div>Tác Giả</div>
                      </div>
                    </div>
                    <div class="col-span-9">Đang cập nhật</div>
                  </li>
                  <li class="grid grid-cols-12 py-1 items-center justify-between gap-16">
                    <div class="col-span-3">
                      <div class="flex gap-1 items-center">
                        <Icon class="text-xl" name="line-md:uploading" />
                        <div>Tình trạng</div>
                      </div>
                    </div>
                    <div class="col-span-9">Đang cập nhật</div>
                  </li>
                  <li class="grid grid-cols-12 py-1 items-center justify-between gap-16">
                    <div class="col-span-3">
                      <div class="flex gap-1 items-center">
                        <Icon class="text-xl" name="ion:md-thumbs-up" />
                        <div>Lượt thích</div>
                      </div>
                    </div>
                    <div class="col-span-9">13668</div>
                  </li>
                  <li class="grid grid-cols-12 py-1 items-center justify-between gap-16">
                    <div class="col-span-3">
                      <div class="flex gap-1 items-center">
                        <Icon class="text-xl" name="mdi:cards-heart" />
                        <div>Lượt theo dõi</div>
                      </div>
                    </div>
                    <div class="col-span-9">61,987</div>
                  </li>
                  <li class="grid grid-cols-12 py-1 items-center justify-between gap-16">
                    <div class="col-span-3">
                      <div class="flex gap-1 items-center">
                        <Icon class="text-xl" name="mdi:eye-outline" />
                        <div>Lượt xem</div>
                      </div>
                    </div>
                    <div class="col-span-9">15,638,939</div>
                  </li>
                </ul>
                <div class="flex gap-2 pt-1" >
                  <button v-for="(item,index) in TagDetail" :key="index" class="px-2 py-1 border border-orange-500 rounded text-sm hover:bg-orange-500 duration-300"><NuxtLink to="/">{{ item.name }}</NuxtLink></button>
                </div>
                <div class="flex gap-1">
                  <button><NuxtLink to="">Đọc từ đầu</NuxtLink></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const TagDetail = [
  {name: 'Action'},
  {name: 'Adventure'},
  {name: 'Fantasy'},
  {name: 'Manhwa'},
  {name: 'Webtoon'},
]
const BreadCumbList = [
  {
    name: 'Ta Là Tà Đế',
    link: '/detail'
  },
  {
    name: 'Chương 176',
    link: '/detail'
  },
]

</script>

<style></style>