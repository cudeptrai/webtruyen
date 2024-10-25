<template>
    <div>
        <div class=" relative w-full" v-if="item">
            <NuxtLink to="/detail">
                <NuxtImg class="rounded-md w-full " width="168" height="218" alt="image" :src="item.image" />
            </NuxtLink>
            <div class="text-center">
                <div class="py-1 font-medium">
                    <NuxtLink to="/detail">{{ item.name }}</NuxtLink>
                </div>
                <div class="text-sm font-medium">
                    <NuxtLink to="/detail"> Chương {{ item.chapter }}</NuxtLink>
                </div>
            </div>
            <button class="bg-blue-400 text-xs px-2 py-1 rounded-lg absolute top-[10px] left-[10px] z-10  ">{{
                item.date }}</button>
            <button v-if="item.isHot"
                class="hot-blink bg-red text-xs px-2 py-1 rounded-lg absolute top-[10px] left-24 z-10 ">Hot</button>
        </div>
    </div>
</template>
<script setup>
defineProps({
    item: {
        type: Object,
        defaul: {}
    }
})
</script>

<style>
@keyframes blink {
    0%, 70% {
        opacity: 1;
    }
    71%, 100% {
        opacity: 0;
    }
}

.hot-blink {
    animation: blink 1.1s infinite;
}
</style>