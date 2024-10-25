<template>
  <div class="min-h-screen flex flex-col text-white">
    <header class="h-[120px]">
      <div class="bg-bg-primary">
        <div class="py-3 container mx-auto max-w-5xl">
          <div class="grid grid-cols-12 items-center">
            <div class="col-span-4">
              <NuxtLink to="/">
                <NuxtImg alt="logo" width="146" height="38" src="images/logo.png" />
              </NuxtLink>
            </div>
            <div class="col-span-4">
              <div class="flex items-center gap-16">
                <div class="relative group">
                  <div class="font-medium text-lg">Thể Loại</div>
                  <Icon class="absolute text-3xl top-[0px] -right-[26px]" name="material-symbols:arrow-drop-down" />
                  <div
                    class="fixed left-0 mt-1 hidden w-screen group-hover:block border-b border-t border-white bg-bg-primary shadow-md before:absolute before:-inset-1 before:-top-2">
                    <div class="container mx-auto max-w-5xl">
                      <ul class="grid grid-cols-8">
                        <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          <NuxtLink to="/detail">Thể loại 1</NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="relative group">
                  <div class="font-medium text-lg">Xếp Hạng</div>
                  <Icon class="absolute text-3xl top-[0px] -right-[26px]" name="material-symbols:arrow-drop-down" />
                  <div
                    class="fixed left-0 mt-1 hidden w-screen group-hover:block border-b border-t border-white bg-bg-primary shadow-md before:absolute before:-inset-1 before:-top-2 before:h-[7px] z-50">
                    <div class="container mx-auto max-w-5xl">
                      <ul class="grid grid-cols-8">
                        <li v-for="(item, index) in ListMenu" :key="index" class="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          <NuxtLink to="/detail">{{ item.name }}</NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-4">
              <div class="relative">
                <input type="text" class="w-full py-2 rounded-full focus:outline-none pl-6"
                  placeholder="Bạn muốn tìm truyện gì" style="background-color: #3a3b3c;">
                <Icon class="absolute top-3 font-medium right-5 text-xl" name="ion:search" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray">
        <div class="container mx-auto max-w-5xl">
          <ul class="flex gap-10 cursor-pointer h-full">
            <li class="hover:bg-orange-500 py-4 px-2">
              <NuxtLink to="/">Trang Chủ</NuxtLink>
            </li>
            <li class="hover:bg-orange-500 py-4 px-2">
              <NuxtLink to="/">Con Gái</NuxtLink>
            </li>
            <li class="hover:bg-orange-500 py-4 px-2">
              <NuxtLink to="/">Con Trai</NuxtLink>
            </li>
            <li class="hover:bg-orange-500 py-4 px-2">
              <NuxtLink to="/">Tìm Truyện</NuxtLink>
            </li>
            <li class="hover:bg-orange-500 py-4 px-2">
              <NuxtLink to="/">Lịch Sử</NuxtLink>
            </li>
            <li class="hover:bg-orange-500 py-4 px-2">
              <NuxtLink to="/">Theo Dõi</NuxtLink>
            </li>
            <li class="hover:bg-orange-500 py-4 px-2">
              <NuxtLink to="/">Thảo Luận</NuxtLink>
            </li>
            <li class="hover:bg-orange-500 py-4 px-2">
              <NuxtLink to="/">Fanpage</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main class="flex-grow bg-bg-primary">
      <slot />
    </main>
    <footer>
      <div style="background-color: #242526; border-top: 5px solid #fff;">
        <div class="container mx-auto max-w-5xl">
          <div class="p-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <div class="pb-2">
                  <NuxtLink to="/">
                    <NuxtImg alt="logo" width="146" height="38" src="images/logo.png" />
                  </NuxtLink>
                </div>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/facebook"
                  width="340" height="140" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                  allowTransparency="true" allow="encrypted-media"></iframe>
              </div>
              <div>
                <ul class="flex gap-3 flex-wrap">
                  <li v-for="(item, index) in ListFooter" :key="index" class="bg-zinc-900 p-2">
                    <NuxtLink class="text-sm" to="/">{{ item.name }}</NuxtLink>
                  </li>
                </ul>
                <div class="mt-4">
                  <div class="text-sm">Email: cskh.truyenqq@gmail.com</div>
                  <div>
                    <NuxtLink class="text-sm" to="/">Chính Sách Bảo Mật</NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>

</template>

<script lang="ts" setup>
const ListMenu = [
  { name: 'Action' },
  { name: 'Detective' },
  { name: 'Huyền Huyễn' },
  { name: 'Military' },
]
const ListFooter = [
  { name: 'Truyện Tranh' },
  { name: 'Truyện Tranh Online' },
  { name: 'Truyện Tranh Mới' },
  { name: 'Truyện Tranh Hay' },
  { name: 'Đọc Truyện Tranh' },
  { name: 'Truyện Tranh Mới' },
  { name: 'Truyện Tranh' },
  { name: 'Truyện Tranh Online' },
  { name: 'Truyện Tranh Mới' },
  { name: 'Truyện Tranh' },
  { name: 'Truyện Tranh Online' },
  { name: 'Truyện Tranh Mới' },
  { name: 'Truyện Tranh Hay' },
  { name: 'Đọc Truyện Tranh' },
  { name: 'Truyện Tranh Mới' },
  { name: 'Truyện Tranh' },
  { name: 'Truyện Tranh Online' },
  { name: 'Truyện Tranh Mới' },
]
</script>

<style>
.menu-dropdown::after {
  content: '';
  height: 10px;
  background: #fff;
  position: absolute;
  top: 0;
}
</style>