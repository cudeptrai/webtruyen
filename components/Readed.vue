<script setup lang="js">
const { visitedComics } = useVisitedComics();
</script>
<template>
  <div v-if="visitedComics.length !== 0" class="flex items-center gap-1 my-5">
    <Icon class="text-3xl" name="mdi:history" />
    <h2 class="text-2xl font-bold">Tiếp tục đọc</h2>
  </div>
  <div class="inline-flex gap-5 overflow-hidden">
    <NuxtLink
      :to="visited.url"
      v-for="visited in visitedComics"
      :id="visited.id"
    >
      <div class="flex gap-2 items-center">
        <NuxtImg
          class="rounded-md"
          width="30"
          height="20"
          :src="visited.image"
          :alt="visited.name"
        />
        <div class="h-full flex flex-col justify-between gap-0">
          <p class="text-sm truncate max-w-40">{{ visited.name }}</p>
          <p class="text-xs">chương {{ visited.chapter }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
