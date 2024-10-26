<script setup lang="js">
const route = useRoute();
const { data } = useFetch(`/api/comics/${route.params.id}`);
const comics = ref();
const readed = ref();
const beginChapter = ref();
watch(data, (value) => {
  if (value?.response) {
    comics.value = value?.response;
    breadcrum.value = [
      {
        name: comics.value?.name,
        link: route.params.id,
      },
    ];
  }

  readed.value = findComicById(route.params.id);

  beginChapter.value =
    route.params.id +
    "/" +
    comics.value.chapters[comics.value.chapters.length - 1].href;
});

const breadcrum = ref([
  {
    name: comics.value?.name,
    link: route.params.id,
  },
]);

const { addVisitedComic, findComicById } = useVisitedComics();
// console.log(route.params.id);
// const t = findComicById(route.params.)

// console.log(readed);
</script>
<template>
  <div class="bg-gray mt-5">
    <div class="p-4">
      <BreadCumb :item="breadcrum" />
      <div class="my-4">
        <div class="flex gap-6">
          <div>
            <NuxtImg
              class="rounded-md"
              width="192"
              height="250"
              :src="comics?.image"
            />
          </div>
          <div>
            <h1 class="text-xl font-semibold pb-2">{{ comics?.name }}</h1>
            <ul>
              <li
                class="grid grid-cols-12 py-1 items-center justify-between gap-16"
              >
                <div class="col-span-3">
                  <div class="flex gap-1 items-center">
                    <Icon class="text-xl" name="material-symbols:person" />
                    <div>Tác giả</div>
                  </div>
                </div>
                <div class="col-span-9">{{ comics?.author }}</div>
              </li>
              <li
                class="grid grid-cols-12 py-1 items-center justify-between gap-16"
              >
                <div class="col-span-3">
                  <div class="flex gap-1 items-center">
                    <Icon class="text-xl" name="line-md:uploading" />
                    <div>Tình trạng</div>
                  </div>
                </div>
                <div class="col-span-9">{{ comics?.status }}</div>
              </li>
              <li
                class="grid grid-cols-12 py-1 items-center justify-between gap-16"
              >
                <div class="col-span-3">
                  <div class="flex gap-1 items-center">
                    <Icon class="text-xl" name="ion:md-thumbs-up" />
                    <div>Lượt thích</div>
                  </div>
                </div>
                <div class="col-span-9">{{ comics?.like }}</div>
              </li>
              <li
                class="grid grid-cols-12 py-1 items-center justify-between gap-16"
              >
                <div class="col-span-3">
                  <div class="flex gap-1 items-center">
                    <Icon class="text-xl" name="mdi:cards-heart" />
                    <div>Lượt theo dõi</div>
                  </div>
                </div>
                <div class="col-span-9">{{ comics?.follow }}</div>
              </li>
              <li
                class="grid grid-cols-12 py-1 items-center justify-between gap-16"
              >
                <div class="col-span-3">
                  <div class="flex gap-1 items-center">
                    <Icon class="text-xl" name="mdi:eye-outline" />
                    <div>Lượt xem</div>
                  </div>
                </div>
                <div class="col-span-9">{{ comics?.view }}</div>
              </li>
            </ul>
            <div class="flex gap-2 pt-1">
              <button
                v-for="(item, index) in comics?.category"
                :key="index"
                class="px-2 py-1 border border-orange-500 rounded text-sm hover:bg-orange-500 duration-300"
              >
                <NuxtLink to="/">{{ item }}</NuxtLink>
              </button>
            </div>
            <div class="flex gap-1 pt-2">
              <NuxtLink :to="beginChapter">
                <button
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Đọc từ đầu
                </button>
              </NuxtLink>
              <NuxtLink v-if="readed" :to="readed.url">
                <button
                  class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Đọc Tiếp
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-3">
        <div class="flex gap-1 items-center text-primary">
          <Icon class="text-xl" name="mdi:information-outline" />
          <p>Giới thiệu</p>
        </div>
        {{ comics?.description }}
      </div>
      <div class="pt-3">
        <div class="flex gap-1 items-center text-primary">
          <Icon class="text-xl" name="mdi:format-align-justify" />
          <p>Danh sách chương</p>
        </div>
        <div v-if="comics">
          <div v-for="chapter in comics?.chapters">
            <NuxtLink
              :to="`${route.params.id}/${chapter.href}`"
              @click="
                addVisitedComic({
                  id: comics?.id || '',
                  name: comics?.name || '',
                  image: comics?.image || '',
                  chapter: chapter.href?.match(/\d+/)[0] || '',
                  url: route.fullPath + '/' + chapter.href,
                })
              "
            >
              <div class="flex items-center justify-between gap-16 px-2">
                <div class="flex gap-1 items-center">
                  <!-- <Icon class="text-xl" name="mdi:book" /> -->
                  <div>Chương {{ chapter.href.match(/\d+/)[0] }}</div>
                </div>
                <p class="">{{ chapter.date }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
