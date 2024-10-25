<template>
    <div>
      <NuxtLink :to="'/p/'+item.slug"></NuxtLink>
      <div v-for="(item,index) in banners">
        {{ item.name }}
        <NuxtImg :src="item.image" />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  const config = useRuntimeConfig()
  const banners = ref([])
    const response = await fetch(config.public.apiBase + '/load-data-home-page')
    const data = await response.json()
    console.log(data)
    if (response.ok) {
    banners.value = data.banners
    }else{
      throw createError({
          statusCode:data.statusCode ,
          statusMessage: data.statusMessage
      })
    }

  
  </script>
  
  <style></style>