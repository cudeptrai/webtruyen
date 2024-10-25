<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <div>
        <NuxtLayout>
            <div>
                <section class="bg-white dark:bg-gray-900">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div class="mx-auto max-w-screen-sm text-center text-black">
                            <h1
                                class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                                {{ error.statusCode }}</h1>

                            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                                {{ error.message }}

                            </p>

                            <button @click="handleError">
                                <div
                                    class="inline-flex text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">
                                    Back
                                    to Homepage
                                </div>
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </NuxtLayout>
    </div>
</template>
