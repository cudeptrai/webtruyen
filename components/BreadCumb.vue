<template>
    <ul class="flex items-center justify-start">
        <li class="breadcrumb hover:opacity-85">
            <NuxtLink to="/" class=" font-medium">Trang Chủ</NuxtLink>

        </li>
        <li v-for="(item, index) in item" :key="index"  class="breadcrumb hover:opacity-85">
            <NuxtLink :to="item.link" class=" font-medium">{{ item.name }}</NuxtLink>
        </li>
    </ul>


</template>

<script lang="ts" setup>
defineProps({
    item: {
        type: Object,
        default: {}
    }
})
</script>

<style>
.breadcrumb:not(:last-child){
    padding-right: 7px;

}
.breadcrumb:not(:last-child)::after {
    content: '/';
    margin-left: 7px ;
}
</style>